# Teaching Methodology — Operational Guide

**Version:** 4.0  
**Date:** February 2026  
**Status:** Authoritative — supersedes teaching-methodology.md v3.0, teaching-architecture.md decision tree and multi-pass sections  
**Purpose:** The definitive guide for how a lesson is conducted. A fresh AI or static system reads this and knows exactly what to do.

---

## What This Document Is

This is the **operational** teaching guide. It answers: "I have the content. Now how do I teach it?"

It covers every decision the system makes during a lesson — when to teach, when to verify, how to handle right/wrong/partial answers, when to scaffold down, when to cut off, and how to score everything.

**Read alongside:**
- `content-creation-methodology.md` — how to create the content this guide uses
- `teaching-methodology.md` v3.0 — the pedagogical philosophy this guide implements

**Supersedes:**
- `teaching-methodology.md` v3.0 — this doc inherits and expands all operational detail; the v3.0 doc remains valid as philosophical reference but this doc governs lesson execution
- `teaching-architecture.md` — decision tree, multi-pass, and AI-vs-static sections are fully replaced here

---

## The One Principle

**TEACH → VERIFY. Always. No exceptions.**

Never stack teaching without checking it landed. Every piece of content the student sees must be followed by a check that they absorbed it. If they didn't, you address the gap before moving on.

This is the heartbeat of every lesson: teach something, check it stuck, teach the next thing, check it stuck.

---

## Architecture: How a Lesson Is Structured

A lesson has three levels of structure, nested inside each other:

```
LESSON (mesocycle)
 ├── Node 1 (micro-cycle)
 │    ├── Granule Group A
 │    │    ├── TEACH
 │    │    └── MICRO-VERIFY
 │    ├── Granule Group B
 │    │    ├── TEACH
 │    │    └── MICRO-VERIFY
 │    ├── MACRO-VERIFY (node level)
 │    └── NODE SUMMARY
 │
 ├── Bridge (Node 1 → Node 2)
 │
 ├── Node 2 (micro-cycle)
 │    ├── ...same pattern...
 │    ├── MACRO-VERIFY
 │    └── NODE SUMMARY
 │
 ├── Bridge (Node 2 → Node 3)
 │
 ├── Node 3 (micro-cycle)
 │    └── ...
 │
 └── LESSON SUMMARY
```

The lesson works through nodes sequentially. Each node runs the same micro-cycle. Between nodes, a bridge connects what was learned to what comes next.

---

## The Node Micro-Cycle

This is the core loop. Every node follows this exact pattern:

```
NODE START
│
├── 1. ORIENTATION
│   │   Open question: "What do you know about X?"
│   │
│   ├── "I don't know anything" / blank / confused
│   │       → BEGINNER FLAG = true
│   │       → Skip all quick checks
│   │       → Teach every granule group from scratch
│   │
│   ├── Vague / partial awareness
│   │       → BEGINNER FLAG = false
│   │       → Quick-check granule groups
│   │       → Teach on failure, skip on pass
│   │
│   └── Solid knowledge shown
│           → BEGINNER FLAG = false
│           → Quick-check harder granule groups
│           → Skip basics, teach only gaps
│
├── 2. TEACH + MICRO-VERIFY (per granule group)
│   │
│   │   For each granule group:
│   │
│   │   ┌─── TEACH ──────────────────────────────────────┐
│   │   │  • Components FIRST (image, comparison,        │
│   │   │    callout, table, etc.)                       │
│   │   │  • Text SECOND (explains the components)       │
│   │   │  • Hooks where possible (mnemonics,            │
│   │   │    analogies, "clue is in the name")           │
│   │   │  • Concise — 2-4 sentences per group           │
│   │   └────────────────────────────────────────────────┘
│   │           ↓
│   │   ┌─── MICRO-VERIFY ────────────────────────────────┐
│   │   │  Start at appropriate level:                    │
│   │   │                                                 │
│   │   │  VERIFICATION LADDER (hardest → easiest):       │
│   │   │    Open recall                                  │
│   │   │    Fill-blank                                   │
│   │   │    MCQ                                          │
│   │   │    True-false / binary choice                   │
│   │   │                                                 │
│   │   │  Good hook? → Try open recall first             │
│   │   │  No hook / pure facts? → Fill-blank or MCQ      │
│   │   └─────────────────────────────────────────────────┘
│   │           ↓
│   │   ┌─── RESPONSE HANDLING ────────────────────────────┐
│   │   │                                                  │
│   │   │  ✓ PASS                                          │
│   │   │    → Confirm, reinforce briefly                  │
│   │   │    → Next granule group                          │
│   │   │                                                  │
│   │   │  ~ PARTIAL                                       │
│   │   │    → Acknowledge what's correct                  │
│   │   │    → Clarify what's missing/wrong                │
│   │   │    → Re-verify ONLY the gap                      │
│   │   │    → Don't repeat what they nailed               │
│   │   │                                                  │
│   │   │  ✗ FAIL                                          │
│   │   │    → Don't say "wrong"                           │
│   │   │    → Re-teach (different format/component)       │
│   │   │    → Scaffold DOWN the verify ladder             │
│   │   │    → Re-verify at easier level                   │
│   │   │        ├── Pass → next granule group             │
│   │   │        └── Fail again → CUT-OFF                  │
│   │   │             • No shame                           │
│   │   │             • Give answer cleanly                │
│   │   │             • "They'll stick with practice"      │
│   │   │             • Record as needs-review             │
│   │   │             • Move on immediately                │
│   │   └──────────────────────────────────────────────────┘
│   │
│   └── Repeat for each granule group in node
│
├── 3. MACRO-VERIFY (multi-stage)
│   │
│   │   Stage 1: Component-based
│   │     → match-pairs, order-sequence, etc.
│   │     → Connects facts ACROSS granules
│   │     → Not a repeat of micros
│   │     → Structured, achievable
│   │
│   │   Stage 2: Written response
│   │     → explain-own-words (short, targeted)
│   │     → One focused prompt, 1-2 sentences expected
│   │     → Forces deeper processing
│   │     → THE CONFIDENCE LOOP MOMENT:
│   │       Student sees they can now explain
│   │       something they couldn't 10 mins ago
│   │
│   │   Total macro time: ~2 minutes
│   │
├── 4. NODE SUMMARY
│   │     → Show ✓ and ⚠ per granule
│   │     → Honest, not punishing
│   │     → "X/Y first time"
│   │     → ⚠ items flagged for revision modes
│   │
└── NODE COMPLETE → Bridge → Next node (repeat micro-cycle)
```

