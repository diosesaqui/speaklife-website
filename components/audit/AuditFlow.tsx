"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  CHOICE_STEPS,
  EMAIL_QUESTION,
  OWN_WORDS_MAX,
  Q1_QUESTION,
  Q2_QUESTION,
  STORMS,
  SUBSTORMS,
  choiceOptions,
  gapsFor,
  isStepAnswered,
  methodFor,
  resolveRoute,
  stepsFor,
  type Answers,
  type Option,
  type StepId,
} from "@/lib/audit/model";
import { loadSession, readUtm, saveSession, subscribe, track, type AuditSession } from "@/lib/audit/client";

const ADVANCE_DELAY_MS = 180;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Furthest step someone may stand on: the first one still unanswered. */
function furthestReachable(a: Answers): number {
  const steps = stepsFor(a);
  const i = steps.findIndex((s) => !isStepAnswered(s, a));
  return i === -1 ? steps.length - 1 : i;
}

function stepFromUrl(a: Answers): StepId | null {
  const q = new URLSearchParams(location.search).get("q") as StepId | null;
  const steps = stepsFor(a);
  const i = q ? steps.indexOf(q) : -1;
  return i !== -1 && i <= furthestReachable(a) ? steps[i] : null;
}

export default function AuditFlow() {
  const router = useRouter();
  const [session, setSession] = useState<AuditSession | null>(null);
  const [step, setStep] = useState<StepId>("q1");
  const pushedEntries = useRef(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  const advancing = useRef(false);

  // Restore from sessionStorage after mount (static page, no server state).
  useEffect(() => {
    const s = loadSession();
    if (!s.utm) s.utm = readUtm();
    const steps = stepsFor(s.answers);
    const start = stepFromUrl(s.answers) ?? steps[furthestReachable(s.answers)];
    // §10 audit_started when Q1 first renders. A session without the flag
    // has no answers yet, so it always opens on Q1.
    if (!s.flags?.started && start === "q1") {
      track({
        event: "audit_started",
        properties: { utm_source: s.utm.utm_source ?? null, utm_campaign: s.utm.utm_campaign ?? null },
      });
      s.flags = { ...s.flags, started: true };
      saveSession(s);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrating from storage
    setSession(s);
    setStep(start);
    history.replaceState(history.state, "", `/audit?q=${start}`);
  }, []);

  const update = useCallback((next: AuditSession) => {
    setSession(next);
    saveSession(next);
  }, []);

  // Browser back and forward move between questions.
  useEffect(() => {
    const onPop = () => {
      if (!session) return;
      pushedEntries.current = Math.max(0, pushedEntries.current - 1);
      const target = stepFromUrl(session.answers);
      if (target) setStep(target);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [session]);

  // Move focus to each new question so screen readers announce it.
  useEffect(() => {
    if (!session) return;
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step, session]);

  // §11 preload the result page from Q6 on, so beat 1 is instant.
  useEffect(() => {
    if (!session) return;
    const steps = stepsFor(session.answers);
    if (steps.indexOf(step) >= steps.indexOf("q6")) router.prefetch("/audit/result");
  }, [step, session, router]);

  if (!session) return <div className="min-h-[100dvh]" aria-busy="true" />;

  const answers = session.answers;
  const steps = stepsFor(answers);
  const index = steps.indexOf(step);

  const goForward = (nextAnswers: Answers) => {
    const nextSteps = stepsFor(nextAnswers);
    const next = nextSteps[nextSteps.indexOf(step) + 1];
    if (!next) return;
    pushedEntries.current += 1;
    history.pushState(history.state, "", `/audit?q=${next}`);
    setStep(next);
  };

  const goBack = () => {
    if (index === 0) return;
    if (pushedEntries.current > 0) {
      history.back();
      return;
    }
    const prev = steps[index - 1];
    history.replaceState(history.state, "", `/audit?q=${prev}`);
    setStep(prev);
  };

  const answer = (patch: Answers, question: string, value: string) => {
    // A double tap during the highlight must not skip a question.
    if (advancing.current) return;
    advancing.current = true;
    const nextAnswers = { ...answers, ...patch };
    // Changing Q1 invalidates a Q1b answer from the other branch.
    if (patch.storm && patch.storm !== answers.storm) delete nextAnswers.substorm;
    // Q7's options depend on the storm, so drop a voice the new storm doesn't offer.
    if (nextAnswers.loudest && !isStepAnswered("q7", nextAnswers)) delete nextAnswers.loudest;
    update({ ...session, answers: nextAnswers });
    track({ event: "audit_question_answered", properties: { question, value } });
    setTimeout(() => {
      advancing.current = false;
      goForward(nextAnswers);
    }, ADVANCE_DELAY_MS);
  };

  let body: React.ReactNode;
  let heading: string;

  if (step === "q1") {
    heading = Q1_QUESTION;
    body = (
      <Choices
        options={STORMS}
        selected={answers.storm}
        onPick={(v) => answer({ storm: v }, "q1", v)}
      />
    );
  } else if (step === "q1b") {
    const branch = SUBSTORMS[answers.storm!]!;
    heading = branch.question;
    body = (
      <Choices
        options={branch.options}
        selected={answers.substorm}
        onPick={(v) => answer({ substorm: v }, "q1b", v)}
      />
    );
  } else if (step === "q2") {
    heading = Q2_QUESTION;
    body = (
      <OwnWords
        initial={answers.own_words ?? ""}
        onDone={(text) => {
          const own_words = text.trim().slice(0, OWN_WORDS_MAX);
          const nextAnswers = { ...answers, own_words };
          update({ ...session, answers: nextAnswers });
          // Never the text itself. It belongs in Klaviyo and nowhere else.
          track({ event: "audit_question_answered", properties: { question: "q2", value: own_words ? "provided" : "blank" } });
          goForward(nextAnswers);
        }}
      />
    );
  } else if (step === "email") {
    heading = EMAIL_QUESTION;
    body = (
      <EmailCapture
        onSubmit={(email) => {
          const route = resolveRoute(answers.storm, answers.substorm)!;
          const completedAt = new Date().toISOString();
          const method = methodFor(answers);
          const gaps = gapsFor(answers).map((g) => g.id);
          update({ ...session, completedAt });
          // The result never waits on this.
          subscribe(email, { answers, route, method, gaps, completedAt }).then((ok) => {
            if (ok) track({ event: "audit_email_submitted", properties: { storm: route.storm, pain: route.pain } });
          });
          router.push("/audit/result");
        }}
      />
    );
  } else {
    const q = CHOICE_STEPS[step];
    heading = q.question;
    body = (
      <Choices
        options={choiceOptions(step, answers)}
        selected={answers[q.key]}
        onPick={(v) => answer({ [q.key]: v } as Answers, step, v)}
      />
    );
  }

  const progress = ((index + 1) / steps.length) * 100;

  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-lg flex-col px-4 pb-6 pt-3 sm:px-6">
      <div className="flex h-12 items-center gap-3">
        <button
          type="button"
          onClick={goBack}
          disabled={index === 0}
          className="-ml-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:invisible"
          aria-label="Back to the previous question"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div
          className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={index + 1}
          aria-label={`Step ${index + 1} of ${steps.length}`}
        >
          <div className="h-full rounded-full bg-gold transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>
        <span className="w-11 text-right text-xs tabular-nums text-white/50" aria-hidden="true">
          {index + 1}/{steps.length}
        </span>
      </div>

      <div key={step} className="audit-step sm:mt-[6vh]">
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">The Storm Audit</p>
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="mt-2 text-[1.6rem] font-semibold leading-tight tracking-tight text-white outline-none sm:text-3xl"
        >
          {heading}
        </h1>
        <div className="mt-7">{body}</div>
      </div>
    </div>
  );
}

function Choices<V extends string>({
  options,
  selected,
  onPick,
}: {
  options: Option<V>[];
  selected: string | undefined;
  onPick: (value: V) => void;
}) {
  // Q1 has eight options and must fit a 667px-tall phone without scrolling.
  const dense = options.length > 5;
  return (
    <div className={`flex flex-col ${dense ? "gap-2" : "gap-2.5"}`} role="group">
      {options.map((o) => {
        const on = o.value === selected;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={on}
            onClick={() => onPick(o.value)}
            className={`w-full rounded-2xl border px-5 text-left leading-snug ${
              dense ? "min-h-[48px] py-2.5 text-base" : "min-h-[56px] py-3.5 text-[1.0625rem]"
            } transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              on
                ? "border-gold bg-gold/15 text-white"
                : "border-white/15 bg-white/[0.04] text-white/90 hover:border-white/30 active:bg-white/10"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function OwnWords({ initial, onDone }: { initial: string; onDone: (text: string) => void }) {
  const [text, setText] = useState(initial);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onDone(text);
      }}
      className="flex flex-col gap-3"
    >
      <label htmlFor="own-words" className="text-sm text-white/60">
        One line. Optional. We will quote it back to you in your results.
      </label>
      <input
        id="own-words"
        type="text"
        value={text}
        maxLength={OWN_WORDS_MAX}
        onChange={(e) => setText(e.target.value)}
        autoComplete="off"
        enterKeyHint="next"
        placeholder="What is it, really?"
        className="min-h-[56px] w-full rounded-2xl border border-white/15 bg-white/[0.06] px-5 text-base text-white placeholder:text-white/35 focus:border-gold focus:outline-none"
      />
      <div className="flex justify-between text-xs text-white/40" aria-hidden="true">
        <span />
        <span className="tabular-nums">
          {text.length}/{OWN_WORDS_MAX}
        </span>
      </div>
      <button
        type="submit"
        className="min-h-[56px] w-full rounded-full bg-gold text-base font-semibold text-[#1A264D] transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/50"
      >
        {text.trim() ? "Continue" : "Skip this one"}
      </button>
    </form>
  );
}

function EmailCapture({ onSubmit }: { onSubmit: (email: string) => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const value = email.trim();
        if (!EMAIL_RE.test(value)) {
          setError(true);
          return;
        }
        onSubmit(value);
      }}
      className="flex flex-col gap-3"
    >
      <label htmlFor="audit-email" className="text-sm text-white/60">
        Your results are ready. We will email your plan so you can keep it.
      </label>
      <input
        id="audit-email"
        type="email"
        inputMode="email"
        autoComplete="email"
        enterKeyHint="send"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (error) setError(false);
        }}
        aria-invalid={error}
        aria-describedby={error ? "audit-email-error" : "audit-email-note"}
        placeholder="you@example.com"
        className={`min-h-[56px] w-full rounded-2xl border bg-white/[0.06] px-5 text-base text-white placeholder:text-white/35 focus:outline-none ${
          error ? "border-red-400" : "border-white/15 focus:border-gold"
        }`}
      />
      {error && (
        <p id="audit-email-error" role="alert" className="text-sm text-red-300">
          That email does not look right. Check it and try again.
        </p>
      )}
      <button
        type="submit"
        className="min-h-[56px] w-full rounded-full bg-gold text-base font-semibold text-[#1A264D] transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/50"
      >
        Send my plan
      </button>
      <p id="audit-email-note" className="text-center text-xs leading-relaxed text-white/45">
        You will get your plan and a few short emails for your storm. Unsubscribe anytime.{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-white/70">
          Privacy
        </Link>
      </p>
    </form>
  );
}
