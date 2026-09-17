// Storm Audit acceptance checks (spec §13). Run: node --test scripts/
// Node 24 strips the types from model.ts on import.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import * as m from "../lib/audit/model.ts";

const OB_CODES = ["anxiety", "healing", "provision", "renewal", "outcomes", "hardtimes", "grief", "depression", "marriage", "parenting", "prodigal"];

// §3 + §6 + §8, all eleven routing outcomes.
const EXPECTED = [
  ["mind", undefined, "anxiety", "peace", "unshakable-mind.pdf", "You have the mind of Christ."],
  ["body", undefined, "healing", "health", "unshakable-body.pdf", "You are healed and whole."],
  ["money", undefined, "provision", "abundance", "unshakable-money.pdf", "You are an heir, not a beggar."],
  ["self", undefined, "renewal", "identity", "unshakable-self.pdf", "You are who God says you are."],
  ["calling", undefined, "outcomes", "purpose", "unshakable-calling.pdf", "You are called, and already equipped."],
  ["heart", "loss", "grief", "grief", "unshakable-heart.pdf", "You are held, and you are not alone."],
  ["heart", "flat", "depression", "joy", "unshakable-heart.pdf", "The joy of the Lord is your strength."],
  ["people", "spouse", "marriage", "marriage", "unshakable-people.pdf", "You carry peace into your home."],
  ["people", "child", "parenting", "family", "unshakable-people.pdf", "You are the one who stands for them."],
  ["people", "prodigal", "prodigal", "family", "unshakable-people.pdf", "You are the one who stands for them."],
  ["all", undefined, "hardtimes", "more", "unshakable-all.pdf", "You carry the authority Jesus gave you."],
];

test("all eleven routing outcomes", () => {
  for (const [storm, sub, ob, pain, pdf, identity] of EXPECTED) {
    const r = m.resolveRoute(storm, sub);
    assert.ok(r, `${storm}/${sub} resolves`);
    assert.equal(r.ob, ob, `${storm}/${sub} ob`);
    assert.equal(r.pain, pain, `${storm}/${sub} pain`);
    assert.equal(r.pdf, pdf, `${storm}/${sub} pdf`);
    assert.equal(m.IDENTITY_LINES[r.pain], identity, `${storm}/${sub} identity`);
    assert.ok(OB_CODES.includes(r.ob), "ob in closed set");
    assert.ok(m.DECLARATIONS[r.storm], "has a declaration");
    assert.ok(m.STORM_NAMES[r.substorm ?? r.storm], "has a storm name");
  }
  assert.equal(new Set(EXPECTED.map((e) => e[2])).size, 11);
  assert.deepEqual(Object.keys(m.BRANCH_LINKS).sort(), [...OB_CODES].sort());
});

test("branching storms need Q1b, and a wrong-branch substorm does not resolve", () => {
  assert.equal(m.resolveRoute("heart", undefined), null);
  assert.equal(m.resolveRoute("people", "loss"), null);
  assert.equal(m.stepsFor({ storm: "mind" }).length, 9);
  assert.equal(m.stepsFor({ storm: "heart" }).length, 10);
  assert.equal(m.stepsFor({ storm: "people" }).length, 10);
});

const values = (opts) => opts.map((o) => o.value);
function* allAnswers() {
  for (const duration of values(m.DURATIONS))
    for (const response of values(m.RESPONSES))
      for (const spoken of values(m.SPOKEN))
        for (const first_hour of values(m.FIRST_HOURS))
          for (const loudest of values(m.LOUDEST))
            for (const knows_verse of values(m.KNOWS_VERSE))
              yield { storm: "mind", duration, response, spoken, first_hour, loudest, knows_verse };
}

const ORDER = ["praying_about", "never_spoken", "dont_know", "first_hour", "never_ran_it", "other_voice"];

test("gaps: at most three, spec priority order, never padded", () => {
  let n = 0;
  for (const a of allAnswers()) {
    n++;
    const g = m.gapsFor(a).map((x) => x.id);
    assert.ok(g.length <= 3);
    const idx = g.map((id) => ORDER.indexOf(id));
    assert.deepEqual(idx, [...idx].sort((x, y) => x - y), "priority order");
    assert.ok(m.isComplete(a));
  }
  assert.equal(n, 4 * 5 * 4 * 5 * 5 * 4);
  // Nothing triggers → nothing shown.
  assert.deepEqual(
    m.gapsFor({ response: "read_verse", spoken: "most_days", knows_verse: "one", first_hour: "worship", duration: "weeks", loudest: "gods" }),
    [],
  );
});

test("method label follows §5a", () => {
  assert.equal(m.methodFor({ spoken: "most_days", response: "pray_about" }), "Speaker");
  assert.equal(m.methodFor({ spoken: "sometimes" }), "Speaker");
  assert.equal(m.methodFor({ spoken: "once_twice", response: "read_verse" }), "Asker");
  assert.equal(m.methodFor({ spoken: "never", response: "nothing" }), "Asker");
});

test("waiting cost line", () => {
  assert.equal(m.waitingCostLine({ duration: "weeks" }), null);
  assert.match(m.waitingCostLine({ duration: "years" }), /for years\. That is roughly 1,080 mornings/);
  assert.match(m.waitingCostLine({ duration: "year" }), /for about a year\. That is roughly 360 mornings/);
  assert.match(m.waitingCostLine({ duration: "months" }), /roughly 120 mornings/);
});

test("no CTA link ships before its Branch link exists", () => {
  for (const [storm, sub] of EXPECTED) {
    const r = m.resolveRoute(storm, sub);
    if (m.BRANCH_LINKS[r.ob] === null) assert.equal(m.outboundUrl(r), null);
  }
});

test("no score out of ten, no em or en dashes in audit copy", () => {
  for (const f of ["lib/audit/model.ts", "components/audit/AuditFlow.tsx", "components/audit/AuditResult.tsx", "app/audit/layout.tsx"]) {
    const src = readFileSync(new URL(`../${f}`, import.meta.url), "utf8");
    assert.ok(!/[–—]/.test(src), `${f} has a dash`);
    assert.ok(!/out of (10|ten)|score/i.test(src), `${f} has a score`);
  }
});

test("own_words is never sent to PostHog", () => {
  const src = readFileSync(new URL("../lib/audit/client.ts", import.meta.url), "utf8");
  const posthog = src.slice(src.indexOf("// ── PostHog"), src.indexOf("// ── Klaviyo"));
  assert.ok(!/(?<!has_)own_words/.test(posthog.replace(/\/\/.*$/gm, "")));
  const flow = readFileSync(new URL("../components/audit/AuditFlow.tsx", import.meta.url), "utf8");
  for (const call of flow.match(/track\(\{[^;]*\}\);/gs) ?? []) assert.ok(!/value: own_words\s*[,}]|own_words:/.test(call), call);
});
