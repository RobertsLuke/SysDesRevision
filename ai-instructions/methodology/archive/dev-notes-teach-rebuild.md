# Dev Notes — Teach Mode Rebuild

**Date:** 4 Feb 2025
**Status:** In progress — discovering through mock lessons

---

## What's Wrong With Current Implementation

The current Teach.jsx skips the BEGINNING stage entirely. It shows a generic "Ready to learn?" screen, user clicks "Begin Lesson", and it dumps them straight into teaching granule 1.1. No orientation, no quick checks, no beginner flag, no attempt to find out what the student already knows. Assumes everyone is a blank slate.

---

## The Node Micro-Cycle (Decision Tree)

This is the core loop. Every node follows this pattern. The lesson (mesocycle) is just this micro-cycle repeated for each node.

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
│   │   ┌─── TEACH ──────────────────────────────────┐
│   │   │  • Components FIRST (image, comparison,     │
│   │   │    callout, table, etc.)                    │
│   │   │  • Text SECOND (explains the components)    │
│   │   │  • Hooks where possible (mnemonics,         │
│   │   │    analogies, "clue is in the name")        │
│   │   │  • Concise — don't waffle                   │
│   │   └─────────────────────────────────────────────┘
│   │           ↓
│   │   ┌─── MICRO-VERIFY ───────────────────────────┐
│   │   │  Start at appropriate level:                │
│   │   │                                             │
│   │   │  VERIFICATION LADDER (hardest → easiest):   │
│   │   │    Open recall                              │
│   │   │    Fill-blank                               │
│   │   │    MCQ                                      │
│   │   │    True-false / binary choice               │
│   │   │                                             │
│   │   │  Good hook? → Try open recall first         │
│   │   │  No hook / pure facts? → Fill-blank or MCQ  │
│   │   └─────────────────────────────────────────────┘
│   │           ↓
│   │   ┌─── RESPONSE HANDLING ───────────────────────┐
│   │   │                                             │
│   │   │  ✓ PASS                                     │
│   │   │    → Confirm, reinforce briefly             │
│   │   │    → Next granule group                     │
│   │   │                                             │
│   │   │  ~ PARTIAL                                  │
│   │   │    → Acknowledge what's correct             │
│   │   │    → Clarify what's missing/wrong           │
│   │   │    → Re-verify ONLY the gap                 │
│   │   │    → Don't repeat what they nailed          │
│   │   │                                             │
│   │   │  ✗ FAIL                                     │
│   │   │    → Don't say "wrong"                      │
│   │   │    → Re-teach (different format/component)  │
│   │   │    → Scaffold DOWN the verify ladder        │
│   │   │    → Re-verify at easier level              │
│   │   │        ├── Pass → next granule group        │
│   │   │        └── Fail again → CUT-OFF             │
│   │   │             • No shame                      │
│   │   │             • Give answer cleanly            │
│   │   │             • "They'll stick with practice"  │
│   │   │             • Record as needs-review         │
│   │   │             • Move on immediately            │
│   │   └─────────────────────────────────────────────┘
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
│   │     → One focused prompt, 1-2 sentences
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
└── NODE COMPLETE → Next node (repeat micro-cycle)
```

### The Mesocycle (Full Lesson)

```
LESSON START
│
├── Node 1 → micro-cycle → macro-verify → summary
├── Node 2 → micro-cycle → macro-verify → summary
├── Node 3 → micro-cycle → macro-verify → summary
│   ...
├── LESSON MACRO-VERIFY (optional — across all nodes)
└── LESSON SUMMARY
    → Overall score
    → Strengths
    → Weaknesses → flagged for flashcards/MCQs
    → Confidence Loop: "You started knowing nothing.
      Look what you can do now."
```

---

## The Confidence Loop

The app's core value proposition. Not just pedagogy — it's the reason users come back.

```
Learn → Prove to yourself you've learned → See the proof → Feel good → Want more
```

The macro-verify written response is where this fires. A student who said "I don't know anything" ten minutes ago is now writing coherent answers. That visible transformation IS the product.

---

## Granule Grouping

Granules within a node often pair naturally. The decision tree works on groups, not individual granules.

**Node 1 example:**
- 1.1 + 1.2 — Timeline (when light, when electron)
- 1.3 + 1.4 — Mechanism (what light uses, what electron uses)
- 1.5 — Electron subtypes (TEM vs SEM)

Grouping means:
- Fewer transitions (smoother flow)
- Natural comparisons (light vs electron)
- Combined micro-verifies (check both at once)
- Components work better (side-by-side images, comparison tables)

---

## Components Are Teaching Tools, Not Decoration

Components should be woven into the teaching, not bolted on. The text accompanies and explains the component — the component isn't illustrating the text, the text is explaining the component.

### Teaching Components

| Component | Purpose | Example use |
|-----------|---------|-------------|
| `image` | Visual aids, diagrams, photos | Photos of microscope types |
| `comparison` | Side-by-side comparison of two things | Light vs electron microscope |
| `table` | Structured data, specs, properties | Magnification/resolution figures |
| `callout` | Emphasise a key fact or number | "×2,000,000 magnification" |
| `mnemonic` | Memory aid for lists or sequences | Hooks for recall |
| `math-display` | Formulas, equations | Magnification formula triangle |

### Verification Components

| Component | Complexity | Client-checkable? |
|-----------|-----------|-------------------|
| `fill-blank` | Low | ✅ |
| `true-false` | Low | ✅ |
| `mcq` | Medium | ✅ |
| `match-pairs` | Medium | ✅ |
| `order-sequence` | Medium | ✅ |
| `explain-own-words` | High | ❌ Needs AI |
| `solve-problem` | High | Partial |
| `diagram-label` | High | ❌ Needs UI |

### Component Weighting

In the content files (YAML/JS), teaching components will be optional but weighted to encourage their use. A granule without components is valid but weaker. When building content, actively look for opportunities — especially `image`, `comparison`, and `callout`.

---

## Before/After Log

### Change 1: Text-only teaching → Component-led teaching

**BEFORE (bad):**
```
Tutor: "So there are two main types of microscope — light microscopes 
and electron microscopes. They were invented at very different times...

