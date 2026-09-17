// ── The Storm Audit: questions, routing and derived results ─────────────────
//
// Source of truth: docs/storm-audit-web-spec.md in diosesaqui/SpeakLife.
// Pure data and pure functions, no imports, so it runs in the browser and
// in `node scripts/audit-model.test.mjs` unchanged.
//
// Copy rule: no em dashes or en dashes anywhere in rendered copy. The test
// script enforces it over every string in this file.

export type Storm = "mind" | "body" | "money" | "self" | "calling" | "heart" | "people" | "all";
export type Substorm = "loss" | "flat" | "spouse" | "child" | "prodigal";

// Closed set, defined by SubscriptionStore.OnboardingVariant in the iOS app.
// A value outside it is silently ignored by the app. Do not invent codes.
export type ObCode =
  | "anxiety"
  | "healing"
  | "provision"
  | "renewal"
  | "outcomes"
  | "hardtimes"
  | "grief"
  | "depression"
  | "marriage"
  | "parenting"
  | "prodigal";

export type Pain =
  | "peace"
  | "health"
  | "abundance"
  | "identity"
  | "purpose"
  | "grief"
  | "joy"
  | "marriage"
  | "family"
  | "more";

export type Duration = "weeks" | "months" | "year" | "years";
export type Response = "pray_about" | "read_verse" | "distract" | "tell_someone" | "nothing";
export type Spoken = "never" | "once_twice" | "sometimes" | "most_days";
export type FirstHour = "phone" | "news" | "silence" | "worship" | "the_word";
export type Loudest = "diagnosis" | "numbers" | "someone_said" | "my_own" | "gods";
export type KnowsVerse = "no" | "one" | "a_few" | "several";
export type Method = "Reader" | "Asker" | "Speaker";

export interface Answers {
  storm?: Storm;
  substorm?: Substorm;
  own_words?: string;
  duration?: Duration;
  response?: Response;
  spoken?: Spoken;
  first_hour?: FirstHour;
  loudest?: Loudest;
  knows_verse?: KnowsVerse;
}

export interface Option<V extends string> {
  value: V;
  label: string;
}

// ── §3 Q1 and routing ───────────────────────────────────────────────────────

interface StormRow extends Option<Storm> {
  ob: ObCode | null; // null → resolved by Q1b
  pain: Pain | null;
}

export const STORMS: StormRow[] = [
  { value: "mind", label: "My mind will not stop.", ob: "anxiety", pain: "peace" },
  { value: "body", label: "My body.", ob: "healing", pain: "health" },
  { value: "money", label: "Money, work, the bills.", ob: "provision", pain: "abundance" },
  { value: "self", label: "How I see myself.", ob: "renewal", pain: "identity" },
  { value: "calling", label: "What I am supposed to be doing with my life.", ob: "outcomes", pain: "purpose" },
  { value: "heart", label: "My joy, or something I lost.", ob: null, pain: null },
  { value: "people", label: "Someone I love.", ob: null, pain: null },
  { value: "all", label: "Everything at once.", ob: "hardtimes", pain: "more" },
];

interface SubstormRow extends Option<Substorm> {
  ob: ObCode;
  pain: Pain;
}

export const SUBSTORMS: Partial<Record<Storm, { question: string; options: SubstormRow[] }>> = {
  heart: {
    question: "Which is closer?",
    options: [
      { value: "loss", label: "I lost someone.", ob: "grief", pain: "grief" },
      { value: "flat", label: "Everything feels flat. The joy is gone.", ob: "depression", pain: "joy" },
    ],
  },
  people: {
    question: "Who is on your heart?",
    options: [
      { value: "spouse", label: "My marriage.", ob: "marriage", pain: "marriage" },
      { value: "child", label: "My kids.", ob: "parenting", pain: "family" },
      { value: "prodigal", label: "Someone who has walked away from God.", ob: "prodigal", pain: "family" },
    ],
  },
};

export function needsSubstorm(storm: Storm | undefined): boolean {
  return !!storm && !!SUBSTORMS[storm];
}

export interface Route {
  storm: Storm;
  substorm: Substorm | null;
  ob: ObCode;
  pain: Pain;
  pdf: string;
}

