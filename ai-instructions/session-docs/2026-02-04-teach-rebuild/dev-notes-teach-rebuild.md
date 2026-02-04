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

**Tutor:** Teaches mechanism. Hook: "the clue is in the name."

**Micro-verify (open recall):** "What does a light microscope use to form an image, and what does an electron microscope use?"

**Student:** "Light beam and electron beam respectively."

**Result:** ✓ Both first attempt. Hook worked — name IS the answer.

### Granule 1.5 (TEM vs SEM)

**Components:** `image` ×2 (TEM image, SEM image) + `comparison` component

**Tutor:** Hook: "transmission = through, scanning = across surface."

**Micro-verify (binary choice):** "Which type gives you a 3D image — TEM or SEM?"

**Student:** "SEM I think?"

**Result:** ✓ Correct but tentative. Confirmed, reinforced hook.

### Node 1 Results: 4/5 first time · 1 to revisit

---

## Mock Lesson 2 — Knowledgeable Student (Node 1)

### Orientation

**Student:** "light microscopes 1600s and electron 1930s?"

**Decision:** No beginner flag. Student demonstrated 1.1 + 1.2 in orientation. Quick-check remaining.

### Quick-Checks

- 1.3 + 1.4: "light beams vs electron beams?" → ✓
- 1.5: "TEM transmission 2D, SEM scanning 3D?" → ✓

All 5 granules verified through quick-checks alone. ZERO teaching needed.

### Verdict

The decision tree adapted perfectly. Same node, same 5 granules, completely different experience. ~2 minutes vs ~10 minutes. The orientation question alone drove the entire branching.

---

## Updated Key Insights (13)

1. Orientation → beginner flag works
2. Granule pairing natural and efficient
3. Components first, text second
4. Verification ladder: step down on failure
5. Hooks reduce verify difficulty
6. Partial answer: acknowledge correct, clarify missing, re-verify gap only
7. Cut-off at 2 attempts max
8. Node summary honest (✓ and ⚠)
9. Macro-verify adaptive (beginners need both stages, knowledgeable skip to written)
10. Confidence Loop IS the product
11. Written responses SHORT (1-2 sentences)
12. Same tree, different paths (beginner ~10min, knowledgeable ~2-3min)
13. Tone adapts to student level

---

## Node Transitions: The Bridge

Pattern: `Node Summary → Bridge → Next Node Orientation → Micro-cycle`

Bridge = 1-2 sentences connecting what they just learned to why the next topic matters. Beginner flag resets per node.

---

## The Scoring Algorithm

### Layer 1: Raw Events

| Event | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Did they verify the granule? |
| `firstAttempt` | boolean | First try? |
| `attempts` | number | Total verify attempts |
| `scaffoldedDown` | boolean | Stepped down ladder? |
| `cutOff` | boolean | Hit 2-attempt limit? |
| `source` | string | `"taught"` or `"quick-checked"` |
| `timestamp` | datetime | When |

### Layer 2: Granule Mastery Algorithm

```
BASE SCORE: 100

Source:      "taught" → -10
First attempt: false → -15
Attempts:    2 → -10, 3 → -20, 4+ → -30
Scaffolded:  true → -15
Cut-off:     true → FLOOR AT 25

FLOOR: 0  |  CEILING: 100
```

### Layer 2b: Worked Examples

**Beginner Node 1:**
| Granule | Score |
|---------|-------|
| 1.1 Light — 1600s | **50** (100-10-15-10-15) |
| 1.2 Electron — 1930s | **40** (100-10-15-20-15) |
| 1.3 Light uses light | **90** (100-10) |
| 1.4 Electron uses electrons | **90** (100-10) |
| 1.5 TEM vs SEM | **90** (100-10) |

**Knowledgeable Node 1:** All 5 granules → **100**

### Layer 2c: Aggregation

```
Node mastery = avg(granule scores) - (10 × count below 50)
Lesson mastery = avg(node scores) - (10 × count below 50)
Subject mastery = avg(lesson scores)
```

### Layer 3: Actions

**Spaced Repetition:**
90-100 → 7 days | 70-89 → 3 days | 50-69 → 1 day | 25-49 → same session | 0-24 → priority

**Custom Deck Generation:**
Below 50 → flashcards + MCQs | 50-69 → flashcards | 70-89 → MCQs only | 90+ → not included

**Review Prioritisation:**
1. Overdue | 2. Lowest mastery | 3. Most recently failed | 4. Random

**Heat Map:** 90+ dark green | 70-89 light green | 50-69 amber | 25-49 orange | 0-24 red

**Readiness:** All ≥90 exam ready | All ≥70 good shape | Any <50 gaps | Any <25 priority

**Next Session:** ≥90 skip | 50-89 quick-check | <50 re-teach

### Full Pipeline
```
RAW EVENTS → ALGORITHM → THRESHOLDS → ACTIONS
  (what happened)  (scores)   (ranges)    (spaced rep, decks, heat maps, readiness)
```

---

## Weakness Reporting

Three levels:
```
Level 1 — WHAT:    Granule label from YAML
Level 2 — HOW BAD: Score + threshold
Level 3 — WHY:     Raw event interpretation (confusion pattern, scaffold history)
```

`weaknessLog` array per granule interaction for Level 3 detail.

---

## Features Discovered

### Teach → Review Pipeline
Lesson summary "Practice weak areas now" button → flashcards/MCQs filtered to ⚠ granule IDs → spaced repetition → metrics update → next session informed.

### Custom Practice Decks From Metrics
Subject-wide query of weak granules → dynamic flashcard/MCQ/short-answer decks that update as mastery improves.

---

## Data Visualisation Catalogue (26 total)

### Essential (launch):
1. Granule heat map
2. Readiness indicator
3. Priority queue
4. Mastery over time (line chart)
5. Review forecast calendar

### High value (post-launch):
6. Node mastery bar chart
7. Lesson mastery cards
8. Strength radar / spider chart
9. Weakest granules table
10. Session comparison

### Nice-to-have (polish):
11-26: Subject gauge, stacked area, streak tracker, decay prediction, histogram, velocity, source breakdown, attempt distribution, session timeline, node donut, time per node, component usage, time recommendation, strongest table, review success rate, completion progress bar.

---

## TODO

- [ ] Build repeatable YAML format
- [ ] Add metrics/analytics to structure
- [ ] Define scoring algorithm (done — see above)
- [ ] Content creation methodology doc (reproducible)
- [ ] Teaching methodology doc (reproducible)