Light microscopes came first. They were developed way back in the 
mid-1600s — the 17th century. Think Shakespeare-era..."

Quick check — roughly when were light microscopes developed?
```
**Problems:** Wall of text. No visual anchor. Student can't picture what they're learning about. Only taught 1.1, missed natural pairing with 1.2.

**AFTER (good):**
```
[IMAGE COMPONENT: side-by-side photos of light and electron microscope]

Tutor: "These are the two main types. On the left, a light microscope. 
On the right, an electron microscope. Notice the size difference. 
Light microscopes: mid-1600s. Electron microscopes: 1930s. 
300-year gap."

Micro-verify: "When were light microscopes developed, and when 
did electron microscopes come along?"
```
**Why it's better:** Images first. Text explains images. Teaches 1.1 + 1.2 as natural pair. Micro-verify covers both.

---

## Key Insights

1. **Orientation → beginner flag** works. "I don't know anything" = teach everything, no surprises.
2. **Granule pairing** is natural and efficient. 1.1+1.2, 1.3+1.4, 1.5 alone.
3. **Components first, text second.** Images and comparisons do the heavy lifting. Text explains them.
4. **Verification ladder:** Open recall → fill-blank → MCQ → true-false. Step down on failure.
5. **Hooks reduce verify difficulty.** Good hook = can use harder verify component.
6. **Partial answer handling:** Acknowledge correct, clarify missing, re-verify only the gap.
7. **Cut-off at 2 attempts.** Give answer, record, move on. Don't trap.
8. **Node summary is honest.** Shows ✓ and ⚠ clearly. No shame, just information.
9. **Macro-verify is multi-stage.** Component-based (connect facts) then written response (prove understanding). Not a repeat of micros.
10. **The Confidence Loop.** Learn → prove you've learned → see proof → feel good → want more. This IS the product.
11. **Pace vs solidification.** Written responses must be SHORT and targeted. One focused sentence prompt. Macro-verify total: ~2 minutes.

---

---

## Mock Lesson 1 — Beginner Student (Node 1)

### Orientation

**Tutor:** "What do you already know about microscopes? Have you come across different types?"

**Student:** "I don't know anything."

**Decision:** Beginner flag SET. Teach every granule group, no quick checks.

### Granule Group 1.1 + 1.2 (Timeline)

**Components:** `image` ×2 side-by-side (light microscope photo, electron microscope photo)

**Tutor:** "These are the two main types of microscope. On the left, a light microscope — you might have used one at school. On the right, an electron microscope — a completely different beast. Notice the size difference. Light microscopes have been around since the **mid-1600s** — the 17th century. Electron microscopes came much later, in the **1930s**. That's roughly a 300-year gap."

**Micro-verify (open recall):** "So roughly — when were light microscopes developed, and when did electron microscopes come along?"

**Student:** "Erm I don't know when they were developed."

**Handling:** FAIL. Don't say wrong. Re-teach with `callout` component (key dates isolated visually). Scaffold DOWN to fill-blank.

**Component:** `callout` (key dates: Light → mid-1600s, Electron → 1930s, ~300 year gap)

**Re-verify (fill-blank):** "Light microscopes were developed in the mid-___, and electron microscopes were invented in the ___."

**Student:** "Light microscopes were the mid 1600s and light was 1930s."

**Handling:** PARTIAL. 1.1 correct ✓. 1.2 wrong — said "light" instead of "electron". Acknowledge correct part, gently correct mix-up, re-verify ONLY the error.

**Tutor:** "Mid-1600s for light — spot on. But careful — you said light for both. The 1930s one is the electron microscope. The big one on the right in those photos."

**Re-verify (fill-blank, targeted):** "Light microscopes were the mid-1600s. And the ones invented in the 1930s were ___ microscopes?"

**Student:** "Sorry yeah that was electron microscopes."

**Result:** ✓ Both verified. 1.1 clean, 1.2 needed help (flagged for review).

### Granule Group 1.3 + 1.4 (Mechanism)

**Components:** `callout` (Light → beam of light, Electron → beam of electrons. "The clue is in the name!")

**Tutor:** Teaches mechanism. Hook: "the clue is in the name." Explains WHY electrons work better (shorter wavelength) and WHY vacuum needed.

**Micro-verify (open recall):** "What does a light microscope use to form an image, and what does an electron microscope use?"

**Student:** "Light beam and electron beam respectively."

**Result:** ✓ Both first attempt. Hook worked — name IS the answer.

**Insight:** Hook quality directly affects verify difficulty. "Clue is in the name" made open recall almost as easy as fill-blank.

### Granule 1.5 (TEM vs SEM)

**Components:** `image` ×2 (TEM image: flat 2D cross-section, SEM image: 3D surface of insect eye) + `comparison` component (TEM vs SEM: through/2D/high-mag vs surface/3D/lower-mag)

**Tutor:** Hook: "transmission = through, scanning = across surface."

**Micro-verify (binary choice):** "Which type gives you a 3D image — TEM or SEM?"

**Student:** "SEM I think?"

**Result:** ✓ Correct but tentative. Confirmed, reinforced hook.

### Node 1 Results

| Granule | Result | Notes |
|---------|--------|-------|
| 1.1 Light — mid-1600s | ✓ | Passed fill-blank (2nd attempt) |
| 1.2 Electron — 1930s | ⚠ review | Mixed up light/electron, corrected |
| 1.3 Light uses light | ✓ | Open recall, 1st attempt |
| 1.4 Electron uses electrons | ✓ | Open recall, 1st attempt |
| 1.5 TEM vs SEM | ✓ | Binary choice, 1st attempt |

### Macro-Verify

**Stage 1 — `match-pairs`:**
Connect facts to microscope types (mid-1600s, beam of electrons, 1930s, beam of light, 3D surface images, 2D high-mag images → Light / Electron / TEM / SEM)

**Student:** Completes correctly.

**Stage 2 — `explain-own-words`:**
"In a couple of sentences — what's the difference between a light microscope and an electron microscope?"

**Student:** *(awaiting — this is the confidence loop moment)*

### Node 1 Summary Shown
```
✅ NODE 1 COMPLETE
4/5 first time · 1 to revisit