/** Q1 (+ Q1b) → onboarding arm, result copy key and PDF. Null if incomplete. */
export function resolveRoute(storm: Storm | undefined, substorm: Substorm | undefined): Route | null {
  const row = STORMS.find((s) => s.value === storm);
  if (!row) return null;
  const pdf = PDFS[row.value];
  const branch = SUBSTORMS[row.value];
  if (!branch) return { storm: row.value, substorm: null, ob: row.ob!, pain: row.pain!, pdf };
  const sub = branch.options.find((o) => o.value === substorm);
  if (!sub) return null;
  return { storm: row.value, substorm: sub.value, ob: sub.ob, pain: sub.pain, pdf };
}

// ── §4 Q2 to Q8 ─────────────────────────────────────────────────────────────

export const OWN_WORDS_MAX = 140;

export const DURATIONS: (Option<Duration> & { months: number })[] = [
  { value: "weeks", label: "A few weeks", months: 1 },
  { value: "months", label: "A few months", months: 4 },
  { value: "year", label: "About a year", months: 12 },
  { value: "years", label: "Years", months: 36 },
];

export const RESPONSES: Option<Response>[] = [
  { value: "pray_about", label: "I pray about it" },
  { value: "read_verse", label: "I read a verse" },
  { value: "distract", label: "I try not to think about it" },
  { value: "tell_someone", label: "I tell someone" },
  { value: "nothing", label: "Nothing, mostly" },
];

export const SPOKEN: Option<Spoken>[] = [
  { value: "never", label: "Never" },
  { value: "once_twice", label: "Once or twice" },
  { value: "sometimes", label: "Sometimes" },
  { value: "most_days", label: "Most days" },
];

export const FIRST_HOURS: Option<FirstHour>[] = [
  { value: "phone", label: "My phone" },
  { value: "news", label: "The news" },
  { value: "silence", label: "Silence" },
  { value: "worship", label: "Worship" },
  { value: "the_word", label: "God's Word" },
];

export const LOUDEST: Option<Loudest>[] = [
  { value: "diagnosis", label: "The diagnosis, or the report" },
  { value: "numbers", label: "The numbers" },
  { value: "someone_said", label: "What someone said about me" },
  { value: "my_own", label: "My own" },
  { value: "gods", label: "God's" },
];

export const KNOWS_VERSE: Option<KnowsVerse>[] = [
  { value: "no", label: "No" },
  { value: "one", label: "One" },
  { value: "a_few", label: "A few" },
  { value: "several", label: "Yes, several" },
];

// ── Screens ─────────────────────────────────────────────────────────────────

export type StepId = "q1" | "q1b" | "q2" | "q3" | "q4" | "q5" | "q6" | "q7" | "q8" | "email";

export type ChoiceKey = "duration" | "response" | "spoken" | "first_hour" | "loudest" | "knows_verse";

export const CHOICE_STEPS: Record<Exclude<StepId, "q1" | "q1b" | "q2" | "email">, { key: ChoiceKey; question: string; options: Option<string>[] }> = {
  q3: { key: "duration", question: "How long has it been like this?", options: DURATIONS },
  q4: { key: "response", question: "When it hits, what do you do?", options: RESPONSES },
  q5: { key: "spoken", question: "Have you ever said God's Word out loud over this, by name?", options: SPOKEN },
  q6: { key: "first_hour", question: "What does the first hour of your day sound like?", options: FIRST_HOURS },
  q7: { key: "loudest", question: "Whose voice do you hear about this most?", options: LOUDEST },
  q8: { key: "knows_verse", question: "Do you know a verse that speaks to this exact thing?", options: KNOWS_VERSE },
};

export const Q1_QUESTION = "What is heaviest right now?";
export const Q2_QUESTION = "Say it in your own words.";
export const EMAIL_QUESTION = "Where should we send your plan?";

/** Nine screens for most people, ten for the heart and people branches. */
export function stepsFor(answers: Answers): StepId[] {
  const steps: StepId[] = ["q1"];
  if (needsSubstorm(answers.storm)) steps.push("q1b");
  steps.push("q2", "q3", "q4", "q5", "q6", "q7", "q8", "email");
  return steps;
}

/** Whether a step has what it needs to move past it. Q2 is always complete. */
export function isStepAnswered(step: StepId, a: Answers): boolean {
  switch (step) {
    case "q1": return !!a.storm;
    case "q1b": return !!resolveRoute(a.storm, a.substorm);
    case "q2": return true;
    case "email": return false;
    default: return !!a[CHOICE_STEPS[step].key];
  }
}

