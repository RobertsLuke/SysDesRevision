# Content Creation Methodology

**Version:** 1.0
**Date:** 4 February 2026
**Status:** Authoritative Document
**Purpose:** Reproducible guide for creating all app content from source material. A fresh AI or person should be able to follow this and produce content that works with the teach mode, question modes, and scoring system.

**Supersedes:** The content creation sections of `INSTRUCTIONS.md` (which remains valid for question-only tasks) and the multi-pass section of `teaching-architecture.md`.

**Read alongside:** `teaching-methodology.md`, `node-granule-source-of-truth.md`, `teaching-architecture.md`.

---

## The One Rule

**Build the skeleton first. Derive everything from it. If it's not in the skeleton, it doesn't exist.**

The node/granule structure is the single source of truth. The lesson teaches these granules. The questions test these granules. Nothing is taught that isn't a granule. Nothing is tested that isn't a granule. Teaching and testing cannot drift apart because they share one backbone.

---

## The Pipeline

```
SOURCE MATERIAL (slides, specs, textbooks)
    ↓
PASS 1: DECOMPOSE — nodes and granules
    ↓
PASS 2: GROUP — granule groups within nodes
    ↓
PASS 3: TEACH — content, components, hooks per granule group
    ↓
PASS 4: VERIFY — verification options per granule (micro + macro)
    ↓
PASS 5: BRIDGE — node-to-node connections
    ↓
PASS 6: QUESTIONS — flashcards, MCQs, short answers from granules
    ↓
PASS 7: REVIEW — completeness check, flow check, time estimate
```

Each pass is described below with rules, worked examples, and anti-patterns.

---

## Pass 1: Decompose — Nodes and Granules

### What You're Doing

Breaking the source material into a skeleton of learning objectives (nodes) and atomic knowledge units (granules).

### Nodes

A node is a learning objective visible to the student. It answers: "What should the student be able to DO after this section?"

Rules for nodes:
- Start with a verb: "Understand...", "Calculate...", "Compare...", "Explain..."
- One coherent topic per node — don't cram unrelated things together
- 3–6 nodes per lesson is typical. More than 7 suggests splitting into two lessons.
- Order matters: earlier nodes should not depend on later ones

### Granules

A granule is the atomic unit of knowledge within a node. It's the smallest thing you'd teach and verify independently.

Rules for granules:
- Start with "Can...": "Can state...", "Can explain...", "Can calculate...", "Can distinguish..."
- One fact, concept, or skill per granule
- 3–6 granules per node is typical. More than 8 suggests the node should split.
- If it's worth knowing, it's a granule. If it's not worth being a granule, don't teach or test it.
- Include ALL types: conceptual understanding, recall details, application skills

### Granule Types

| Type | Verb pattern | Example |
|------|-------------|---------|
| **Recall** | Can state, can name, can list | "Can state when electron microscopes were invented (1930s)" |
| **Conceptual** | Can explain, can describe | "Can explain what light microscopes use to form an image" |
| **Distinction** | Can distinguish, can compare | "Can distinguish TEM from SEM" |
| **Application** | Can calculate, can apply, can solve | "Can calculate magnification using the formula" |
| **Evaluation** | Can evaluate, can justify | "Can evaluate when to use light vs electron microscope" |

### Recall Is Valid

Not everything needs discovery-based teaching. Some granules are inherently recall:
- Named definitions attributed to specific authors
- Specific example lists from source material
- Dates, figures, values
- Where items sit in a model or roadmap

These are legitimate granules. They get taught (even if briefly and directly) and tested. The rule: the student must encounter every granule during the lesson before they see it in a question.

### Worked Example

Source: Biology microscopy slides covering light microscopes, electron microscopes, magnification, resolution, calculations.

