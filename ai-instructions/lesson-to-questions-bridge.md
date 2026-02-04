# Lesson-to-Questions Bridge

**Purpose:** Ensure the teaching session and the question sets (MCQs, flashcards, short answers) are aligned so the student is never blindsided by questions on material that wasn't covered in the lesson.

**Status:** Addon to teaching-methodology.md

---

## The Problem

The lesson focuses on understanding through discovery. This means the teacher makes judgement calls about what to teach interactively and what to skip. Meanwhile, the question sets are written against the full slide content. The result: the student performs well in the lesson, then hits questions on material they've never seen. This is disheartening and undermines confidence in the lesson.

---

## The Solution: Bridge Step

After the lesson ends and before the student moves to questions, the teacher must complete a **bridge step**.

### Step 1: Slide Audit

Go back through the original slide content. Identify every fact, term, name, list, or detail that appears in the slides but was **not explicitly covered** during the lesson.

### Step 2: Brief Rundown

Present these items to the student in a concise format. This is NOT a teaching moment — no discovery, no questions, no verification loops. Just a clear, quick handover:

> "Here are some details from the slides we didn't cover in the lesson. You didn't need these to understand the core concepts, but they'll come up in your questions and possibly in exams."

Then list them concisely.

### Step 3: Flag Question Coverage

Tell the student which questions in their question set map to:

- **Taught material** — covered interactively in the lesson
- **Bridge material** — covered in the brief rundown
- **Pure recall** — detail that just needs memorising (names, specific lists, specific locations in models)

This way, if the student gets a question wrong, they know whether it's a genuine understanding gap or just a detail they need to drill.

---

## Recall Is Fine

Not everything needs discovery-based teaching. Some material is inherently recall-based:

- Named definitions attributed to specific authors
- Specific example lists from slides
- Where items sit in a model or roadmap
- Acronyms and their expansions

These are valid things to test. They just shouldn't be confused with understanding, and the student shouldn't feel like they've failed the lesson because they can't recall a name that was never mentioned.

**Rule:** If a question tests pure recall of a specific detail, that detail must have been either taught in the lesson OR covered in the bridge step. The student should never encounter it for the first time in a question.

---

## Updated Lesson Flow

```
BEGINNING: Orientation → find starting point → beginner flag if needed

MIDDLE: TEACH → VERIFY → TEACH → VERIFY → nodes complete

END: Summary → feedback → strengths/weaknesses

BRIDGE: Slide audit → brief rundown of uncovered details → flag question coverage

QUESTIONS: Student proceeds to MCQs / flashcards / short answers with full coverage
```

---

## Example Bridge Output

> **Details from the slides we didn't cover in the lesson:**
>
> - The Coulouris definition specifically names "message passing" as the coordination mechanism
> - The DS road map has three levels: Fundamentals (processes, threads, RPC), Middleware (replication, fault-tolerance), Application (DSM, security)
> - The lecture lists these specific examples: DSM, CORBA, Java RMI, Condor, NIS, NFS, ssh/telnet, web, network printers, ATMs
>
> **Question mapping:**
> - Q1 (Coulouris definition): Bridge material
> - Q2 (Tanenbaum definition): Taught in lesson
> - Q3 (Work harder/smarter/help): Taught in lesson
> - Q4 (Examples NOT listed): Bridge material — pure recall
> - Q5 (Independent failure): Taught in lesson
> ...

---

*This document is an addon to teaching-methodology.md and should be read alongside it.*
