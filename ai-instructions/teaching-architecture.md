# Teaching Architecture — Teach Mode

**Purpose:** Define how the teaching mode works inside the revision app — the data structures, decision tree, component system, and how AI and static versions differ.  
**Status:** Blueprint document. Companion to `teaching-methodology.md` and `node-granule-source-of-truth.md`.

---

## Overview

The app currently has three **test** modes: MCQs, Flashcards, Short Answer. These test what a student knows. They do not teach.

The **Teach** mode is the fourth tab. It teaches material using the node/granule architecture as its backbone, the decision tree to adapt to the student's performance, and components to deliver content and verify understanding.

The same node/granule structure that generates questions also generates the lesson. One source of truth, two outputs: teaching and testing.

---

## Data Architecture

### The Granule is the Atomic Unit

Every piece of teachable/testable knowledge is a **granule**. A granule lives inside a **node** (learning objective). All granules verified = node complete.

Each granule in the teach data specifies:

| Field | Purpose |
|-------|---------|
| `id` | Unique identifier (e.g. `"1.3"` = node 1, granule 3) |
| `objective` | What the student should be able to do after (e.g. "Can define resolution") |
| `teach.content` | The teaching text — what gets shown to the student |
| `teach.components` | Optional array of teaching components (table, image, comparison, etc.) |
| `verify` | Array of verification options — at least one per granule |

Each verification option specifies:

| Field | Purpose |
|-------|---------|
| `type` | Component type: `"fill-blank"`, `"mcq"`, `"true-false"` |
| `question` | The question text |
| `answer` / `correct` | The correct answer (format depends on type) |
| `accept` | For fill-blank: array of acceptable string matches |
| `options` | For mcq: array of 4 option strings |
| `explanation` | Shown on incorrect answer — teaches, doesn't just correct |
| `level` | `"micro"` or `"macro"` — determines when it's used |

### Multiple Verify Options = Variety

A granule can have multiple verification options (e.g. one fill-blank AND one MCQ). The app picks from the pool based on:

1. **What the student has seen** — if they did fill-blank last time, show MCQ this time
2. **Student ability level** — fill-blank is simpler (beginner), explain-own-words is harder (advanced)
3. **Fatigue management** — don't show the same component type 3 times in a row

This is controlled by the `weight` field (optional, defaults to 1). Equal weights = equal chance. Lower weight = less likely to be selected. The selection algorithm picks from available options weighted by these values, excluding the most recently used type.

### Node Structure

```javascript
{
  id: 1,
  title: "Understand how microscopy techniques developed over time",
  granules: [ /* array of granule objects */ ],
  macroVerify: {
    // Optional: a comprehensive check after all granules complete
    type: "free-recall",
    question: "In your own words, summarise how microscopy developed...",
    keyPoints: ["light mid-17th century", "electron 1930s", ...]
  }
}
```

### Full Teach Data Shape (per week)

```javascript
teach: {
  nodes: [
    {
      id: 1,
      title: "Learning objective title",
      granules: [
        {
          id: "1.1",
          objective: "Can state/explain/apply...",
          teach: {
            content: "Teaching text...",
            components: [
              // Optional: { type: "comparison", data: {...} }
            ]
          },
          verify: [
            {
              type: "fill-blank",
              question: "The ___ was invented in...",
              answer: "telescope",
              accept: ["telescope", "the telescope"],
              explanation: "The telescope was invented...",
              level: "micro"
            },
            {
              type: "mcq",
              question: "What was invented in...?",
              options: ["Telescope", "Microscope", "Periscope", "Stethoscope"],
              correct: 0,
              explanation: "The telescope was...",
              level: "micro"
            }
          ]
        }
      ],
      macroVerify: null // or a macro verification object
    }
  ]
}
```

---

## The Decision Tree

The decision tree is the branching logic that determines what the student sees and when. It makes the static version adaptive without AI.

### State Variables

| Variable | Type | Purpose |
|----------|------|---------|
| `phase` | enum | Current UI state (see below) |
| `currentNodeIndex` | number | Which node we're on |
| `currentGranuleIndex` | number | Which granule within the node |
| `beginnerFlag` | boolean | When set, skip quick checks — teach everything |
| `completedGranules` | Set | Granule IDs that have been verified |
| `results` | Array | Per-granule: { granuleId, passed, attempts } |
| `lastComponentType` | string | Last verify component shown (for variety) |

### Phases (UI States)