```
NODE 1: Understand how microscopy techniques developed over time
  ├── 1.1  Can state when light microscopes were developed (mid-17th century)
  ├── 1.2  Can state when electron microscopes were invented (1930s)
  ├── 1.3  Can explain what light microscopes use to form an image (beam of light)
  ├── 1.4  Can explain what electron microscopes use to form an image (beam of electrons)
  └── 1.5  Can distinguish between TEM and SEM (2D high mag vs 3D lower mag)

NODE 2: Understand differences in magnification and resolution
  ├── 2.1  Can state max magnification of a light microscope (~×2000)
  ├── 2.2  Can state max magnification of an electron microscope (~×2,000,000)
  ├── 2.3  Can define resolution/resolving power
  ├── 2.4  Can state resolving power of light microscope (~200 nm)
  ├── 2.5  Can state resolving power of electron microscopes (SEM ~10 nm, TEM ~0.2 nm)
  └── 2.6  Can compare practical pros/cons (light: cheap, portable, live | electron: expensive, large, no live)

NODE 3: Calculate magnification, real size, and image size
  ├── 3.1  Can recall unit conversions (mm → μm → nm)
  ├── 3.2  Can calculate total magnification (eyepiece × objective)
  ├── 3.3  Can state the magnification formula (M = image size ÷ real size)
  ├── 3.4  Can rearrange to find real size
  ├── 3.5  Can rearrange to find image size
  └── 3.6  Can apply the formula with unit conversions
```

### Anti-Patterns

| Don't | Why | Do Instead |
|-------|-----|------------|
| Make a granule that covers 3 facts | Can't verify atomically | Split into 3 granules |
| Skip "boring" recall details | Student gets blindsided in questions | Include them — recall is valid |
| Create a granule with no verb | Vague, untestable | Start with "Can..." |
| Put 12 granules in one node | Node is too big | Split the node |
| Invent content not in source | Student tested on things not in their course | Only derive from source |

---

## Pass 2: Group — Granule Groups Within Nodes

### What You're Doing

Identifying which granules pair naturally for teaching. The decision tree operates on groups, not individual granules. This reduces transitions, enables natural comparisons, and makes components work better.

### Grouping Rules

1. **Pair by comparison**: If two granules are natural contrasts, group them (light vs electron, TEM vs SEM)
2. **Pair by dependency**: If granule B only makes sense after granule A, group them
3. **Solo for standalone**: If a granule is self-contained and doesn't pair naturally, leave it alone
4. **2–3 granules per group maximum**: More than 3 loses the benefit
5. **Groups don't cross nodes**: Every group lives inside one node

### Worked Example

```
NODE 1:
  G1: 1.1 + 1.2 — Timeline (when light, when electron)        ← comparison pair
  G2: 1.3 + 1.4 — Mechanism (what light uses, what electron uses)  ← comparison pair
  G3: 1.5 alone — TEM vs SEM                                    ← standalone (internal comparison)

NODE 2:
  G4: 2.1 + 2.2 — Magnification figures (light vs electron)     ← comparison pair
  G5: 2.3 + 2.4 + 2.5 — Resolution (definition + both values)  ← concept + data cluster
  G6: 2.6 alone — Practical pros/cons                           ← standalone (evaluation)

NODE 3:
  G7: 3.1 alone — Unit conversions                              ← prerequisite, standalone
  G8: 3.2 alone — Total magnification (eyepiece × objective)    ← standalone skill
  G9: 3.3 + 3.4 + 3.5 — The formula triangle                   ← one formula, three arrangements
  G10: 3.6 alone — Applied problems                             ← standalone application
```

### Why Grouping Matters

- **Fewer transitions**: Smoother lesson flow, less "now let's move to..."
- **Natural comparisons**: Side-by-side images, comparison tables become natural
- **Combined verification**: "When were light microscopes developed, and when did electron microscopes come along?" checks both in one question
- **Better components**: Two things to compare = comparison component. Two images to contrast = side-by-side images.

---

## Pass 3: Teach — Content, Components, Hooks

### What You're Doing

Writing the teaching content for each granule group. This is what the student sees during the lesson.

### The Principle: Components First, Text Second

The component is the teaching tool. The text explains the component. The component isn't illustrating the text — the text is explaining the component.