✓ Light microscopes — mid-1600s
⚠ Electron microscopes — 1930s (needed help)
✓ Light uses beam of light
✓ Electron uses beam of electrons
✓ TEM = 2D through, SEM = 3D surface
```

---

---

## Mock Lesson 2 — Knowledgeable Student (Node 1)

### Orientation

**Tutor:** "What do you already know about microscopes? Have you come across different types?"

**Student:** "I think I know a fair bit like we have light microscopes and electron microscopes and they were developed at different times, light microscopes 1600s and electron 1930s?"

**Decision:** No beginner flag. Student has demonstrated 1.1 (light 1600s) and 1.2 (electron 1930s) in their orientation answer. Both correct. No need to teach those — confirm and move to quick-checking 1.3 + 1.4.

### Quick-Check 1.3 + 1.4 (Mechanism)

**Tutor:** "Spot on — light microscopes in the 1600s, electron microscopes in the 1930s. You've got that nailed. ✓ So you know the two types — do you know what makes them actually different? Like, what does each one use to create an image?"

**Student:** "Oh erm light beams vs electron beams?"

**Result:** ✓ Correct but tentative. Quick confirm, no teaching needed. Move to quick-check 1.5.

### Quick-Check 1.5 (TEM vs SEM)

**Tutor:** "Exactly right. ✓ One more — there are actually two types of electron microscope. TEM and SEM. Ring any bells?"

**Student:** "I feel like TEM is transmission and makes 2D images and scanning is SEM and 3D image?"

**Result:** ✓ All correct. All 5 granules verified through quick-checks alone. No teaching required for this student.

### Macro-Verify

**Decision:** Skip match-pairs (structured scaffold not needed for this student — they came in with facts already connected). Go straight to written response.

**Tutor:** "You clearly know this topic well. Let's just lock it in — in a couple of sentences, what's the difference between a light microscope and an electron microscope?"

**Student:** *(skipped — student confirmed the method works, moving on)*

### Mock Lesson 2 — Verdict

The decision tree adapted perfectly. Same node, same 5 granules, completely different experience. The knowledgeable student was validated, not bored. No time wasted re-teaching what they already knew. The orientation question alone drove the entire branching. This confirms: **the micro-cycle works for both extremes of student ability.** If it handles "I don't know anything" and "I know most of this" correctly, it can handle everything in between.

### Path Comparison: Beginner vs Knowledgeable

| Step | Beginner (Mock 1) | Knowledgeable (Mock 2) |
|------|-------------------|------------------------|
| Orientation | "I don't know anything" | Demonstrates 1.1 + 1.2 |
| Beginner flag | SET | NOT SET |
| 1.1 + 1.2 | Taught with images + callout, failed open recall, scaffolded to fill-blank, partial, re-verified | Verified in orientation answer |
| 1.3 + 1.4 | Taught with callout + hook, passed open recall | Quick-check, passed |
| 1.5 | Taught with images + comparison, passed binary choice | Quick-check, passed |
| Macro stage 1 | match-pairs (needed structure) | Skipped (not needed) |
| Macro stage 2 | Written response | Written response |
| Time on node | ~10 minutes | ~2-3 minutes |
| Granules taught | 5 | 0 |
| Granules quick-checked | 0 | 5 |

**Key observation:** Same decision tree, same node, completely different experience. The beginner got full teaching with components, scaffolded verification, and patient handling. The knowledgeable student got quick validation, no wasted time, and respect for what they already knew. Both arrive at macro-verify. The orientation question is the single branching point that drives everything.

### New Insight: Macro-Verify Adapts Too

The macro-verify doesn't have to be identical for every student. A beginner needs match-pairs first (structured scaffolding to connect facts they only just learned) THEN written response. A knowledgeable student can skip straight to written response because their facts are already connected. The macro-verify stages are optional based on how the student performed during the node.

---

## Updated Key Insights

1. **Orientation → beginner flag** works. "I don't know anything" = teach everything. Demonstrated knowledge = quick-check.
2. **Granule pairing** is natural and efficient. 1.1+1.2, 1.3+1.4, 1.5 alone.
3. **Components first, text second.** Images and comparisons do the heavy lifting. Text explains them.
4. **Verification ladder:** Open recall → fill-blank → MCQ → true-false. Step down on failure.
5. **Hooks reduce verify difficulty.** Good hook = can use harder verify component.
6. **Partial answer handling:** Acknowledge correct, clarify missing, re-verify only the gap.
7. **Cut-off at 2 attempts.** Give answer, record, move on. Don't trap.
8. **Node summary is honest.** Shows ✓ and ⚠ clearly. No shame, just information.
9. **Macro-verify is multi-stage but adaptive.** Beginners need structured stage (match-pairs) then written. Knowledgeable students can skip to written. Stages are optional based on performance.
10. **The Confidence Loop.** Learn → prove you've learned → see proof → feel good → want more. This IS the product.
11. **Pace vs solidification.** Written responses must be SHORT and targeted. One focused sentence prompt. Macro-verify total: ~2 minutes.
12. **Same tree, different paths.** One decision tree handles all student levels. Orientation is the key branching point. Beginner: ~10 min per node. Knowledgeable: ~2-3 min. Both valid, both respectful.
13. **Tone adapts to student level.** Beginner: patient, encouraging, hand-holding. Knowledgeable: brisk, respectful, "you clearly know your stuff". Don't patronise someone with knowledge. Don't overwhelm a beginner.

---

## TODO — Remind Later

- [ ] Build repeatable structure into YAML format (nodes, granule groups, components, verify options, hooks, bridges)
- [ ] Add metrics/analytics into the structure (track: time per node, verify attempts, scaffold-downs, cut-offs, beginner flag frequency, component usage, confidence loop completion rates)
- [ ] Define scoring algorithm (granule → node → lesson → subject)

---

## Feature: Custom Practice Decks From Metrics

Metrics aren't just per-lesson — they're per-GRANULE across the entire subject. That means at any point the system can query: "show me every granule this student is weak on" regardless of which week or node it came from.

This generates **custom practice decks**:
- Flashcard deck built from ⚠ granules across ALL weeks
- MCQ set targeting lowest-mastery granules
- Short answer practice focused on cut-off granules

The decks are dynamic — as mastery improves through practice, granules drop out. As new lessons introduce new weak areas, they get added. The student always has a "what I need to work on" deck that's current and targeted.

This is a killer feature because most revision apps make students build their own decks or study everything equally. This one says: "Here's exactly what you're weak on. Practice this."

---

## Feature: Teach → Review Pipeline

At the end of a lesson, the ⚠ needs-review granules don't just sit in a summary — they become **immediately actionable**. The lesson summary offers a button: "Practice your weak areas now" which drops them straight into flashcards and MCQs filtered to ONLY the granules they struggled with.

This is massive because:

1. **Immediate reinforcement** — The gap is fresh. Hitting it now while they still remember the teaching is the best possible time.
2. **Custom review from day one** — They haven't had to do weeks of revision to build up a profile. One lesson generates a targeted review set.
3. **No repetition of easy stuff** — Metrics + spaced repetition mean they never see cards for things they already nailed. The review is 100% focused on gaps.
4. **The system works as a system** — Teach mode feeds review mode. Review mode feeds back into metrics. Metrics feed back into the next teach session's orientation (we could even pre-fill the orientation with "last time you struggled with X — let's check that first"). It's a loop, not isolated modes.
5. **Confidence loop extends** — They just learned, proved they learned, saw their gaps, and now they can FIX their gaps in the same session. The cycle tightens: learn → verify → identify gaps → fix gaps → verify again.

This makes the lesson summary not just informational but a **launchpad**. The student never leaves the app wondering "what should I do next?" — the app tells them and takes them there.

### Data Flow

```
Teach mode completes
  → Lesson summary with ⚠ granules identified
  → "Practice weak areas" button
  → Flashcards/MCQs filtered to ⚠ granule IDs
  → Spaced repetition ensures no repeats of mastered content
  → Metrics update with review performance
  → Next teach session can reference: "Last time you found X tricky..."