```
1. "intro"          — Welcome screen, list of nodes, Start button
2. "teach"          — Showing teaching content for current granule
3. "verify"         — Showing verification question
4. "feedback"       — Showing result (correct/incorrect/partial)
5. "node-complete"  — Node finished, celebration
6. "complete"       — All nodes done, full lesson summary
```

### Decision Tree Flow

```
START → "intro"
  └── User clicks "Begin Lesson"
      └── Set currentNodeIndex = 0, currentGranuleIndex = 0
      └── → "teach"

"teach"
  └── Show teaching content for current granule
  └── User clicks "Check my understanding"
      └── Select verify question (weighted, avoid repeating type)
      └── → "verify"

"verify"
  └── Show verification question
  └── User answers
      ├── CORRECT
      │   └── Mark granule complete
      │   └── → "feedback" (success)
      └── INCORRECT
          └── Record attempt
          └── → "feedback" (needs work)

"feedback"
  └── Show result + explanation
  └── User clicks "Continue"
      ├── More granules in this node?
      │   └── currentGranuleIndex++
      │   └── → "teach"
      ├── No more granules, more nodes?
      │   └── → "node-complete"
      └── No more anything
          └── → "complete"

"node-complete"
  └── Show celebration + node summary
  └── User clicks "Continue"
      ├── More nodes?
      │   └── currentNodeIndex++, currentGranuleIndex = 0
      │   └── → "teach"
      └── No more nodes
          └── → "complete"

"complete"
  └── Show full lesson summary
  └── Strengths (passed first try)
  └── Weaknesses (needed help)
  └── Option to revisit weak granules
  └── Option to go to test modes
```

### Beginner Flag Logic (V2)

In v2, the beginning of each node adds an orientation step:

```
NODE START:
  → Show orientation question ("What do you know about X?")
  → If they answer well:
    → beginnerFlag = false
    → For each granule: quick-check first, skip teach if they pass
  → If they answer poorly:
    → beginnerFlag = true  
    → Skip all quick checks, teach every granule
  → Clear beginnerFlag when student passes a quick check confidently
```

This is **not in v1**. V1 teaches every granule to every student (safe default — teaches first, never tests untaught material).

### Cut-Off Principle

From the methodology: "Don't trap users in endless loops." If a student fails verification:

1. Show the correct answer with explanation
2. Record it as "needs review"
3. **Move on** — do NOT loop them back
4. Trust that revision (flashcards, MCQs) and spaced repetition will catch gaps later

The summary at the end highlights what needs work, so the student knows what to focus on.

---

## Components

Components serve two purposes: **teaching aids** and **verification aids**. They are attached to granules as options, not requirements.

### Teaching Components

Used during the "teach" phase to enhance understanding beyond plain text.

| Component | When to use | Data needed |
|-----------|-------------|-------------|
| `comparison` | Comparing two things (light vs electron) | `{ items: [{label, points}] }` |
| `table` | Structured data (specs, properties) | `{ headers: [], rows: [[]] }` |
| `image` | Visual aids, diagrams | `{ src, alt, caption }` |
| `mnemonic` | Memory aid for lists | `{ text }` |
| `callout` | Emphasise a key fact/number | `{ text, type: "key"/"warning"/"tip" }` |
| `math-display` | Formulas, equations | `{ formula, label }` |

Components are optional. A granule with no teaching components just shows text. Components enhance; they don't replace.

### Verification Components

Used during the "verify" phase to check understanding.

| Component | Complexity | Best for | Client-checkable? |
|-----------|-----------|----------|-------------------|
| `fill-blank` | Low | Recall facts, key terms | ✅ Yes (string matching) |
| `true-false` | Low | Binary distinctions | ✅ Yes |
| `mcq` | Medium | Application, distinguishing | ✅ Yes |
| `match-pairs` | Medium | Connecting related items | ✅ Yes |
| `order-sequence` | Medium | Process/timeline ordering | ✅ Yes |
| `explain-own-words` | High | Deep understanding | ❌ Needs AI |
| `solve-problem` | High | Calculation, application | Partial (if numeric) |
| `diagram-label` | High | Visual knowledge | ❌ Needs UI work |

**V1 implements:** `fill-blank`, `mcq`, `true-false` — all client-checkable, no AI needed.

### Component Selection Algorithm

```
1. Get all verify options for this granule
2. Filter out the type matching lastComponentType (variety)
   - If all options are the same type, skip this filter
3. From remaining, weight by `weight` field (default 1)
4. Random weighted selection
5. Update lastComponentType
```