**Before (bad — text first):**
```
"So there are two main types of microscope — light microscopes 
and electron microscopes. They were invented at different times..."
```
Wall of text. No visual anchor. Student can't picture what they're learning.

**After (good — component first):**
```
[IMAGE: side-by-side photos of light and electron microscope]

"These are the two main types. Left: light microscope. Right: electron 
microscope. Notice the size difference. Light: mid-1600s. Electron: 1930s."
```
Images do the heavy lifting. Text explains them. Concise.

### Teaching Components

| Component | When To Use | Data Shape |
|-----------|------------|------------|
| `image` | Visual aids, photos, diagrams | `{ src, alt, caption }` |
| `comparison` | Side-by-side two things | `{ items: [{ label, points }] }` |
| `table` | Structured data, specs | `{ headers: [], rows: [[]] }` |
| `callout` | Emphasise key fact/number | `{ text, type: "key"/"warning"/"tip" }` |
| `mnemonic` | Memory aid for lists/sequences | `{ text }` |
| `math-display` | Formulas, equations | `{ formula, label }` |

Components are optional but weighted to encourage use. A granule with no components is valid but weaker. When building content, actively look for opportunities.

### Component Selection Guide

| Granule Group Type | Best Component(s) |
|-------------------|-------------------|
| Two things being compared | `comparison` + `image` ×2 |
| Key number or date | `callout` |
| Structured data (specs, values) | `table` |
| Formula or equation | `math-display` |
| List to memorise | `mnemonic` |
| Physical object or structure | `image` |
| Process or sequence | numbered `callout` or `table` |

### Hooks

A hook is a memory anchor that makes verification easier. When a good hook exists, students can handle harder verification (open recall instead of MCQ).

**Required for:**
- Any list of 3+ items
- Multi-step processes
- Abstract concepts
- Paired facts that might be confused

**Types:**
- "Clue is in the name" (light microscope → uses light)
- Analogies ("transmission = through, scanning = across surface")
- Visual associations (size difference between microscopes)
- Mnemonics (acronyms, stories)
- Number anchors ("300-year gap")

**Protocol:**
1. Identify hook-worthy content in each granule group
2. Keep it tight — one image, one phrase, one association
3. Test it — does saying the hook trigger recall of the fact?
4. Record the hook in the teach data (the AI version uses it; the static version displays it)

### Hook Quality → Verify Difficulty

This is a key discovery: hook quality directly determines what verification level you can use.

| Hook Quality | Verification Level |
|-------------|-------------------|
| Strong hook ("clue is in the name") | Open recall achievable |
| Moderate hook (analogy, visual) | Fill-blank works well |
| Weak/no hook (pure date/figure) | MCQ or true-false safer |

### Writing Teaching Text

Rules:
1. **Concise** — 2–4 sentences per granule group. Don't waffle.
2. **Explain the component** — "These are the two main types. On the left..."
3. **Include the hook** — Weave it in naturally, don't bolt it on
4. **Highlight key terms** — Bold the fact the student needs to retain
5. **No jargon without explanation** — If you use a technical term, define it immediately
6. **Conversational tone** — Like a tutor talking, not a textbook paragraph

### Worked Example: Granule Group G1 (1.1 + 1.2 — Timeline)

```javascript
{
  granuleGroup: "G1",
  granules: ["1.1", "1.2"],
  label: "Timeline",
  teach: {
    content: "These are the two main types of microscope. On the left, a light microscope — you might have used one at school. On the right, an electron microscope — a completely different beast. Notice the size difference. Light microscopes have been around since the mid-1600s. Electron microscopes came much later, in the 1930s. That's roughly a 300-year gap.",
    components: [
      { type: "image", data: { src: "light-microscope.jpg", alt: "Light microscope", caption: "Light microscope" } },
      { type: "image", data: { src: "electron-microscope.jpg", alt: "Electron microscope", caption: "Electron microscope" } }
    ],
    hook: "300-year gap — light came first by centuries"
  }
}
```