```

---

## Node Transitions: The Bridge

After a node summary, the transition to the next node has two parts:

1. **Bridge** — Narrative connection between nodes. Makes the lesson feel like a story, not a checklist. Answers "why do we care about the next topic?" by connecting it to what they just learned.
2. **New node orientation** — Fresh micro-cycle starts. Beginner flag resets per node.

Pattern: `Node Summary → Bridge → Next Node Orientation → Micro-cycle`

Examples:
- Node 1→2: "You know the types now. So why bother with electron microscopes? What can they do that light can't? → What do you know about magnification?"
- Node 2→3: "You know what they can do. But how do you actually prepare a specimen to look at? → What do you know about staining?"

The bridge is typically 1-2 sentences. It should feel like a teacher saying "right, now that we know X, the natural next question is Y."

---

## The Scoring Algorithm

The algorithm is the engine that turns raw events into scores, scores into actions, and actions into a personalised learning experience. Three layers: what happened → what does it mean → what do we do about it.

### Layer 1: Raw Events (what happened)

Every granule interaction records these raw events:

| Event | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Did they verify the granule? |
| `firstAttempt` | boolean | Did they get it on the first try? |
| `attempts` | number | Total verify attempts before pass/cut-off |
| `scaffoldedDown` | boolean | Did we step down the verification ladder? |
| `cutOff` | boolean | Did we hit the 2-attempt limit and give the answer? |
| `source` | string | `"taught"` or `"quick-checked"` |
| `timestamp` | datetime | When this happened |

These are just facts. They don't mean anything on their own.

### Layer 2: The Algorithm (what does it mean)

The algorithm derives a **mastery score** (0–100) from the raw events.

```
GRANULE MASTERY ALGORITHM
=========================