/** All eight questions answered (email is not required to see the result). */
export function isComplete(a: Answers): boolean {
  return stepsFor(a).every((s) => s === "email" || isStepAnswered(s, a));
}

// ── §5 Derived values ───────────────────────────────────────────────────────

/** §5a, verbatim. Note the final branch is unreachable as specified. */
export function methodFor(a: Answers): Method {
  if (a.spoken === "most_days") return "Speaker";
  if (a.spoken === "sometimes") return "Speaker";
  if (a.response === "pray_about") return "Asker";
  if (a.spoken === "never" || a.spoken === "once_twice") return "Asker";
  return "Reader";
}

export type GapId = "praying_about" | "never_spoken" | "dont_know" | "first_hour" | "never_ran_it" | "other_voice";

const GAP_RULES: { id: GapId; headline: string; test: (a: Answers) => boolean }[] = [
  {
    id: "praying_about",
    headline: "You have been praying about it, not to it.",
    test: (a) => a.response === "pray_about" || a.spoken === "never",
  },
  {
    id: "never_spoken",
    headline: "You know the verse. It has never been in your mouth.",
    test: (a) => (a.spoken === "never" || a.spoken === "once_twice") && a.knows_verse !== "no",
  },
  {
    id: "dont_know",
    headline: "You do not know what God says about this exact thing.",
    test: (a) => a.knows_verse === "no",
  },
  {
    id: "first_hour",
    headline: "Your first hour belongs to something else.",
    test: (a) => a.first_hour === "phone" || a.first_hour === "news",
  },
  {
    id: "never_ran_it",
    headline: "You have never run it longer than a few days.",
    test: (a) => (a.spoken === "once_twice" || a.spoken === "sometimes") && (a.duration === "year" || a.duration === "years"),
  },
  {
    id: "other_voice",
    headline: "The loudest voice about this is not God's.",
    test: (a) => a.loudest !== "gods",
  },
];

/** §5b: first three that trigger, in priority order. Never padded. */
export function gapsFor(a: Answers): { id: GapId; headline: string }[] {
  return GAP_RULES.filter((g) => g.test(a))
    .slice(0, 3)
    .map(({ id, headline }) => ({ id, headline }));
}

// The spec's template reads "for about {label, lowercased}", which renders
// "about about a year" and "about years". Same meaning, grammatical.
const DURATION_PHRASE: Record<Duration, string> = {
  weeks: "a few weeks",
  months: "a few months",
  year: "about a year",
  years: "years",
};

/** §5c. Null for `weeks`. Not rounded up for effect. */
export function waitingCostLine(a: Answers): string | null {
  const d = DURATIONS.find((x) => x.value === a.duration);
  if (!d || d.value === "weeks") return null;
  const mornings = (d.months * 30).toLocaleString("en-US");
  return `You have been carrying this for ${DURATION_PHRASE[d.value]}. That is roughly ${mornings} mornings your mind started on something other than what God said about it.`;
}

/** §5d. */
export function inputLedgerLine(a: Answers): string | null {
  if (a.loudest && a.loudest !== "gods") {
    return "This week, the thing you are carrying got hundreds of run-throughs. What God says about it got a handful.";
  }
  if (a.first_hour === "phone" || a.first_hour === "news") {
    return "Your first hour sets the script for the other fifteen. Right now something else is writing it.";
  }
  return null;
}

// ── §6 Result copy ──────────────────────────────────────────────────────────

// Beat 1. The spec leaves "{storm name}" undefined; these are ours to review.
export const STORM_NAMES: Record<Storm | Substorm, string> = {
  mind: "a mind that will not rest",
  body: "a body under attack",
  money: "not enough",
  self: "the lie about who you are",
  calling: "not knowing what you are here for",
  heart: "a heavy heart",
  people: "carrying someone you love",
  all: "everything at once",
  loss: "grief",
  flat: "a joy that has gone quiet",
  spouse: "a marriage under strain",
  child: "worry for your kids",
  prodigal: "someone you love walking away from God",
};

export function stormNameFor(route: Route): string {
  return STORM_NAMES[route.substorm ?? route.storm];
}