### Worked Example: Granule Group G2 (1.3 + 1.4 — Mechanism)

```javascript
{
  granuleGroup: "G2",
  granules: ["1.3", "1.4"],
  label: "Mechanism",
  teach: {
    content: "So what actually makes them different? The clue is in the name. A light microscope uses a beam of light to form an image. An electron microscope uses a beam of electrons. That's it — the name tells you everything.",
    components: [
      { type: "callout", data: { text: "Light microscope → beam of light\nElectron microscope → beam of electrons\n\nThe clue is in the name!", type: "key" } }
    ],
    hook: "The clue is in the name"
  }
}
```

---

## Pass 4: Verify — Verification Options Per Granule

### What You're Doing

Writing verification questions at multiple difficulty levels for each granule. These are used for micro-verification during teaching and for the macro-verification at node end.

### The Verification Ladder

Hardest to easiest:

```
OPEN RECALL       — "Tell me what you know about X"
FILL-BLANK        — "Light microscopes were developed in the mid-___"
MCQ               — "When were light microscopes developed? A) 1200s B) 1600s C) 1930s D) 2000s"
TRUE-FALSE        — "Light microscopes were invented in the 1930s. True or false?"
BINARY CHOICE     — "Which came first — light or electron microscopes?"
```

### Verification Level Selection

The decision tree selects verification level based on:

1. **Hook quality**: Strong hook → try open recall first. No hook → fill-blank or MCQ.
2. **Student performance**: Pass → stay at level or go harder. Fail → scaffold DOWN one level.
3. **Attempt count**: After fail, drop one level. After second fail → cut-off (give answer, record, move on).

### Writing Verification Options

Each granule should have **at least 2** verification options at different levels. This gives the system (or AI tutor) flexibility to scaffold up or down.

Rules:
1. **Match to granule type**: Recall granules → fill-blank/MCQ. Conceptual → open recall/explain. Application → solve-problem.
2. **Explanations teach**: Every wrong-answer path needs an explanation that helps, not just "incorrect."
3. **Accept variants**: For fill-blank, list all acceptable string matches.
4. **Mark micro vs macro**: Micro = quick check during teaching. Macro = comprehensive check at node end.
5. **Don't repeat the teach text**: Verification should feel like a fresh challenge, not parroting back a sentence.

### Verification Components Reference

| Component | Complexity | Client-checkable? | Best for |
|-----------|-----------|-------------------|----------|
| `fill-blank` | Low | ✅ string match | Recall facts, key terms |
| `true-false` | Low | ✅ boolean | Binary distinctions |
| `mcq` | Medium | ✅ index match | Application, distinguishing |
| `match-pairs` | Medium | ✅ set comparison | Connecting related items across granules |
| `order-sequence` | Medium | ✅ array comparison | Processes, timelines |
| `explain-own-words` | High | ❌ needs AI | Deep understanding |
| `solve-problem` | High | Partial | Calculations |

**V1 static implements:** `fill-blank`, `mcq`, `true-false`. All client-checkable, no AI needed.

### Worked Example: Granule 1.2 Verification Options

```javascript
verify: [
  {
    type: "fill-blank",
    question: "Electron microscopes were invented in the ___.",
    answer: "1930s",
    accept: ["1930s", "1930's", "nineteen thirties"],
    explanation: "Electron microscopes were invented in the 1930s — much later than light microscopes (mid-1600s).",
    level: "micro",
    weight: 1
  },
  {
    type: "mcq",
    question: "When were electron microscopes invented?",
    options: ["Mid-17th century", "Early 1800s", "1930s", "1970s"],
    correct: 2,
    explanation: "Electron microscopes were invented in the 1930s. The mid-17th century is when light microscopes were developed.",
    level: "micro",
    weight: 1
  },
  {
    type: "true-false",
    question: "Electron microscopes were invented before light microscopes.",
    answer: false,
    explanation: "Light microscopes came first (mid-1600s). Electron microscopes were invented in the 1930s — about 300 years later.",
    level: "micro",
    weight: 0.5
  }
]
```