---

## Stage 1: Orientation

The orientation question is the most important moment in each node. It determines the entire path through the node.

### The Question

Always open-ended. Always about the node topic. Never yes/no.

Good: "What do you already know about microscopes? Have you come across different types?"
Good: "Tell me what you know about resolution in microscopy."
Bad: "Do you know about microscopes?" (yes/no — tells you nothing)
Bad: "What is the magnification formula?" (too specific — tests one granule, not orientation)

### Reading the Response

The student's answer falls into one of three categories:

**Category 1 — Blank / "I don't know"**
- Set `beginnerFlag = true`
- Skip ALL quick checks for this node
- Teach every granule group from scratch
- Rationale: if they don't know Concept 1, they almost certainly don't know Concept 2. Don't test them on things they haven't been taught.

**Category 2 — Vague awareness**
- Set `beginnerFlag = false`
- Student has fragments but not solid knowledge
- Quick-check each granule group before teaching
- Teach only what they fail, skip what they pass
- Example response: "Erm I think there's light ones and electron ones?"

**Category 3 — Solid knowledge**
- Set `beginnerFlag = false`
- Student demonstrates specific facts from multiple granules
- Quick-check primarily the harder/later granule groups
- Skip basics entirely, teach only genuine gaps
- Example response: "Light microscopes from the 1600s use light beams, electron from the 1930s use electron beams, TEM gives 2D cross-sections and SEM gives 3D surface images."

### Quick Checks

A quick check is a fast verification question thrown at a granule group BEFORE teaching it. It determines whether the student already knows this material.

- Quick check passes → skip teaching that granule group, mark as verified via quick-check
- Quick check fails → teach the granule group normally

Quick checks should be at MCQ or fill-blank level — achievable if they know the material, but not guessable. Don't use binary choice (too easy to guess) or open recall (too hard for a quick check).

### The Beginner Flag

The flag persists for the entire node once set. It resets at the start of each new node.

