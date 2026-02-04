# Node-Granule Architecture as Single Source of Truth

**Purpose:** Ensure teaching and questions are always aligned by deriving both from the same structure.  
**Status:** Addon to teaching-methodology.md — applies to all content creation and teaching interactions.

---

## The Problem This Solves

When lessons and questions are built independently from the same source material (e.g. lecture slides), they drift apart. The lesson focuses on understanding and makes judgement calls about what to skip. The questions aim for comprehensive coverage of the slides. The result: a student performs well in the lesson, then hits questions on material they've never seen. This is disheartening and damages trust in the learning process.

---

## The Principle

**The node/granule structure is built first. Everything else derives from it.**

- The **lesson** is: teach and verify these granules.
- The **questions** are: test these granules.
- If something isn't a granule, it doesn't get taught and it doesn't get tested.
- If something is a granule, it MUST be taught and it MUST be tested.

No bridging. No gap-finding. No surprises. Teaching and questions can't drift apart because they share a single backbone.

---

## The Workflow

### Step 1: Build the Node/Granule Structure

Before writing any lesson content or any questions, break down the source material into nodes and granules.

- **Nodes** = learning objectives (visible to the student as progress markers)
- **Granules** = sub-objectives within each node (hidden from the student, all must be verified)

Every fact, concept, definition, name, list, and relationship that the student needs to know must live in a granule. This includes:

- Conceptual understanding (e.g. "Can explain what makes a system distributed")
- Recall details (e.g. "Can state Coulouris' definition and its emphasis on message passing")
- Application (e.g. "Can identify which design issue a given scenario relates to")

**If it's worth knowing, it's a granule. If it's not worth being a granule, it doesn't belong in the lesson or the questions.**

### Step 2: Write Lesson Content From the Granules

Plan the lesson using the granule structure as the skeleton. For each granule, decide:

- Does this need discovery-based teaching? (conceptual understanding, application)
- Does this need a quick direct mention? (recall details — names, lists, positions in models)
- How will this be verified? (micro or macro verification)

The methodology still applies in full — TEACH → VERIFY, beginner flag, discovery vs efficiency mode. The granules just ensure nothing gets accidentally skipped.

### Step 3: Write Questions From the Granules

Write MCQs, flashcards, and short answers that test the granules. Every granule should be testable by at least one question across the three formats. The question type should match the granule type:

| Granule type | Best tested by |
|---|---|
| Conceptual understanding | MCQ (scenario-based), short answer (explain in own words) |
| Recall detail | Flashcard, MCQ (direct recall) |
| Application | MCQ (scenario-based), short answer (apply to new situation) |
| Process/mechanism | Flashcard (steps), short answer (describe how) |

---

## Recall Is Valid

Not everything needs discovery-based teaching. Some granules are inherently recall-based:

- Named definitions attributed to specific authors
- Specific example lists from source material
- Where items sit in a model or roadmap
- Acronyms and their expansions

These are legitimate granules. They get taught (even if briefly and directly) and they get tested. The key rule: **the student must have encountered every granule during the lesson before they see it in a question.**

---

## Example

```
NODE: Understand what a distributed system is
    ├── Can explain the three properties (multiple devices, networked, appears as one)
    ├── Can state Coulouris' definition and its emphasis on message passing
    ├── Can state Tanenbaum's definition and its emphasis on user perspective
    └── Can explain why machines must use message passing (independent memory)

NODE: Understand why distributed systems exist
    ├── Can explain work harder = better hardware
    ├── Can explain work smarter = better algorithms
    └── Can explain get help = distributed/parallel processing

NODE: Know examples of distributed systems
    ├── Can give real-world examples
    └── Can recall specific examples from lecture list (NFS, ATMs, DSM, etc.)
```

The lesson teaches all of these. The questions test all of these. Nothing is missed, nothing is tested blind.

---

## How This Connects to Question Writing (INSTRUCTIONS.md)

The existing INSTRUCTIONS.md says to read source material, plan content, then write flashcards → MCQs → short answers. This addon modifies that flow:

1. Read source material
2. **Build node/granule structure first**
3. Write flashcards from granules
4. Write MCQs from granules
5. Write short answers from granules

The granule structure replaces the informal "identify core concepts" step with a concrete, verifiable architecture.

---

## Summary

**Build the skeleton first. Derive everything from it. If it's not in the skeleton, it doesn't exist.**

---

*This document is an addon to teaching-methodology.md and should be read alongside INSTRUCTIONS.md.*
