# AI Instructions — Distributed Systems Revision App

> **Purpose of this document:** Give any AI assistant everything it needs to add new weekly content to this application. The user should only need to provide source material (PDFs, lecture notes, slides) and say which week it's for. The AI handles the rest.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Philosophy & Methodology](#2-philosophy--methodology)
3. [Architecture & File Structure](#3-architecture--file-structure)
4. [The Data File — `data/weeks.js`](#4-the-data-file--dataweeksjs)
5. [Content Types — Detailed Specifications](#5-content-types--detailed-specifications)
6. [Step-by-Step: Adding a New Week](#6-step-by-step-adding-a-new-week)
7. [Quality Standards & Common Mistakes](#7-quality-standards--common-mistakes)
8. [Technical Notes](#8-technical-notes)
9. [Example Workflow](#9-example-workflow)

---

## 1. Project Overview

This is a **Next.js 14** revision app for a university **Distributed Systems** module (Year 3). It helps students actively test and reinforce their understanding of weekly lecture material through three modes:

| Mode | Purpose | Powered by |
|------|---------|------------|
| **MCQs** | Test recall & understanding with immediate feedback | Client-side logic |
| **Flashcards** | Review key concepts via active recall | Client-side logic |
| **Short Answer** | Practise exam-style written responses, marked by AI | OpenAI GPT-5.1 API |

The app has a sidebar showing all 12 weeks. Weeks without content show as locked ("Coming Soon"). The user navigates between weeks and between the three modes via tabs.

### Design Ethos

- **Modern, minimal, stress-free.** This is a revision tool — it should feel calm, not like an exam.
- **Warm colour palette:** cream backgrounds, navy text, terra (burnt orange) accents, sage greens for success, steel blues for info.
- **Encouraging tone.** Explanations and feedback should feel like a helpful tutor, not a stern examiner.

---

## 2. Philosophy & Methodology

This section is critical. It explains **why** we structure content the way we do. Follow these principles — don't just mechanically fill templates.

### 2.1 The Three Modes Work Together

They form a **learning progression:**

1. **Flashcards** = the foundation. They introduce and reinforce core definitions, concepts, and relationships. A student should be able to review these *before* attempting anything else.
2. **MCQs** = the middle layer. They test whether the student can *apply* their knowledge — distinguishing correct from plausible-but-wrong answers, understanding nuance, and catching common misconceptions.
3. **Short Answer** = the top layer. They mirror real exam conditions. The student must *construct* an answer from memory, and the AI evaluates whether they hit the key points.

**This means:** Flashcards should cover the raw knowledge. MCQs should test that knowledge in trickier ways. Short answers should require the student to synthesise and explain.

### 2.2 Content Must Come From the Source Material

Every question, flashcard, and answer point must be **traceable back to the provided lecture material.** Do not invent topics or pull in external knowledge beyond what the source covers. The student is being tested on *their specific lectures*, not on the broader internet.

If the source material references something briefly without depth, it's fine to create a flashcard for it, but don't build a 4-mark short answer around it.

### 2.3 Distractor Quality Matters (MCQs)

Bad MCQs have obviously wrong answers. Good MCQs have **plausible distractors** — options that a student who *almost* understands the concept might pick. Each wrong answer should represent a realistic misunderstanding:

- Confusing one concept with a related one
- Picking something that sounds technical but doesn't apply
- Choosing something true in general but not in this specific context

**Never** use joke answers, absurd options, or "all of the above" / "none of the above."

### 2.4 Explanations Should Teach, Not Just Confirm

Every MCQ has an `explanation` field. This should:
- Explain **why** the correct answer is right
- Briefly address **why** the most tempting wrong answer is wrong
- Connect back to the broader concept

Think of it as: "If a student got this wrong, what would help them understand?"

### 2.5 Flashcards Should Be Atomic

Each flashcard should test **one concept**. The front should be a clear, specific question. The back should be a concise, complete answer. Don't cram three different ideas into one card.

Exception: "Name three risks of X" style cards are fine when the source material explicitly groups them.

### 2.6 Short Answers Mirror Exam Questions

These should feel like real exam or coursework questions. They often start with:
- "Explain..."
- "Describe..."
- "Why might..."
- "To what extent..."
- "Compare..."

The **marking guide** is the most important part. It defines the specific points the AI will look for. Each point should be a clear, assessable statement that a student either covers or doesn't.

### 2.7 Hints Should Nudge, Not Give Away

Every short answer has a `hint`. This should:
- Point the student toward the right *area* of thinking
- Use analogies or real-world framing
- **Never** contain the actual answer or key terminology they need to produce

---

## 3. Architecture & File Structure

```
SYSTEMS/
├── app/
│   ├── api/mark/route.js      ← AI marking endpoint (DO NOT MODIFY)
│   ├── globals.css             ← Global styles (DO NOT MODIFY)
│   ├── layout.jsx              ← Root layout (DO NOT MODIFY)
│   ├── page.jsx                ← Redirects to /week/1 (DO NOT MODIFY)
│   └── week/[id]/page.jsx     ← Dynamic week page (DO NOT MODIFY)
├── components/
│   ├── Sidebar.jsx             ← Week navigation (DO NOT MODIFY)
│   ├── MCQ.jsx                 ← MCQ component (DO NOT MODIFY)
│   ├── Flashcards.jsx          ← Flashcard component (DO NOT MODIFY)
│   └── ShortAnswer.jsx         ← Short answer component (DO NOT MODIFY)
├── data/
│   └── weeks.js                ← ⭐ THE ONLY FILE YOU EDIT ⭐
├── ai-instructions/
│   └── INSTRUCTIONS.md         ← This file
├── W1/                         ← Source material for week 1
├── .env.local                  ← OpenAI API key
├── package.json
├── tailwind.config.js
└── next.config.mjs
```

**The only file that needs changing when adding new content is `data/weeks.js`.** Everything else is built to dynamically render whatever data is in that file.

---

## 4. The Data File — `data/weeks.js`

### Structure

```javascript
export const weeks = {
  1: { /* week 1 data */ },
  2: { /* week 2 data */ },
  // ... up to 12
};

export const moduleInfo = {
  name: "Distributed Systems",
  code: "Y3",
  totalWeeks: 12,
};
```

Each week key is a **number** (not a string). The sidebar renders weeks 1–12 and marks any without data as locked.

### Week Object Schema

```javascript
{
  id: Number,            // Must match the key (e.g., 2 for week 2)
  title: String,         // Short topic title, e.g., "Peer-to-Peer Networks"
  subtitle: String,      // Clarifying subtitle, e.g., "Availability, Security & Replication"
  emoji: String,         // Single emoji representing the topic, shown in sidebar

  mcqs: Array,           // Array of MCQ objects (see section 5.1)
  flashcards: Array,     // Array of flashcard objects (see section 5.2)
  shortAnswers: Array,   // Array of short answer objects (see section 5.3)
}
```

---

## 5. Content Types — Detailed Specifications

### 5.1 MCQs

```javascript
{
  id: Number,            // Sequential, starting at 1 per week
  question: String,      // The question text
  options: Array,        // Exactly 4 strings — the answer choices
  correct: Number,       // 0-indexed position of the correct answer in options[]
  explanation: String,   // Why the correct answer is right (see section 2.4)
}
```

**Rules:**
- Always exactly **4 options**
- `correct` is **0-indexed** (0 = first option, 1 = second, etc.)
- Aim for **8–12 MCQs per week** (scale with content density)
- Vary the position of the correct answer — don't always put it in slot 1
- Question text should be clear and unambiguous
- Avoid negative questions ("Which is NOT...") unless the source material makes it particularly relevant — and if you do, make "NOT" very obvious
- Explanation should be 1–3 sentences

**Distractor Guidelines (critical):**
- Each wrong option should be *plausible* to someone who half-knows the material
- Types of good distractors:
  - A concept from the same topic but different context
  - Something that's true generally but not the specific answer here
  - A common misconception about this topic
  - Something technically related but from a different layer/concern

### 5.2 Flashcards

```javascript
{
  id: Number,            // Sequential, starting at 1 per week
  front: String,         // The question/prompt side
  back: String,          // The answer side
}
```

**Rules:**
- Aim for **8–14 flashcards per week**
- `front` should be a clear question or prompt
- `back` should be a concise, complete answer
- Use `\n` for line breaks on the back (the component uses `whitespace-pre-line`)
- For lists on the back, use numbered format: `"1) First point\n2) Second point\n3) Third point"`
- Cover ALL key definitions, concepts, and relationships from the source material
- Include at least 1–2 "big picture" cards that test understanding of trade-offs or overarching themes
- The front should never require multi-paragraph answers — if it does, split into multiple cards

**Good flashcard fronts:**
- "What is [concept]?"
- "Name three [things]."
- "How does [mechanism] work?"
- "What is the difference between [A] and [B]?"
- "Why is [thing] important in [context]?"

### 5.3 Short Answers

```javascript
{
  id: Number,            // Sequential, starting at 1 per week
  question: String,      // Exam-style question
  marks: Number,         // Total marks available (typically 3–5)
  markingGuide: Array,   // Array of strings — the key points the AI looks for
  hint: String,          // A gentle nudge toward the answer (see section 2.7)
}
```

**Rules:**
- Aim for **4–6 short answer questions per week**
- `marks` should roughly equal the number of key points (give or take 1)
- Each string in `markingGuide` should be a **single assessable point** — something the student either addressed or didn't
- Marking guide points should be written as complete statements, e.g., "Data is copied/replicated across multiple different nodes in the network" — NOT just keywords like "replication"
- The AI marker uses these points to determine the score, so clarity is essential
- Include a mix of difficulty: 1–2 straightforward recall questions, 2–3 that require explanation or application, and optionally 1 that requires evaluation/comparison
- Questions should feel like they belong on a real exam paper
- The `hint` should be conversational and use everyday language or analogies

**Marking Guide Quality Checklist:**
- Each point is distinct (no overlap)
- Points are specific enough that the AI can identify them in a student's answer
- Points collectively represent a complete, high-quality answer
- The number of points roughly matches the marks (±1)

**Marks allocation guidance:**
- 3 marks = typically 3 points, a focused question
- 4 marks = typically 3–5 points, requires more depth or breadth
- 5 marks = typically 4–6 points, requires synthesis or evaluation

---

## 6. Step-by-Step: Adding a New Week

### What you'll receive from the user:
- Source material (PDF, notes, slides) — placed in a folder like `W2/`, `W3/`, etc.
- The week number (e.g., "this is week 3")

### What you do:

#### Step 1: Read and Understand the Source Material

Read the provided source material thoroughly. Identify:
- **Core concepts** — definitions, mechanisms, principles
- **Key relationships** — how concepts connect to each other
- **Trade-offs and comparisons** — advantages vs disadvantages, X vs Y
- **Specific technical details** — algorithms, protocols, data structures
- **"Why" questions** — motivations, implications, consequences
- **Exam-likely topics** — anything that lends itself to "explain" or "describe" questions

#### Step 2: Plan the Content

Before writing anything, mentally plan:
- Which concepts become flashcards (all core concepts should)
- Which areas have enough nuance for MCQs
- Which topics are meaty enough for short-answer questions
- What common misconceptions might exist (for MCQ distractors)

#### Step 3: Write the Flashcards First

Start with flashcards because they map most directly to the source material. Every key concept, definition, and relationship should have a card. This also helps you internalise the material before writing the trickier MCQs and short answers.

#### Step 4: Write the MCQs

Now that you know the material well, write MCQs that test it in nuanced ways. Remember:
- Vary correct answer positions (don't always use index 1)
- Make distractors plausible
- Write explanations that teach

#### Step 5: Write the Short Answers

Design exam-style questions that require students to construct responses. Write detailed marking guides. Write helpful-but-not-revealing hints.

#### Step 6: Choose a Title, Subtitle, and Emoji

- `title`: The main topic (2–5 words)
- `subtitle`: A supporting detail or scope indicator
- `emoji`: One emoji that represents the theme (be creative but sensible)

#### Step 7: Add to `data/weeks.js`

Open `data/weeks.js` and add the new week object to the `weeks` export. The key must be the week number.

**Critical:** Make sure:
- The `id` field matches the key
- All `id` fields within arrays start at 1 and are sequential
- `correct` values in MCQs are 0-indexed
- No trailing commas that would break older parsers (though JS handles them fine)
- The file still exports both `weeks` and `moduleInfo`

#### Step 8: Verify

After editing, mentally verify:
- Every MCQ has exactly 4 options
- Every `correct` index is valid (0–3)
- Every short answer has a markingGuide array with at least 2 entries
- Every short answer has a hint
- Flashcard backs that need line breaks use `\n`
- No duplicate IDs within the same array

---

## 7. Quality Standards & Common Mistakes

### DO:
- ✅ Base everything on the provided source material
- ✅ Write explanations that help a confused student understand
- ✅ Make MCQ distractors plausible and educational
- ✅ Write marking guide points as full, clear statements
- ✅ Include "big picture" and "trade-off" questions alongside factual recall
- ✅ Use `\n` for line breaks in flashcard backs
- ✅ Keep hints warm, conversational, and nudge-not-reveal
- ✅ Vary the position of correct MCQ answers across the set
- ✅ Use an encouraging, tutor-like tone throughout

### DON'T:
- ❌ Pull in external knowledge the source material doesn't cover
- ❌ Write MCQ options that are obviously absurd
- ❌ Use "All of the above" or "None of the above" as options
- ❌ Write vague marking guide points (e.g., just "security" instead of a full statement)
- ❌ Make hints that basically give away the answer
- ❌ Put the correct answer in the same position every time
- ❌ Write flashcard backs that are paragraph-length essays
- ❌ Forget to 0-index the `correct` field in MCQs
- ❌ Use markdown in content strings (the components don't render it)
- ❌ Modify any file other than `data/weeks.js`

### Common Mistakes to Avoid:
1. **1-indexed `correct` values.** `correct: 1` means the SECOND option (index 1), not the first. Double-check every MCQ.
2. **Overlapping marking guide points.** If two points say basically the same thing, the AI might give double credit. Keep them distinct.
3. **Flashcards that are too broad.** "Explain everything about X" is bad. "What is the purpose of X?" is good.
4. **Missing the source material's emphasis.** If the lecture spent 3 slides on topic A and 1 slide on topic B, your content should reflect that weighting.
5. **Short answers that are too easy.** If the answer is just a single definition, it's a flashcard, not a short answer. Short answers should require the student to explain, connect, or evaluate.

---

## 8. Technical Notes

### API Marking Endpoint

The `/api/mark` route sends the question, student answer, marks, and marking guide to **OpenAI GPT-5.1** via the Chat Completions API. The system prompt instructs the AI to:
- Check which marking guide points the student addressed
- Award marks proportionally
- Return JSON with `score`, `feedback`, `pointsHit`, and `pointsMissed`
- Be fair, warm, and encouraging
- Round to nearest 0.5 mark

**You do not need to modify this endpoint.** It works dynamically with whatever marking guide you provide in the data.

### Environment

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom theme (see `tailwind.config.js`)
- **Font:** Nunito (loaded via Google Fonts in `globals.css`)
- **API Key:** Stored in `.env.local` as `OPENAI_API_KEY`
- **Model:** `gpt-5.1` (using `max_completion_tokens`, NOT `max_tokens`)

### Running the App

```bash
npm install    # First time only
npm run dev    # Start dev server at localhost:3000
```

---

## 9. Example Workflow

**User says:** "Here's the Week 3 material, it's about middleware in distributed systems" and provides a PDF in the `W3/` folder.

**AI should:**

1. Read the PDF from `W3/`
2. Identify all core concepts (middleware types, transparency, RPC, etc.)
3. Plan content distribution across the three modes
4. Write ~10 flashcards covering every key concept
5. Write ~8-10 MCQs with plausible distractors and teaching explanations
6. Write ~5 short answers with detailed marking guides and helpful hints
7. Choose title ("Middleware"), subtitle ("Transparency, RPC & Communication"), emoji ("🔗")
8. Add the complete week 3 object to `data/weeks.js`
9. Verify all IDs, indices, and formatting
10. Tell the user it's done and they can run `npm run dev` to see it

**The user should not need to touch any code.** The app dynamically renders whatever is in the data file.

---

## Appendix: Week Object Template (Copy-Paste Starter)

```javascript
// Add this inside the `weeks` export object in data/weeks.js

WEEK_NUMBER: {
  id: WEEK_NUMBER,
  title: "TOPIC TITLE",
  subtitle: "CLARIFYING SUBTITLE",
  emoji: "🔷",

  mcqs: [
    {
      id: 1,
      question: "QUESTION TEXT",
      options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D",
      ],
      correct: 0, // 0-indexed!
      explanation: "EXPLANATION TEXT",
    },
    // ... more MCQs
  ],

  flashcards: [
    {
      id: 1,
      front: "FRONT TEXT",
      back: "BACK TEXT — use \\n for line breaks",
    },
    // ... more flashcards
  ],

  shortAnswers: [
    {
      id: 1,
      question: "EXAM-STYLE QUESTION",
      marks: 3,
      markingGuide: [
        "Point 1: full assessable statement",
        "Point 2: full assessable statement",
        "Point 3: full assessable statement",
      ],
      hint: "A gentle nudge using everyday language or analogy.",
    },
    // ... more short answers
  ],
},
```

---

*Last updated: February 2026. If the app structure changes, update this document.*