### Fatigue Management

The decision tree tracks component usage across the lesson:

```
componentHistory: ["fill-blank", "mcq", "fill-blank", "mcq", ...]
```

Rule: If the last 2 verifications used the same type, force a different type for the next one (if alternatives exist). This prevents monotony.

---

## AI vs Static Version

### Static Version (Free, No API)

- All teaching content is pre-written in the data
- All verification is client-side (fill-blank, MCQ, true-false)
- Decision tree drives adaptivity — no AI needed
- Deterministic: same student performance = same path
- Content variety comes from multiple verify options per granule

### AI Version (Uses API)

- Same granule structure as backbone — AI can't drift
- AI handles the teaching conversationally (rephrasing, responding to confusion)
- AI can do explain-own-words verification (natural language understanding)
- Decision tree still governs high-level flow
- AI fills the gaps between branches with adaptive conversation

### Shared Foundation

Both versions use the **exact same data structure**. The teach data file works for both. The difference is:

- Static reads `teach.content` and displays it
- AI reads `teach.content` as context/reference and generates its own teaching based on it
- Static uses pre-written verify questions
- AI can generate verification dynamically but still anchored to granule objectives

---

## Multi-Pass Content Creation

When building teach data for a new week, the recommended workflow is:

### Pass 1: Structure
Build the node/granule skeleton from source material. Just objectives, no content yet.

### Pass 2: Teaching Content
Write the `teach.content` for each granule. Keep it concise (2-4 sentences typically). Highlight the key fact/concept the student needs to take away.

### Pass 3: Verification Questions
Write 1-2 verify options per granule. Mix types for variety. Write explanations for incorrect answers.

### Pass 4: Teaching Components (Optional)
Add comparison tables, callouts, images where they genuinely help. Don't force them.

### Pass 5: Review
Check: Is every granule teachable? Is every granule verifiable? Does the flow make sense node to node? Is the total lesson length reasonable (aim for 10-20 minutes)?

---

## YAML Sketch (Conceptual — Actual Implementation Uses JS)

For reference, here's what a granule looks like conceptually:

```yaml
- id: "2.3"
  objective: "Can define resolution/resolving power"
  teach:
    content: >
      Resolution (also called resolving power) is the ability to
      distinguish between two separate points. If two objects are
      closer together than the microscope's resolution allows,
      they blur into one. Higher resolution = more detail.
    components:
      - type: callout
        data:
          text: "Resolution = ability to distinguish two separate points"
          type: key
  verify:
    - type: fill-blank
      question: "Resolution is the ability to distinguish between two ___ points."
      answer: "separate"
      accept: ["separate", "distinct", "different"]
      explanation: "Resolution means being able to tell two separate points apart."
      level: micro
      weight: 1
    - type: mcq
      question: "What is resolving power?"
      options:
        - "Maximum magnification"
        - "Image brightness"
        - "Ability to distinguish two separate points"
        - "Focusing speed"
      correct: 2
      explanation: "Resolving power is about distinguishing detail, not magnification."
      level: micro
      weight: 1
```

---

## Integration With Existing App

### Data
- Teach data lives inside each week object in `data/weeks.js` as a `teach` property
- Sits alongside `mcqs`, `flashcards`, `shortAnswers`
- Weeks without `teach` data simply don't show the Learn tab

### Component
- `components/Teach.jsx` — the teaching mode component
- Receives `teach` data as a prop (same pattern as MCQ, Flashcards, ShortAnswer)
- Self-contained state machine — all logic internal

### Tab
- Added to the tabs array in `app/week/[id]/page.jsx`
- Shows as "Learn" with 📖 emoji
- Only appears if `week.teach` exists

### No API Required
- V1 is fully static — no API calls
- Uses string matching for fill-blank, index comparison for MCQ/true-false
- Zero cost to run

---

## Summary

```
NODE/GRANULE STRUCTURE (single source of truth)
    ↓
TEACH DATA (content + verify per granule)
    ↓
DECISION TREE (branching logic based on student performance)
    ↓
COMPONENTS (teaching aids + verification aids, selected for variety)
    ↓
TWO OUTPUTS:
  → Static version (free, decision tree driven)
  → AI version (API, conversational, granule-anchored)
```

**Build the skeleton first. Derive everything from it. If it's not in the skeleton, it doesn't exist.**

---

*This document is the blueprint for the teach mode. Read alongside teaching-methodology.md and node-granule-source-of-truth.md.*