While the flag is set:
- No quick checks — go straight to teaching
- Every granule group gets the full TEACH → VERIFY cycle
- The flag clears when the student passes a quick check confidently (meaning they've demonstrated they do know some things, so subsequent quick checks are worth trying)

In **V1 static implementation**, there is no orientation step. The system teaches every granule to every student. This is the safe default — it never tests untaught material. The orientation/beginner-flag system is for V2 (AI version) where the AI can interpret open-ended responses.

---

## Stage 2: Teaching + Micro-Verification

This is the bulk of the lesson. For each granule group in the node:

### Teaching

The teaching content comes from the data structure — `teach.content` and `teach.components` for each granule group. The system presents this content following the principle: **components first, text second**.

The component IS the teaching tool. The text explains the component. Don't show text first and then a component as illustration — show the component and let the text accompany it.

**Teaching text rules:**
- 2-4 sentences per granule group (concise, not padded)
- Explain the component being shown
- Include the hook if one exists
- Conversational tone — warm tutor, not textbook
- Don't lecture — guide

### Micro-Verification

After teaching each granule group, immediately verify. The verification question comes from the `verify` array in the data.

**Choosing the verification level:**

The verification ladder ranks question types from hardest to easiest:

```
Open recall        ← hardest (no cues, pure memory)
Fill-blank         ← moderate (sentence context provides cues)
MCQ                ← easier (correct answer is visible)
True-false         ← easiest (50% chance of guessing)
Binary choice      ← easiest (50% chance)
```

Start at the appropriate level based on:

1. **Hook quality**: If the teaching included a strong memory hook (mnemonic, "clue is in the name", vivid analogy), try open recall first. The hook should make it retrievable.

2. **Granule type**: Pure recall facts (dates, names, figures) are harder to recall from nothing. Fill-blank or MCQ is often more appropriate than open recall for these.

3. **Student history**: If the student has been struggling (multiple fails this node), start lower on the ladder. Don't set them up for repeated failure.

**V1 static only has:** fill-blank, MCQ, true-false. These are all client-checkable with no AI needed.

### Verification Component Selection

When a granule has multiple verify options (which it should — see content-creation-methodology.md):

1. Get all verify options for this granule
2. Filter out the type matching `lastComponentType` (variety — don't show the same type twice in a row)
3. If all options are the same type, skip the filter
4. From remaining, select based on `weight` field (default 1 = equal chance)
5. Update `lastComponentType`

**Fatigue management**: If the last 2 verifications used the same component type, force a different type for the next one (if alternatives exist). This prevents monotony — three fill-blanks in a row feels like a worksheet, not a tutoring session.

---

## Response Handling

How you handle the student's answer is where good teaching lives or dies. Three possible outcomes:

### ✓ PASS — Correct Answer

- Confirm: brief positive acknowledgement ("That's right", "Spot on", "Exactly")
- Reinforce: optionally add one sentence connecting to the broader picture
- Move on: don't linger. They got it. Next granule group.

Record: `passed: true, firstAttempt: true, attempts: 1, scaffoldedDown: false, cutOff: false`

### ~ PARTIAL — Partially Correct

This is the most common outcome and the most important to handle well.

**Protocol:**
1. **Acknowledge what's correct** — "Light microscopes in the mid-1600s — spot on."
2. **Identify what's wrong or missing** — "But careful — you said light for both. The 1930s one is the electron microscope."
3. **Re-verify ONLY the gap** — don't re-test the parts they nailed. Target the specific error.
4. **Don't repeat what they got right** — respect their knowledge. Only fill the hole.

**Example:**
```
Verify: "Light microscopes were developed in the mid-___, and electron microscopes in the ___."
Student: "Light was mid-1600s and light was 1930s."
Tutor: "Mid-1600s for light — spot on. But careful — you said light for both. 
        The 1930s one is the electron microscope. The big one on the right in those photos."
Re-verify: "Light microscopes were the mid-1600s. And the ones invented in the 1930s 
            were ___ microscopes?"
Student: "Sorry yeah that was electron microscopes."
Result: ✓ Both verified. 1.1 clean, 1.2 needed help.
```

Record for 1.1: `passed: true, firstAttempt: true, attempts: 1`
Record for 1.2: `passed: true, firstAttempt: false, attempts: 2, scaffoldedDown: false`

### ✗ FAIL — Wrong Answer

**Protocol:**
1. **Don't say "wrong"** — ever. Frame it as a gap to fill, not an error to punish.
2. **Re-teach using a different format or component** — if you used an image first time, try a callout. If you used text, try a comparison table. The same explanation twice won't suddenly work.
3. **Scaffold DOWN the verification ladder** — if they failed open recall, drop to fill-blank. If they failed fill-blank, drop to MCQ.
4. **Re-verify at the easier level**

If they pass the scaffolded-down verification: mark it and move on. It's a weaker pass (scored lower) but still a pass.

If they fail AGAIN after scaffolding down:

**CUT-OFF. Two attempts maximum.**

Cut-off protocol:
- No shame, no frustration language
- Give the answer cleanly and directly: "The answer is X. It'll stick with practice."
- Record as needs-review
- Move on immediately — do NOT loop them back for a third attempt
- Trust that revision modes (flashcards, MCQs, spaced repetition) will catch this gap later

The cut-off is essential. Without it, students get trapped in loops, frustration builds, and they stop using the app. Learning doesn't have to be perfect first time. That's what revision is for.

Record: `passed: false, firstAttempt: false, attempts: 2, scaffoldedDown: true, cutOff: true`

---

## Stage 3: Macro-Verification

After all granule groups in a node have been taught and micro-verified, the node gets a macro-verification. This tests connections ACROSS granules — it's not a repeat of the micro-verifications.

### Stage 1: Component-Based

Use structured components that require connecting multiple granules:

- **match-pairs**: "Match each microscope type to its image-forming mechanism" (connects granules about different microscope types)
- **order-sequence**: "Put these microscopy developments in chronological order" (connects timeline granules)

These are achievable and structured. The student isn't generating from nothing — they're recognising and connecting.

### Stage 2: Written Response

One focused prompt. Expected response: 1-2 sentences.

Example: "In your own words, explain the main differences between light and electron microscopes."

This is the **confidence loop moment**. A student who said "I don't know anything" ten minutes ago is now writing a coherent explanation. That visible transformation IS the product. The moment they see they can explain something they couldn't before — that's what brings them back.

**For V1 static**: Stage 1 is implementable (match-pairs and order-sequence are client-checkable). Stage 2 requires AI for evaluation, so it's V2.

### Macro-Verify Handling

Same response-handling rules apply:
- Pass → node summary
- Partial → acknowledge correct parts, re-test gaps
- Fail → re-teach the weakest connection, re-verify at easier level
- Cut-off after 2 attempts on macro too

### Adaptive Macro-Verify

- **Beginner students** who struggled through the node: do both stages. They need the structured reconnection AND the written synthesis.
- **Knowledgeable students** who quick-checked through: skip Stage 1 (they've already demonstrated connections), go straight to Stage 2 written response.

Total macro time target: ~2 minutes. This is a capstone, not an exam.

---

## Stage 4: Node Summary

After macro-verify, show the student their results for this node.

**Format:**
```
Node 1: Understand how microscopy techniques developed over time

✓ Light microscopes — 1600s              first time
✓ Electron microscopes — 1930s           needed help
✓ Light uses light beams                 first time
✓ Electron uses electron beams           first time
✓ TEM vs SEM                             first time

Result: 4/5 first time · 1 to revisit
```

**Rules:**
- Honest — show both ✓ and ⚠
- Not punishing — "needed help" not "failed"
- Quantified — "X/Y first time" gives a concrete sense of progress
- ⚠ items are flagged for revision modes (flashcards, MCQs, spaced repetition)
- Brief — don't linger on the summary. Show it, let them absorb it, move on.

---

## Bridges Between Nodes

Between nodes, a bridge connects backward and forward:

```
NODE 1 SUMMARY → BRIDGE → NODE 2 ORIENTATION → Node 2 micro-cycle
```

**Bridge rules:**
- 1-2 sentences maximum
- Connect backward: reference what they just learned
- Connect forward: explain why the next topic matters or follows naturally
- Natural curiosity framing — make them want to know what's next

**Example:**
"You now know the two main microscope types and when they were developed. But why would scientists bother inventing a completely new type of microscope? What could electron microscopes do that light ones couldn't? That's what we'll look at next — the capabilities that set them apart."

**The beginner flag resets at each new node.** A student who was a beginner on Node 1 (microscope types) might not be a beginner on Node 2 (magnification/resolution) if they studied it before. Each node gets a fresh orientation.

---

## The Mesocycle — Full Lesson Flow

```
LESSON START
│
├── Node 1 → micro-cycle → macro-verify → summary
├── Bridge (Node 1 → Node 2)
├── Node 2 → micro-cycle → macro-verify → summary
├── Bridge (Node 2 → Node 3)
├── Node 3 → micro-cycle → macro-verify → summary
│   ...
├── LESSON MACRO-VERIFY (optional — across all nodes)
└── LESSON SUMMARY
    → Overall score
    → Strengths (nodes/granules nailed first time)
    → Weaknesses (needs-review items)
    → Confidence Loop: "You started knowing nothing.
      Look what you can do now."
    → "Practice weak areas now?" button → filtered revision deck
```

### Lesson Macro-Verify (Optional)

For longer lessons (4+ nodes), an optional lesson-level macro-verify tests connections across nodes. This is rare — most lessons have 3 nodes, and the node-level macro-verifies are sufficient.

### Lesson Summary

The final summary is the lesson's closing moment. It must:

1. **Show honest results** — granule-by-granule, which were first-time passes, which needed help, which were cut off
2. **Celebrate strengths** — lead with what went well
3. **Flag weaknesses constructively** — "These topics will benefit from some revision practice"
4. **Fire the confidence loop** — especially for beginners, highlight the transformation from "I don't know anything" to demonstrable knowledge
5. **Offer the pipeline** — "Practice weak areas now?" button generates a custom revision deck (flashcards + MCQs filtered to weak granule IDs)

---

## The Confidence Loop

This is the app's core value proposition. Not just pedagogy — it's the reason users come back.

```
Learn → Prove to yourself you've learned → See the proof → Feel good → Want more
```

The macro-verify written response is where the confidence loop fires most powerfully. A student who said "I don't know anything" ten minutes ago is now writing coherent answers about the topic. That visible transformation IS the product.

The confidence loop must be protected:
- Don't let students leave a node feeling bad (node summary celebrates before flagging gaps)
- Don't trap students in failure loops (cut-off exists for this reason)
- Don't make the macro-verify punishing (1-2 sentences, focused, achievable)
- Don't skip the lesson summary (it's where the full transformation becomes visible)

---

## The Scoring Algorithm

Every granule interaction generates raw events. These feed a scoring algorithm that drives spaced repetition, custom practice decks, heat maps, and readiness indicators.

### Layer 1: Raw Events

Every granule verification records:

| Event | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Did they verify the granule? |
| `firstAttempt` | boolean | First try? |
| `attempts` | number | Total verify attempts |
| `scaffoldedDown` | boolean | Stepped down the ladder? |
| `cutOff` | boolean | Hit 2-attempt limit? |
| `source` | string | `"taught"` or `"quick-checked"` |
| `timestamp` | datetime | When the interaction happened |

### Layer 2: Granule Mastery Score

```
BASE SCORE: 100

Deductions:
  Source is "taught" (not quick-checked):     -10
  Not first attempt:                          -15
  2 attempts:                                 -10
  3 attempts:                                 -20
  4+ attempts:                                -30
  Scaffolded down:                            -15
  Cut-off:                                    FLOOR AT 25

FLOOR: 0  |  CEILING: 100
```

**Worked examples:**

Beginner student, Node 1:
| Granule | Events | Score |
|---------|--------|-------|
| 1.1 Light — 1600s | taught, not first attempt, 2 attempts, scaffolded | 100-10-15-10-15 = **50** |
| 1.2 Electron — 1930s | taught, not first attempt, 3 attempts, scaffolded | 100-10-15-20-15 = **40** |
| 1.3 Light uses light | taught, first attempt | 100-10 = **90** |
| 1.4 Electron uses electrons | taught, first attempt | 100-10 = **90** |
| 1.5 TEM vs SEM | taught, first attempt | 100-10 = **90** |

Knowledgeable student, same node:
| Granule | Events | Score |
|---------|--------|-------|
| All 5 | quick-checked, first attempt | 100 each = **100** |

### Layer 2b: Aggregation

```
Node mastery   = avg(granule scores) - (10 × count of granules below 50)
Lesson mastery = avg(node scores) - (10 × count of nodes below 50)
Subject mastery = avg(lesson scores)
```

The penalty for low-scoring granules/nodes prevents a few strong scores from masking genuine weaknesses.

### Layer 3: Scoring → Actions

**Spaced repetition intervals:**

| Score | Next Review |
|-------|-------------|
| 90-100 | 7 days |
| 70-89 | 3 days |
| 50-69 | 1 day |
| 25-49 | Same session |
| 0-24 | Priority (start of next session) |

**Custom practice deck generation:**

| Score | Deck Contents |
|-------|---------------|
| Below 50 | Flashcards + MCQs for this granule |
| 50-69 | Flashcards only |
| 70-89 | MCQs only (consolidation) |
| 90+ | Not included (mastered) |

**Review prioritisation order:**
1. Overdue items (past their spaced repetition date)
2. Lowest mastery score
3. Most recently failed
4. Random (for variety)

**Heat map colours:**

| Score | Colour | Meaning |
|-------|--------|---------|
| 90+ | Dark green | Mastered |
| 70-89 | Light green | Solid |
| 50-69 | Amber | Shaky |
| 25-49 | Orange | Weak |
| 0-24 | Red | Priority |

**Readiness thresholds:**

| Condition | Status |
|-----------|--------|
| All granules ≥90 | Exam ready |
| All granules ≥70 | Good shape |
| Any granule <50 | Has gaps |
| Any granule <25 | Priority attention needed |

**Next session behaviour:**

| Score | Action |
|-------|--------|
| ≥90 | Skip (don't revisit) |
| 50-89 | Quick-check only (verify retention) |
| <50 | Re-teach (full teach cycle) |

### Full Scoring Pipeline

```
RAW EVENTS → ALGORITHM → SCORES → THRESHOLDS → ACTIONS
(what happened) (calculate) (0-100) (ranges) (spaced rep, decks, heat maps, readiness)
```

---

## Weakness Reporting

The scoring system enables granule-level weakness reporting at three levels of detail:

**Level 1 — WHAT:** Granule label from the data structure.
Example: "Electron microscopes — 1930s"

**Level 2 — HOW BAD:** Score + threshold category.
Example: "Score 40 — Weak (orange)"

**Level 3 — WHY:** Raw event interpretation revealing the confusion pattern.
Example: "Taught (not quick-checked) → failed open recall → scaffolded to fill-blank → passed on second attempt. Confusion: mixed up 'light' and 'electron' labels. Likely encoding issue — the names didn't stick during initial teaching."

Level 3 requires a `weaknessLog` array per granule interaction that records the sequence of events, the specific errors made, and the scaffolding path taken.

---

## AI vs Static Implementation

Both versions use the **exact same data structure** and the **exact same node/granule skeleton**. The difference is in execution:

### Static Version (V1 — Free, No API)

- All teaching content is pre-written in the data (`teach.content`, `teach.components`)
- All verification is client-side (fill-blank, MCQ, true-false — string matching and index comparison)
- Decision tree drives adaptivity — teach → verify → handle response → next
- No orientation step (no way to interpret open-ended responses without AI)
- Every student gets the full teach cycle (safe default — never tests untaught material)
- Deterministic: same student performance = same path
- Content variety comes from multiple verify options per granule
- Zero cost to run

### AI Version (V2 — Uses API)

- Same granule structure as backbone — the AI cannot drift from the content skeleton
- AI reads `teach.content` as context/reference and generates teaching conversationally
- AI handles orientation (interprets open-ended responses, sets beginner flag)
- AI can do explain-own-words verification (natural language understanding)
- AI can re-teach in different words when the student doesn't understand (not limited to pre-written alternatives)
- AI handles partial answers naturally (identifies what's right, what's wrong, what's missing)
- Decision tree still governs high-level flow — AI fills the conversation between decision points

### What They Share

- Same node/granule data structure
- Same verification ladder
- Same scoring algorithm
- Same cut-off principle (2 attempts max)
- Same macro-verification structure
- Same confidence loop
- Same pipeline to revision modes

---

## Tone and Language Guide

### General Principles

- **Warm tutor, not textbook** — "Let's look at..." not "The following section covers..."
- **Conversational, not formal** — contractions are fine, casual phrasing is fine
- **Encouraging, not patronising** — "Nice work" not "Good job! You're doing SO well!"
- **Brief positive acknowledgement** — "That's right" or "Spot on" — don't gush
- **Never say "wrong"** — frame errors as gaps to fill: "Not quite — let me help with that"
- **Never shame** — especially at cut-off: "That's a tricky one. The answer is X. It'll click with some practice."

### Adapting to Student Level

- **Beginner (flag set)**: More scaffolding, more explicit connections, simpler vocabulary. "Let me walk you through this."
- **Intermediate**: Normal tutoring mode. Teach, verify, move on. "What does a light microscope use to form an image?"
- **Knowledgeable**: Efficient, respectful of their time. Quick-check and move on. "You clearly know this — let me just check a couple of things."

### Things to Avoid

- Excessive praise ("Wow, amazing! Incredible work!") — feels insincere
- Lengthy transitions ("Now that we've covered X, let's move on to discuss Y, which is...") — just move on
- Repetitive recaps ("As we discussed earlier...") — they remember, they were just there
- Rhetorical questions without pausing for response ("Don't you think that's interesting?") — either ask a real question or don't ask
- Filler phrases ("It's important to note that...") — just say the thing

---

## Teach → Review Pipeline

The lesson summary's "Practice weak areas now?" button triggers a pipeline:

1. Lesson summary identifies ⚠ granule IDs (scored below threshold)
2. System queries flashcards and MCQs filtered to those granule IDs
3. Generates a custom revision deck containing only weak material
4. Student practices → metrics update → spaced repetition informed
5. Next session: weak granules get quick-checks or re-teaching based on updated scores

This pipeline also works at the subject level:
- Dashboard shows all granules across all lessons with their mastery scores
- Student can generate a subject-wide custom practice deck of all weak granules
- The deck updates dynamically as mastery improves (granules drop out when they hit ≥90)

---

## Mock Lesson 1 — Beginner Student (Node 1: Microscopy Types)

### Orientation

**Tutor:** "What do you already know about microscopes? Have you come across different types?"

**Student:** "I don't know anything."

**Decision:** Beginner flag SET. Teach every granule group, no quick checks.

### Granule Group G1: 1.1 + 1.2 (Timeline — When Light, When Electron)

**Components:** `image` ×2 side-by-side (light microscope photo, electron microscope photo)

**Tutor:** "These are the two main types of microscope. On the left, a light microscope — you might have used one at school. On the right, an electron microscope — a completely different beast. Notice the size difference. Light microscopes have been around since the mid-1600s — the 17th century. Electron microscopes came much later, in the 1930s. That's roughly a 300-year gap."

**Micro-verify (open recall):** "So roughly — when were light microscopes developed, and when did electron microscopes come along?"

**Student:** "Erm I don't know when they were developed."

**Handling:** FAIL. Don't say wrong. Re-teach with `callout` component (key dates isolated visually). Scaffold DOWN to fill-blank.

**Component:** `callout` — Key dates: Light → mid-1600s, Electron → 1930s, ~300 year gap

**Re-verify (fill-blank):** "Light microscopes were developed in the mid-___, and electron microscopes were invented in the ___."

**Student:** "Light microscopes were the mid 1600s and light was 1930s."

**Handling:** PARTIAL. Granule 1.1 correct ✓. Granule 1.2 wrong — said "light" instead of "electron". Acknowledge correct part, gently correct mix-up, re-verify ONLY the error.

**Tutor:** "Mid-1600s for light — spot on. But careful — you said light for both. The 1930s one is the electron microscope. The big one on the right in those photos."

**Re-verify (fill-blank, targeted):** "Light microscopes were the mid-1600s. And the ones invented in the 1930s were ___ microscopes?"

**Student:** "Sorry yeah that was electron microscopes."

**Result:** ✓ Both verified. 1.1 clean (first attempt), 1.2 needed help (flagged for review).

### Granule Group G2: 1.3 + 1.4 (Mechanism — What They Use)

**Component:** `callout` — Light → beam of light, Electron → beam of electrons. "The clue is in the name!"

**Tutor:** "This is the fundamental difference between them. A light microscope uses a beam of light to form an image. An electron microscope uses a beam of electrons. And here's the easy part — the clue is literally in the name. Light microscope → light. Electron microscope → electrons."

**Micro-verify (open recall — strong hook, try it):** "What does a light microscope use to form an image, and what does an electron microscope use?"

**Student:** "Light beam and electron beam respectively."

**Result:** ✓ Both first attempt. Hook worked — name IS the answer.

**Scores:** 1.3 = 90 (taught, first attempt). 1.4 = 90 (taught, first attempt).

### Granule G3: 1.5 (TEM vs SEM)

**Components:** `image` ×2 (TEM image, SEM image) + `comparison` component

**Tutor:** "There are actually two types of electron microscope. TEM — transmission electron microscope — fires electrons through a thin slice of the specimen. You get a flat, 2D cross-section image. SEM — scanning electron microscope — bounces electrons off the surface. You get a 3D-looking image of the outside. Easy way to remember: transmission = through, scanning = across the surface."

**Micro-verify (binary choice — only one granule, binary is appropriate):** "Which type gives you a 3D image — TEM or SEM?"

**Student:** "SEM I think?"

**Result:** ✓ Correct but tentative. Confirmed, reinforced hook: "SEM, that's right. Scanning — it scans across the surface, giving you that 3D look."

**Score:** 1.5 = 90 (taught, first attempt).

### Node 1 Macro-Verify

**Stage 1 (match-pairs):** "Match each microscope type to what it uses:"
- Light microscope → beam of light ✓
- TEM → electrons through specimen ✓
- SEM → electrons bouncing off surface ✓

**Stage 2 (explain-own-words):** "In a couple of sentences, what are the main differences between light and electron microscopes?"

**Student:** "Light microscopes have been around since the 1600s and use light. Electron microscopes came in the 1930s, use electrons, and there's two types — TEM which goes through the sample and SEM which scans the surface."

**Result:** ✓ Comprehensive. Confidence loop fires — this student knew nothing 10 minutes ago.

### Node 1 Summary

```
✓ Light microscopes — 1600s              first time
⚠ Electron microscopes — 1930s           needed help
✓ Light uses light beams                 first time
✓ Electron uses electron beams           first time
✓ TEM vs SEM                             first time

Result: 4/5 first time · 1 to revisit
```

**Time:** ~10 minutes

---

## Mock Lesson 2 — Knowledgeable Student (Same Node)

### Orientation

**Tutor:** "What do you already know about microscopes? Have you come across different types?"

**Student:** "Yeah — light microscopes from the 1600s and electron from the 1930s. Light uses light, electron uses electrons."

**Decision:** No beginner flag. Student demonstrated granules 1.1, 1.2, 1.3, 1.4 in the orientation response. Quick-check remaining granule only.

### Quick-Check: Granule 1.5 (TEM vs SEM)

**Quick-check:** "What's the difference between TEM and SEM?"

**Student:** "TEM fires electrons through for a 2D image, SEM scans the surface for 3D."

**Result:** ✓ Quick-checked, first attempt. All 5 granules verified.

### Node 1 Macro-Verify

Skip Stage 1 (already demonstrated connections in orientation). Go straight to Stage 2.

**Stage 2:** "In your own words, summarise the key differences between the microscope types."

**Student:** "Light microscopes from the 17th century use light beams. Electron microscopes from the 1930s use electron beams — TEM transmits through for 2D cross-sections, SEM scans surfaces for 3D images."

**Result:** ✓ Comprehensive.

### Node 1 Summary

```
✓ Light microscopes — 1600s              quick-checked
✓ Electron microscopes — 1930s           quick-checked
✓ Light uses light beams                 quick-checked
✓ Electron uses electron beams           quick-checked
✓ TEM vs SEM                             quick-checked

Result: 5/5 first time · 0 to revisit
```

**Time:** ~2-3 minutes

### What This Demonstrates

Same node, same 5 granules, same data structure. Completely different experience. The orientation question alone drove the entire branching. The decision tree adapted: beginner got ~10 minutes of full teaching, knowledgeable got ~2-3 minutes of quick verification. Both leave with all granules verified.

---

## Anti-Patterns

| Don't | Do Instead |
|-------|------------|
| Just say "wrong" | "Not quite — let me help with that" |
| Dump information without verifying | TEACH → VERIFY, always |
| Test before teaching (beginner) | Set beginner flag → teach first |
| Stack multiple teaches before verifying | Verify after each granule group |
| Tick off a granule without full verification | All parts must be confirmed |
| Loop a student endlessly on a failed question | Cut-off at 2 attempts, move on |
| Use the same verification type 3× in a row | Rotate component types (fatigue management) |
| Give excessive praise | Brief acknowledgement: "That's right" |
| Recap what was just taught | They were just there — move forward |
| Skip macro-verify | It's where the confidence loop fires |
| Make the node summary punishing | "4/5 first time" not "you failed 1" |
| Force discovery mode when student says "just tell me" | Respect it. Switch to efficiency mode. |

---

## The Golden Rules

1. **TEACH → VERIFY → TEACH → VERIFY** — the heartbeat of every lesson
2. **Verification must cover every part of the granule** — don't tick off without full confirmation
3. **Acknowledge partial answers, clarify what's missing** — never say "wrong" to a partially right answer
4. **Beginner flag persists** — don't test untaught material
5. **Components first, text second** — the component IS the teaching tool
6. **Cut-off at 2 attempts** — don't trap students in loops
7. **The confidence loop is the product** — protect it at all costs
8. **Be concise** — fatigue kills learning. 2-4 sentences per group.
9. **Link to existing knowledge** — neurons that fire together wire together
10. **Progress must be visible** — nodes light up, summaries are honest, heat maps show growth

---

## State Variables (Implementation Reference)

For V1 static implementation, the decision tree tracks:

| Variable | Type | Purpose |
|----------|------|---------|
| `phase` | enum | Current UI state: intro, teach, verify, feedback, node-complete, complete |
| `currentNodeIndex` | number | Which node we're on |
| `currentGranuleGroupIndex` | number | Which granule group within the node |
| `beginnerFlag` | boolean | When set, skip quick checks, teach everything |
| `completedGranules` | Set | Granule IDs that have been verified |
| `results` | Array | Per-granule: { granuleId, passed, firstAttempt, attempts, scaffoldedDown, cutOff, source } |
| `lastComponentType` | string | Last verify component shown (for variety) |
| `componentHistory` | Array | Recent component types (for fatigue management) |

### Phase Flow (V1 Static)

```
START → "intro"
  └── User clicks "Begin Lesson"
      └── Set currentNodeIndex = 0, currentGranuleGroupIndex = 0
      └── → "teach"

"teach"
  └── Show teaching content for current granule group
  └── User clicks "Check my understanding"
      └── Select verify question (weighted, avoid repeating type)
      └── → "verify"

"verify"
  └── Show verification question
  └── User answers
      ├── CORRECT
      │   └── Mark granule(s) complete
      │   └── → "feedback" (success)
      └── INCORRECT
          └── Record attempt
          └── → "feedback" (needs work)

"feedback"
  └── Show result + explanation
  └── User clicks "Continue"
      ├── More granule groups in this node?
      │   └── currentGranuleGroupIndex++
      │   └── → "teach"
      ├── No more granule groups, macro-verify?
      │   └── → macro-verify phase
      ├── No more granule groups, more nodes?
      │   └── → "node-complete"
      └── No more anything
          └── → "complete"

"node-complete"
  └── Show node summary (✓ and ⚠ per granule)
  └── Show bridge text
  └── User clicks "Continue"
      ├── More nodes?
      │   └── currentNodeIndex++, currentGranuleGroupIndex = 0
      │   └── → "teach"
      └── No more nodes
          └── → "complete"

"complete"
  └── Show full lesson summary
  └── Strengths / weaknesses / overall score
  └── "Practice weak areas?" → filtered revision deck
  └── "Go to test modes" → MCQs / flashcards / short answers
```

---

## Summary

```
CONTENT (created via content-creation-methodology.md)
    ↓
NODE MICRO-CYCLE (this document)
  Orientation → Beginner flag → Teach + Micro-verify → Macro-verify → Summary
    ↓
SCORING ALGORITHM
  Raw events → Granule mastery (0-100) → Aggregation → Actions
    ↓
ACTIONS
  Spaced repetition · Custom decks · Heat maps · Readiness · Next session behaviour
    ↓
THE CONFIDENCE LOOP
  Learn → Prove → See proof → Feel good → Want more
```

**Build the skeleton first. Derive everything from it. Teach it with TEACH → VERIFY. Score it honestly. Let the confidence loop do the rest.**

---

*This document is the authoritative operational guide for lesson delivery. Read alongside content-creation-methodology.md (how to create the content) and teaching-methodology.md v3.0 (the pedagogical philosophy).*