// Beat 2. Asker is the spec's line. Reader and Speaker variants are ours; the
// spec's reassurance ("Most people are.") contradicts a Speaker result.
export const METHOD_COPY: Record<Method, { line: string; reassurance: string }> = {
  Asker: {
    line: "And you have been praying about it. Not to it.",
    reassurance: "Most people are. It is exactly what we were taught, and it is half the instruction.",
  },
  Reader: {
    line: "And you have been reading about it. Not speaking to it.",
    reassurance: "Most people are. It is exactly what we were taught, and it is half the instruction.",
  },
  Speaker: {
    line: "And you have started speaking to it. That is the instruction.",
    reassurance: "Most people never get this far. Now it gets every morning, and it gets it by name.",
  },
};

// Beat 4. KJV, public domain, so no permissions notice is needed.
export const TURN_LINE = "Jesus never prayed about a storm.";
export const MARK_11 = {
  text: "For verily I say unto you, That whosoever shall say unto this mountain, Be thou removed, and be thou cast into the sea; and shall not doubt in his heart, but shall believe that those things which he saith shall come to pass; he shall have whatsoever he saith. Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.",
  cite: "Mark 11:23-24",
};

export const IDENTITY_LINES: Record<Pain, string> = {
  peace: "You have the mind of Christ.",
  health: "You are healed and whole.",
  abundance: "You are an heir, not a beggar.",
  identity: "You are who God says you are.",
  purpose: "You are called, and already equipped.",
  grief: "You are held, and you are not alone.",
  joy: "The joy of the Lord is your strength.",
  marriage: "You carry peace into your home.",
  family: "You are the one who stands for them.",
  more: "You carry the authority Jesus gave you.",
};

export const SAY_IT_UNDERLINE = "Not in your head. Out loud, where your ears can hear it.";

// ── §8 PDFs and first declarations ──────────────────────────────────────────
// Declarations are verbatim from declarationsv10.json. Do not edit them.

export const PDFS: Record<Storm, string> = {
  mind: "unshakable-mind.pdf",
  body: "unshakable-body.pdf",
  money: "unshakable-money.pdf",
  self: "unshakable-self.pdf",
  calling: "unshakable-calling.pdf",
  heart: "unshakable-heart.pdf",
  people: "unshakable-people.pdf",
  all: "unshakable-all.pdf",
};

export const DECLARATIONS: Record<Storm, { text: string; ref: string }> = {
  mind: { text: "You gave me Your own peace, and I carry it into every room.", ref: "John 14:27" },
  body: { text: "Thank You Jesus, by Your wounds I am healed and whole.", ref: "Isaiah 53:5" },
  money: { text: "You meet every need of mine from the riches of Your glory.", ref: "Philippians 4:19" },
  self: { text: "I am a new creation in You, and the old is gone for good.", ref: "2 Corinthians 5:17" },
  calling: { text: "Your plans for me are hope and a future, and I walk in them today.", ref: "Jeremiah 29:11" },
  heart: { text: "You hold me close and steady my spirit with Your own strength today.", ref: "Psalm 34:18" },
  people: { text: "You build my house Yourself, and what You raise stands firm.", ref: "Psalm 127:1" },
  all: { text: "You are my refuge and my strength, and You are here the second I call.", ref: "Psalm 46:1" },
};

// ── §9 Outbound link ────────────────────────────────────────────────────────
//
// The spec's owned-channel form (speaklife.app/onboard?ob=) does not work:
// speaklife.app is not an associated domain of the app (only
// speaklife.app.link is), and a plain link cannot carry `ob` through a fresh
// App Store install. Only a Branch link with custom data `ob=<code>` can.
//
// Paste one Branch Quick Link per code. While a code is null the result page
// shows no App Store CTA for it: decided 2026-09-17, do not ship an
// unrouted link in its place.

export const BRANCH_LINKS: Record<ObCode, string | null> = {
  anxiety: null,
  healing: null,
  provision: null,
  renewal: null,
  outcomes: null,
  hardtimes: null,
  grief: null,
  depression: null,
  marriage: null,
  parenting: null,
  prodigal: null,
};

/** The outbound link for a route, UTMs added, or null until its Branch link exists. */
export function outboundUrl(route: Route): string | null {
  const base = BRANCH_LINKS[route.ob];
  if (!base) return null;
  const url = new URL(base);
  url.searchParams.set("utm_source", "audit");
  url.searchParams.set("utm_medium", "owned");
  url.searchParams.set("utm_campaign", "storm_audit");
  url.searchParams.set("utm_content", route.storm);
  return url.toString();
}

// Flip to true once design drops the eight files into public/audit/.
export const PDFS_PUBLISHED = false;