### Macro-Verification Design

Macro-verifications sit at node level, not granule level. They test connections ACROSS granules within the node. They are NOT repeats of micro-verifications.

**Stage 1: Component-based** (structured, achievable)
- `match-pairs`: Connect facts to categories across granules
- `order-sequence`: Put events/concepts in order
- Purpose: Proves the student can connect what they just learned

**Stage 2: Written response** (deep processing)
- `explain-own-words`: One focused prompt, 1–2 sentences expected
- Purpose: Forces deeper processing. This is the Confidence Loop moment.
- Keep it SHORT and targeted. Don't ask for essays.

Macro stages are adaptive: beginners need both stages. Knowledgeable students can skip stage 1 and go straight to written.

### Worked Example: Node 1 Macro-Verify

```javascript
macroVerify: {
  stage1: {
    type: "match-pairs",
    question: "Connect each fact to the correct microscope type:",
    pairs: [
      { item: "Mid-1600s", match: "Light microscope" },
      { item: "1930s", match: "Electron microscope" },
      { item: "Beam of light", match: "Light microscope" },
      { item: "Beam of electrons", match: "Electron microscope" },
      { item: "3D surface images", match: "SEM" },
      { item: "2D high-mag images", match: "TEM" }
    ]
  },
  stage2: {
    type: "explain-own-words",
    question: "In a couple of sentences — what's the difference between a light microscope and an electron microscope?",
    keyPoints: ["different time periods", "different beams", "different capabilities"]
  }
}
```

---

## Pass 5: Bridge — Node-to-Node Connections

### What You're Doing

Writing the narrative transitions between nodes. These make the lesson feel like a story, not a checklist.

### Bridge Rules

1. **1–2 sentences maximum** — Don't turn the bridge into a mini-lesson
2. **Connect backward**: Reference what they just learned
3. **Connect forward**: Explain why the next topic matters
4. **Natural curiosity**: Frame it as "the natural next question"
5. **Beginner flag resets**: Each node starts fresh

### Worked Examples

```
Node 1 → Node 2:
"You know the two types of microscope now — light and electron. But why bother with the 
electron one? What can it actually do that light can't? Let's look at the numbers."

Node 2 → Node 3:
"So electron microscopes can magnify 2 million times. But how do scientists actually 
work with those numbers? There's a formula that links magnification, image size, and 
real size — and you'll use it constantly."
```

### Bridge Data Shape

```javascript
{
  from: 1,
  to: 2,
  text: "You know the two types now. But why bother with electron microscopes? What can they do that light can't? Let's look at the numbers."
}
```

---

## Pass 6: Questions — Flashcards, MCQs, Short Answers

### What You're Doing

Writing the test-mode content. Every question must trace back to a granule. Nothing is tested that wasn't in the skeleton.

### Order of Writing

Write in this order:
1. **Flashcards first** — map most directly to granules, help you internalise the material
2. **MCQs second** — test nuance, application, and common misconceptions
3. **Short answers last** — require synthesis, most complex to write

### Flashcards

One concept per card. Atomic.

| Field | Rule |
|-------|------|
| `front` | Clear, specific question. One concept. |
| `back` | Concise, complete answer. Use `\n` for line breaks. |

Aim: **Every granule should have at least one flashcard.** Some granules generate 2 if there's a natural front/back for both recall directions.

Count: 8–16 per lesson (scales with granule count).

**Good fronts:** "What is...?", "When was...?", "Name three...", "How does...?", "What is the difference between...?"

**Anti-pattern:** "Explain everything about microscopes" — too broad. Split into multiple cards.

### MCQs

Test application, not just recall. Plausible distractors are critical.

| Field | Rule |
|-------|------|
| `question` | Clear, unambiguous. Test one thing. |
| `options` | Exactly 4. All plausible. No jokes, no "all/none of the above." |
| `correct` | 0-indexed position of correct answer. |
| `explanation` | Why correct is right AND why the most tempting wrong answer is wrong. |

Aim: Cover every node. Vary difficulty. Include 1–2 scenario-based application questions.