BASE SCORE: 100

Source adjustment:
  "quick-checked"  →  +0   (already knew it, no penalty)
  "taught"         →  -10  (fresh learning, less secure)

First attempt:
  true   →  +0   (expected, no bonus needed)
  false  →  -15  (needed multiple goes)

Attempts:
  1  →  +0
  2  →  -10
  3  →  -20
  4+ →  -30

Scaffolded down:
  true   →  -15  (needed easier verification)
  false  →  +0

Cut-off:
  true   →  FLOOR AT 25  (didn't actually pass, system gave answer)
  false  →  +0

FLOOR: 0
CEILING: 100
```

### Layer 2b: Worked Examples — Both Mock Students

**Beginner student — Node 1:**

| Granule | Source | 1st? | Attempts | Scaffolded | Cut-off | Calculation | Score |
|---------|--------|------|----------|------------|---------|-------------|-------|
| 1.1 Light — 1600s | taught | false | 2 | true | false | 100 - 10 - 15 - 10 - 15 | **50** |
| 1.2 Electron — 1930s | taught | false | 3 | true | false | 100 - 10 - 15 - 20 - 15 | **40** |
| 1.3 Light uses light | taught | true | 1 | false | false | 100 - 10 | **90** |
| 1.4 Electron uses electrons | taught | true | 1 | false | false | 100 - 10 | **90** |
| 1.5 TEM vs SEM | taught | true | 1 | false | false | 100 - 10 | **90** |

**Knowledgeable student — Node 1:**

| Granule | Source | 1st? | Attempts | Scaffolded | Cut-off | Calculation | Score |
|---------|--------|------|----------|------------|---------|-------------|-------|
| 1.1 Light — 1600s | quick-checked | true | 1 | false | false | 100 | **100** |
| 1.2 Electron — 1930s | quick-checked | true | 1 | false | false | 100 | **100** |
| 1.3 Light uses light | quick-checked | true | 1 | false | false | 100 | **100** |
| 1.4 Electron uses electrons | quick-checked | true | 1 | false | false | 100 | **100** |
| 1.5 TEM vs SEM | quick-checked | true | 1 | false | false | 100 | **100** |

Same node. Same 5 granules. Wildly different mastery profiles. The algorithm captures HOW they passed, not just THAT they passed.

### Layer 2c: Aggregation (granule → node → lesson → subject)

**Node mastery:**
```
Node mastery = average of granule scores
              - (10 × count of granules below 50)

Beginner Node 1:  (50+40+90+90+90)/5 = 72 - (10×1) = 62
Knowledge Node 1: (100+100+100+100+100)/5 = 100 - 0 = 100
```

The penalty for low outliers prevents a misleading average. A 72 sounds fine but hides a 40. A 62 more honestly reflects "mostly ok but has a real gap."

**Lesson mastery:**
```
Lesson mastery = average of node mastery scores
                - (10 × count of nodes below 50)

Beginner: (62 + 85 + 45 + 90) / 4 = 70.5 - (10×1) = 60.5
```

**Subject mastery:**
```
Subject mastery = average of lesson mastery scores across all weeks
```

Each level aggregates up, always penalising weak spots to keep the scores honest.

### Layer 3: Actions (what do we do about it)

The scores drive every decision the system makes.

**3a. Spaced Repetition Intervals**

Mastery score maps to initial review interval:

```
90–100  →  7 days   (solid — check again in a week)
70–89   →  3 days   (decent — reinforce soon)
50–69   →  1 day    (shaky — review tomorrow)
25–49   →  same session  (fragile — practice now)
0–24    →  same session, priority  (cut-off — immediate work)
```

After the initial interval, subsequent reviews adjust using SM-2 style algorithm:
- Easy recall → interval increases (1.5× to 2.5×)
- Hard recall → interval stays same or shrinks
- Failed recall → interval resets to 1 day

Each granule tracks:
```
interval: number      (days until next review)
easeFactor: number    (starts at 2.5, adjusts per review)
nextReview: date      (when to surface this granule)
reviewHistory: []     (array of past review results)
```

**3b. Custom Practice Deck Generation**

The system queries granule mastery scores to build targeted decks:

```
Below 50  →  flashcard deck AND MCQ deck (double coverage, weakest areas)
50–69    →  flashcard deck (needs reinforcement)
70–89    →  MCQ deck only (test application, not just recall)
90+      →  not included (mastered, wait for spaced repetition)
```

Decks are dynamic. As mastery improves through practice, granules drop out. As new lessons introduce new weak areas, they get added.

**3c. Review Mode Prioritisation**

When a student enters a review mode, granules are ordered by:

```
1. Overdue for spaced repetition (nextReview < today)
2. Lowest mastery score first
3. Most recently failed
4. Random from remaining pool
```

This means the student always sees their weakest, most urgent material first.

**3d. Heat Map Visualisation**

Mastery scores map directly to visual representation:

```
90–100  →  dark green    █
70–89   →  light green   ▓
50–69   →  amber         ▒
25–49   →  orange        ░
0–24    →  red           ░
```

Beginner Node 1 heat map:  🟠🟠🟢🟢🟢
Knowledgeable Node 1:      🟢🟢🟢🟢🟢

At a glance: where are you strong, where are you weak.

**3e. Progress Visualisations**

From accumulated metrics over time:

- **Node heat map** — per-granule mastery as colour grid. Shows exact gaps.
- **Progress over time** — line chart: granules mastered across sessions. Shows improvement trajectory.
- **Review forecast** — “You have 12 granules due for review this week” based on spaced repetition.
- **Strength radar** — spider chart across nodes showing relative confidence per topic.
- **Subject dashboard** — all lessons, all nodes, overall readiness for assessment.

**3f. Readiness Thresholds**

```
All granules ≥ 90    →  "Exam ready" — confident across the board
All granules ≥ 70    →  "Good shape" — minor gaps to tighten
Any granules < 50    →  "Gaps to fill" — specific areas need work
Any granules < 25    →  "Priority review" — material hasn't stuck at all
```

The student always knows where they stand and what to do about it.

**3g. Next Session Intelligence**

When a student re-enters teach mode for a topic they've done before:

```
System checks granule mastery scores from last session
  → Granules ≥ 90: skip entirely
  → Granules 50–89: quick-check (may have decayed)
  → Granules < 50: re-teach
  → Orientation can reference: "Last time you found X tricky — has it stuck?"
```

The orientation becomes INFORMED by data rather than starting blind every time.

### The Full Pipeline

```
RAW EVENTS (what happened)
  │  passed, firstAttempt, attempts, scaffolded, cutOff, source
  ↓
ALGORITHM (what does it mean)
  │  granule mastery score (0–100)
  │  → aggregates to: node mastery → lesson mastery → subject mastery
  ↓
THRESHOLDS (what do we do about it)
  │  score ranges trigger specific actions
  ↓
ACTIONS
  ├── Spaced repetition intervals
  ├── Custom practice deck generation
  ├── Review mode prioritisation
  ├── Heat map / progress visualisations
  ├── Readiness thresholds
  └── Next session intelligence
```

The algorithm is the bridge between "stuff that happened" and "intelligent, personalised learning." Without it, metrics are just numbers in a database. With it, every number drives a decision.

---

## Weakness Reporting: Per-Granule Diagnostic Detail

Every granule has two things: a mastery score (the number) and its content definition (what it teaches). The content definition in the YAML IS the human-readable description of the weakness. Granule 1.2 isn't just "score: 40" — it's "Electron microscopes were developed in the 1930s — score: 40."

The raw events tell us not just THAT they're weak but HOW they're weak.

### Three Levels of Weakness Reporting

```
Level 1 — WHAT:    "Electron microscope timeline"
                   (granule label from YAML content definition)

Level 2 — HOW BAD: "Score: 40 — needs immediate practice"
                   (mastery score + threshold classification)

Level 3 — WHY:     "Mixed up with light microscope dates, needed scaffolding"
                   (raw event interpretation + interaction pattern)
```

Level 3 is where reports become genuinely useful. The student doesn't just see "you're weak on this" — they see the specific mistake they made.

How Level 3 is derived from raw events:

| Raw Event Pattern | Weakness Description |
|-------------------|---------------------|
| `cutOff: true` | "Answer had to be given — didn't stick during teaching" |
| `scaffoldedDown: true` + `attempts: 3` | "Needed easier verification and multiple attempts" |
| `firstAttempt: false` + `attempts: 2` | "Got it on second try — initial recall shaky" |
| `source: "quick-checked"` + mastery decayed | "Knew this before but it's getting stale" |
| Partial answer logged | Specific confusion identified (e.g. "mixed up X and Y") |
| Macro-verify written response logged | Can quote their own words back to show the gap |

### Report Output Structure

For formal reports (PDF export, dashboard view, progress review):

```
STUDENT PROGRESS REPORT
=======================

Overall: 72% mastery (Good shape — minor gaps)

STRENGTHS:
• Microscope mechanisms (1.3, 1.4) — 90% — nailed first time
• TEM vs SEM (1.5) — 90% — understood distinction immediately
• Specimen preparation (all) — 100% — quick-checked, already knew it

WEAKNESSES:
• Electron microscope timeline (1.2) — 40%
  Diagnosis: confused with light microscope dates
  Recommended: flashcard practice, due tomorrow
• Cell organelle functions (3.2, 3.4) — 25%
  Diagnosis: answer had to be given, didn't stick during teaching
  Recommended: re-teach in next session, flashcards + MCQs

UPCOMING REVIEWS:
• 3 granules due tomorrow
• 8 granules due this week
• Next teach session recommended: Week 1 Node 3 (re-teach weak granules)
```

This is specific, actionable, and personalised. Not generic. Not vague. Every line is derived from real interaction data.

### Implementation Notes

To support Level 3 reporting, we should consider logging:
- Partial answer details (what was correct, what was wrong)
- The specific confusion pattern (e.g. "swapped X and Y", "omitted Z")
- Macro-verify written responses (for quoting back in reports)
- Which component the student failed on vs passed on (shows what format works for them)

This data can be stored as a `weaknessLog` array on each granule interaction record:
```
weaknessLog: [
  { type: "confusion", detail: "Said light instead of electron for 1930s" },
  { type: "scaffolded", detail: "Stepped from open-recall to fill-blank" },
  { type: "partial", detail: "Got 1.1 correct, failed 1.2" }
]
```

---

## Data Visualisation Catalogue

Every visualisation that can be derived from our metric data, grouped by the question it answers.

### Category 1: "Where am I right now?"

**Granule Heat Map** — ESSENTIAL
Grid of coloured cells per node. Each cell = one granule. Colour = mastery score. Instantly shows strong vs weak areas at the most granular level. Probably the single most useful visualisation in the entire app.
```
Node 1:  🟠🟠🟢🟢🟢
Node 2:  🟢🟢🟢🟢🟢
Node 3:  🟢🔴🟠🟢🔴
Node 4:  🟢🟢🟢🟢🟢
```
At a glance: Node 3 needs work. Granules 3.2 and 3.5 are the problems.

**Node Mastery Bar Chart**
Horizontal bars per node, filled to mastery percentage. Quick comparison of which nodes are strong vs weak within a lesson.
```
Node 1  ██████▓▓▓▓  62%
Node 2  ████████▓▓  85%
Node 3  ████░░░░░░  45%
Node 4  █████████▓  90%
```

**Lesson Mastery Cards**
Card per lesson (week) showing overall mastery as a number + colour. Dashboard landing view.
```
┌────────┐  ┌────────┐  ┌────────┐
│ Week 1 │  │ Week 2 │  │ Week 3 │
│  62%   │  │  85%   │  │  ---   │
│ 🟡     │  │ 🟢     │  │ Not    │
│        │  │        │  │ started│
└────────┘  └────────┘  └────────┘
```

**Subject Mastery Gauge**
Single circular gauge or arc showing overall subject mastery. The "big number" for the whole course. Good for motivation. Lives at the top of the dashboard.

**Strength Radar / Spider Chart**
One axis per node (or per lesson). Shows the shape of their knowledge. Balanced spider = even understanding. Lopsided = clear gaps. Great for identifying "strong on theory, weak on practical."

**Readiness Indicator** — ESSENTIAL
Simple traffic light or badge. Not a chart — just a clear status derived from readiness thresholds.
```
🟢 Exam ready     — all granules ≥ 90
🟡 Good shape     — all granules ≥ 70
🟠 Gaps to fill   — any granules < 50
🔴 Priority review — any granules < 25
```

### Category 2: "How am I improving?"

**Mastery Over Time (Line Chart)** — ESSENTIAL
X-axis = dates/sessions. Y-axis = mastery score. One line per node or per lesson. Shows trajectory: improving, plateauing, or declining due to decay.

**Granules Mastered Stacked Area**
X-axis = time. Y-axis = count of granules in each mastery band (red/orange/amber/green). Over time, green area should grow and red should shrink. Very satisfying to watch.

**Session Comparison**
Side-by-side bar charts. "Last session vs this session" for the same node. Shows concrete improvement: "Node 1 was 62 last time, now it's 78."

**Streak Tracker**
Calendar heat map (like GitHub contributions). Each day = a cell. Colour intensity = activity or mastery gained that day. Shows consistency. Students who study daily vs sporadically.

**Review Success Rate Over Time**
Line chart. What percentage of review cards are they getting right on first attempt? Should trend upward as spaced repetition works. Visible proof the system is helping.

### Category 3: "What should I do next?"

**Priority Queue** — ESSENTIAL
Ordered list of granules ranked by urgency (overdue + lowest mastery first). Not a chart — a list. Each item links directly to practice.
```
1. Cell organelle functions (3.2) — 25% — overdue 3 days
2. Cell organelle transport (3.4) — 25% — overdue 3 days
3. Electron microscope timeline (1.2) — 40% — due today
4. Magnification formula (2.3) — 68% — due tomorrow
```

**Review Forecast Calendar** — ESSENTIAL
Calendar view showing how many granules are due for review each day this week/month. Helps students plan study time.
```
Mon: 3 due  |  Tue: 0  |  Wed: 12 due  |  Thu: 2  |  Fri: 5 due
```

**Decay Prediction**
Line chart projecting when currently-mastered granules will drop below threshold if not reviewed. "If you don't review this week, 8 granules will drop below 70." Creates urgency without shame.

**Time Investment Recommendation**
Not a chart — a smart calculation. "You need approximately 15 minutes to clear your review queue" or "30 minutes to re-cover weak areas in Node 3." Helps students with limited time.

### Category 4: "What's the big picture?"

**Lesson Completion Progress Bar**
Simple horizontal bar per lesson. How many nodes complete? How many granules verified? Shows progress through the course.
```
Week 1:  ██████████ 100% (4/4 nodes)
Week 2:  █████▓▓▓▓▓  50% (2/4 nodes)
Week 3:  ░░░░░░░░░░   0% (not started)
```

**Mastery Distribution Histogram**
How many granules are in each mastery band? Shows the shape of their knowledge. Ideally heavily skewed toward 90-100.
```
0–24:   ██ (2 granules)
25–49:  ███ (3 granules)
50–69:  ████ (4 granules)
70–89:  ██████ (6 granules)
90–100: ███████████████ (15 granules)
```

**Weakest Granules Table**
Table sorted by mastery score ascending. Top 10 weakest granules with labels, scores, last reviewed date, and recommended action. The "fix these" list.

**Strongest Granules Table**
Opposite of above. Top 10 highest mastery. Good for confidence. "Look what you've nailed."

**Learning Velocity**
How many granules per hour do they master? Trend over sessions. Are they getting faster as they develop study skills?

**Source Breakdown (Pie/Donut)**
What percentage of granules were taught vs quick-checked? Shows how much they already knew vs had to learn. Changes per lesson.

**Attempt Distribution**
Bar chart showing how many granules were passed on 1st attempt, 2nd attempt, 3rd, cut-off. Should trend toward more first-attempts over time.

### Category 5: "What happened this session?"

**Session Timeline**
Horizontal timeline showing each granule interaction in order. Colour-coded by outcome (pass/partial/fail/cut-off). Shows the flow of a lesson. Where did they struggle? Where did they fly through?

**Node Breakdown Donut**
Per-node, donut chart showing proportion of granules: first-attempt pass / passed with help / cut-off. Quick summary of how a node went.

**Time Per Node**
Bar chart of time spent on each node in the session. Combined with mastery score shows efficiency: "Spent 10 mins on Node 1 (score: 62) vs 2 mins on Node 2 (score: 100)."

**Component Usage Summary**
What teaching and verification components were used this session? Which verify types led to most passes? More of an internal/analytics view but useful for content improvement.

### Essential vs Nice-to-Have

**Essential (launch set):**
1. Granule heat map — where am I weak
2. Readiness indicator — am I exam ready
3. Priority queue — what should I do next
4. Mastery over time — am I improving
5. Review forecast calendar — when do I need to study

**High value (build soon after launch):**
6. Node mastery bar chart
7. Lesson mastery cards
8. Strength radar
9. Weakest granules table
10. Session comparison

**Nice-to-have (polish phase):**
11. Subject mastery gauge
12. Granules mastered stacked area
13. Streak tracker
14. Decay prediction
15. Mastery distribution histogram
16. Learning velocity
17. Source breakdown
18. Attempt distribution
19. Session timeline
20. Node breakdown donut
21. Time per node
22. Component usage summary
23. Time investment recommendation
24. Strongest granules table
25. Review success rate over time
26. Lesson completion progress bar

---

*This document will grow as the mock lessons reveal more about how the teach mode should actually work.*