Count: 8–13 per lesson.

**Distractor types (use all of these):**
- Concept from same topic, wrong context
- True statement that doesn't answer THIS question
- Common misconception
- Related technical term, wrong application
- Reversed or swapped values

**Vary correct answer position.** Don't always put it at index 1.

### Short Answers

Exam-style constructed responses. The marking guide is the most important part.

| Field | Rule |
|-------|------|
| `question` | Exam-style: "Explain...", "Compare...", "Evaluate...", "Calculate..." |
| `marks` | Typically 2–6. Roughly equals number of key points (±1). |
| `markingGuide` | Array of distinct, assessable statements. No overlap. Full sentences. |
| `hint` | Nudge toward the right area. Everyday language. Never contains the answer. |

Aim: Mix of difficulty. 1–2 straightforward recall, 2–3 explanation/application, 0–1 evaluation/comparison.

Count: 4–6 per lesson.

**Marking guide quality checklist:**
- Each point is distinct (no overlap)
- Each point is specific enough for AI to identify in a student's answer
- Points collectively represent a complete answer
- Written as full statements, not keywords

### Granule Coverage Check

After writing all questions, verify coverage:

```
For each granule in the skeleton:
  ✓ At least 1 flashcard tests this granule
  ✓ At least 1 MCQ or short answer tests this granule
  ✓ No question tests something NOT in the skeleton
```

If a granule has zero question coverage, write a question for it. If a question tests something not in the skeleton, either add a granule or delete the question.

---

## Pass 7: Review — Completeness and Quality

### Completeness Checklist

```
STRUCTURE
  [ ] Every granule starts with "Can..."
  [ ] 3–6 granules per node
  [ ] 3–6 nodes per lesson
  [ ] Granule groups identified (2–3 granules max per group)
  [ ] Bridges written for every node transition

TEACH DATA
  [ ] Every granule group has teaching content
  [ ] Content is concise (2–4 sentences per group)
  [ ] Components used where they genuinely help
  [ ] Hooks identified for hook-worthy content
  [ ] Teaching text explains the components, not the other way round

VERIFICATION
  [ ] Every granule has ≥2 verification options at different levels
  [ ] Macro-verify written for every node (stage 1 + stage 2)
  [ ] Explanations teach, not just confirm
  [ ] Fill-blank accept lists include reasonable variants

QUESTIONS
  [ ] Every granule covered by ≥1 flashcard
  [ ] Every granule covered by ≥1 MCQ or short answer
  [ ] MCQ distractors are plausible
  [ ] MCQ correct positions varied across the set
  [ ] Short answer marking guides are distinct, specific, full sentences
  [ ] Hints nudge, don't reveal
  [ ] No question tests untaught material

FORMAT
  [ ] All IDs sequential starting at 1
  [ ] MCQ correct values are 0-indexed
  [ ] Flashcard backs use \n for line breaks
  [ ] No content invented beyond source material
```

### Flow Check

Read through the teach content in order as if you were a student:
1. Does each granule group feel like a natural next step?
2. Do the bridges connect the nodes logically?
3. Is there ever a moment where a student would think "where did that come from?"
4. Could a beginner follow this from start to finish?
5. Could a knowledgeable student quick-check through without being bored?

### Time Estimate

Rough guidelines per node:
- Beginner path (all taught): ~8–12 minutes
- Knowledgeable path (all quick-checked): ~2–3 minutes
- Mixed: ~5–7 minutes

Total lesson:
- 4 nodes × beginner: ~35–50 minutes (too long — consider splitting)
- 4 nodes × mixed: ~20–28 minutes (good)
- 4 nodes × knowledgeable: ~8–12 minutes (fast but valid)

If the beginner path exceeds 40 minutes for the whole lesson, the lesson has too many nodes or granules. Split it.

---

## The Data Format

### Full Week Object Shape

```javascript
{
  id: "B1.1",                    // Week/lesson identifier
  title: "The World of the Microscope",
  subtitle: "Microscopy, Magnification & Resolution",
  emoji: "🔬",

  // Node/granule skeleton (source of truth)
  teach: {
    nodes: [
      {
        id: 1,
        title: "Understand how microscopy techniques developed over time",
        granuleGroups: [
          {
            id: "G1",
            granules: ["1.1", "1.2"],
            label: "Timeline",
            teach: {
              content: "...",
              components: [...],
              hook: "300-year gap"
            }
          },
          // ... more groups
        ],
        granules: [
          {
            id: "1.1",
            objective: "Can state when light microscopes were developed",
            verify: [...]
          },
          // ... more granules
        ],
        macroVerify: { stage1: {...}, stage2: {...} }
      },
      // ... more nodes
    ],
    bridges: [
      { from: 1, to: 2, text: "..." },
      // ... more bridges
    ]
  },

  // Question data (derived from same granules)
  mcqs: [...],
  flashcards: [...],
  shortAnswers: [...]
}
```

### Metrics Integration

Every granule interaction during teaching records:

| Event | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Did they verify the granule? |
| `firstAttempt` | boolean | First try? |
| `attempts` | number | Total verify attempts |
| `scaffoldedDown` | boolean | Stepped down the ladder? |
| `cutOff` | boolean | Hit 2-attempt limit? |
| `source` | string | `"taught"` or `"quick-checked"` |

These feed the scoring algorithm (see `dev-notes-teach-rebuild.md` for the full algorithm) which drives spaced repetition, custom practice decks, heat maps, and readiness thresholds.

Content quality directly affects metric accuracy: vague verification questions produce unreliable scores. Specific, well-levelled verification produces honest data.

---

## Quality Principles

### 1. Source Fidelity

Every fact, term, and figure must be traceable to the source material. Don't invent. Don't import external knowledge. The student is being tested on their specific course, not the broader internet.

If the source mentions something briefly without depth, it's fine as a flashcard. Don't build a 5-mark short answer around it.

### 2. Component Intentionality

Every component must earn its place. A comparison table for two microscope types: yes. A decorative image that doesn't teach anything: no. Ask: "If I removed this component, would the teaching be worse?" If no, remove it.

### 3. Hook Authenticity

A forced hook is worse than no hook. "The clue is in the name" works because it's genuinely true. Don't invent tortured mnemonics for things that are better taught directly.

### 4. Verification Honesty

Verification must test what was taught, not adjacent knowledge. If you taught "electron microscopes were invented in the 1930s", don't verify with "Who invented the first electron microscope?" unless you taught that too.

### 5. Conciseness

Students fatigue. Teaching text: 2–4 sentences per granule group. Verification: one question per micro-check. Written responses: 1–2 sentences expected. The system moves fast. Don't slow it down with waffle.

### 6. Tone

Warm, encouraging, tutor-like. Never condescending. Adapt to student level: patient with beginners, brisk with knowledgeable students. Never say "wrong" — say "not quite" or acknowledge what's correct first.

---

## Quick Reference: The Full Flow

```
SOURCE MATERIAL
  ↓
NODES (learning objectives)
  ↓
GRANULES (atomic knowledge units within nodes)
  ↓
GRANULE GROUPS (pairs/clusters for teaching)
  ↓
TEACH CONTENT (components + text + hooks per group)
  ↓
VERIFICATION (2+ options per granule, micro + macro levels)
  ↓
BRIDGES (1–2 sentences connecting nodes)
  ↓
FLASHCARDS (1+ per granule — recall)
  ↓
MCQs (application + nuance — plausible distractors)
  ↓
SHORT ANSWERS (synthesis + evaluation — marking guides)
  ↓
REVIEW (completeness check, flow check, time estimate)
  ↓
DONE — One data file, teaches and tests every granule.
```

---

*This document is the authoritative guide for content creation. It integrates and supersedes the content creation sections of INSTRUCTIONS.md, the multi-pass section of teaching-architecture.md, and the bridge document. Read alongside teaching-methodology.md for the pedagogical theory.*
