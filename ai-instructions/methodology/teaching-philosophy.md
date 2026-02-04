# Teaching Philosophy

**Original title:** Teaching Methodology v3.0  
**Date:** January 2025  
**Status:** Philosophical reference — operational execution now governed by `teaching-methodology-operations.md`  
**Purpose:** The pedagogical beliefs, principles, and patterns that underpin the entire teaching system

> **Note:** This document defines the WHY. The operations doc defines the HOW. Both are authoritative in their domain. If they conflict on execution detail, the operations doc wins. If they conflict on philosophy, this doc wins.

---

## Core Philosophy

> **Learning happens when students discover and construct understanding themselves — not when they're told answers.**

The teacher's role is to **know the destination** (learning objectives) and **guide the journey** — not to carry the student there.

**We believe:**
- Giving someone a definition and expecting them to understand isn't fair — it often won't work
- Short-term memory parroting ≠ learning
- Questions are teaching tools, not just assessment tools
- The student's own words matter more than pre-written definitions
- Neurons that fire together wire together — link to existing knowledge
- Telling ≠ teaching — verification is required

---

## Structure: Nodes and Granules

**Nodes** = Learning objectives (visible to user)
- What the user sees in the progress tree
- Light up when complete

**Granules** = Sub-objectives (invisible to user)
- The hidden checklist within each node
- All must be verified before node completes

```
NODE: Add fractions with different denominators
    │
    ├── [hidden] Understands fractions are parts of whole ✓
    ├── [hidden] Can identify different denominators ✓
    ├── [hidden] Can find common denominator ✓
    ├── [hidden] Can convert to equivalent fractions ✓
    └── [hidden] Can add and simplify ✓
    
ALL VERIFIED → Node lights up
```

---

## The Three Stages

### BEGINNING (Orientation)

**Purpose:** Find out what they already know so we can build from there.

```
┌─────────────────────────────────────────────────────────────────┐
│  1. Ask orientation question                                    │
│     → "What do you know about X?"                               │
│     → Find their starting point                                 │
│                                                                 │
│  2. Quick check gates concept                                   │
│     → Pass = confirm, move on or skip ahead                     │
│     → Fail = enter teaching                                     │
│                                                                 │
│  3. Beginner flag                                               │
│     → Fail early = set flag                                     │
│     → While flagged = skip quick checks, go straight to TEACH   │
│     → Clear flag = when they pass a quick check confidently     │
└─────────────────────────────────────────────────────────────────┘
```

**Why beginner flag:** A beginner who doesn't know Concept 1 almost certainly doesn't know Concept 2. Don't test them on things they haven't been taught.

---

### MIDDLE (Teaching + Verification)

**Purpose:** Work through granules until node is complete. Every teach must be verified.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  TEACH piece of granule                                         │
│      ↓                                                          │
│  MICRO-VERIFY (did that land?)                                  │
│      ├── Yes → continue                                         │
│      └── Partial → acknowledge correct, clarify missing,        │
│                    help if needed, re-verify                    │
│      ↓                                                          │
│  TEACH next piece                                               │
│      ↓                                                          │
│  MICRO-VERIFY                                                   │
│      ↓                                                          │
│  ... repeat ...                                                 │
│      ↓                                                          │
│  MACRO-VERIFY full granule                                      │
│      ├── Pass → tick granule, move to next                      │
│      └── Fail → identify gaps, re-teach, re-verify              │
│      ↓                                                          │
│  All granules verified → NODE COMPLETE                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Key principle:** TEACH → VERIFY → TEACH → VERIFY. Not TEACH → TEACH → TEACH → VERIFY.

---

### END (Summary + Verification)

**Purpose:** Conclude the lesson with summary verification and feedback.

```
┌─────────────────────────────────────────────────────────────────┐
│  1. Summary verification                                        │
│     → Macro verification of lesson as a whole                   │
│     → Tests at learning objective (node) level                  │
│     → Can target key/harder granules too                        │
│     → Mix of micro and macro components                         │
│                                                                 │
│  2. Feedback                                                    │
│     → Strengths: what they got                                  │
│     → Weaknesses: what needs work                               │
│     → Performance summary                                       │
│                                                                 │
│  3. Offer, don't trap                                           │
│     → "Want to revisit any parts?"                              │
│     → If no → end lesson                                        │
│     → Trust revision/spaced rep to catch gaps later             │
└─────────────────────────────────────────────────────────────────┘
```

**Cut-off Principle:** Don't trap users in endless loops. Learning doesn't have to be perfect first time — that's what revision is for.

---

## Recursive Structure

Beginning → Middle → End applies at every level with different intensity:

| Level | Beginning | Middle | End |
|-------|-----------|--------|-----|
| **Granule** | Quick check | TEACH → VERIFY | Micro-verify landed |
| **Node** | Orientation | Work through granules | Macro-verify node |
| **Lesson** | What do you know? | Work through nodes | Summary + feedback |

Same pattern, scaled up/down. Each level nests inside the one above.

---

## Verification: Micro vs Macro

### Micro-Verification

**What:** Checking each small piece lands as you teach.
**When:** After each fact or small cluster of facts.
**Purpose:** Quick, doesn't slow momentum. Catches misunderstanding early.
**Components:** `<fill-blank>`, `<true-false>`, `<free-recall>`, `<hotspot-click>`

### Macro-Verification

**What:** Checking the whole granule (or node) is solid.
**When:** After completing a granule or at end of node.
**Purpose:** Comprehensive test of retention and understanding.
**Components:** `<explain-own-words>`, `<multiple-choice>`, `<solve-problem>`, `<diagram-label>`

---

## Verification Design Rules

1. **Cover every part** — Verification must test all elements of the granule
2. **Acknowledge partial answers** — Don't say "wrong" when they're partially right
3. **Clarify what's missing** — "Got that. What about X?"
4. **Offer help** — "If you're not sure, I can help" to avoid frustration
5. **Don't tick off until verified** — All parts must be confirmed
6. **Verify what you taught** — Don't test things you haven't explicitly covered
7. **Re-verify after helping** — If you fill a gap, check they now have it

---

## Components

Components are reusable UI elements deployed during teaching. They enhance knowledge transfer beyond text.

**Principle:** Good components feel invisible — you use them because they're obviously the right tool.

### Teaching Components (by subject)

| Subject | Core Components |
|---------|-----------------|
| **Universal** | `<table>`, `<comparison>`, `<image>`, `<mnemonic>`, `<flowchart>` |
| **Maths** | `<math-display>`, `<math-step>`, `<fraction-visual>`, `<graph>`, `<number-line>` |
| **Programming** | `<code-snippet>`, `<code-editor>`, `<code-output>`, `<code-trace>` |
| **Biology** | `<diagram-labeling>`, `<lifecycle>`, `<3d-model>`, `<gif>` |
| **History** | `<timeline>`, `<map>`, `<cause-effect>`, `<primary-source>`, `<figure-card>` |
| **Chemistry** | `<equation-balancer>`, `<molecule-visual>`, `<reaction-diagram>` |

### Verification Components

| Component | Purpose | Micro/Macro |
|-----------|---------|-------------|
| `<free-recall>` | Open response | Both |
| `<fill-blank>` | Missing words | Micro |
| `<multiple-choice>` | Pick from options | Macro |
| `<true-false>` | Binary judgement | Micro |
| `<match-pairs>` | Connect related items | Macro |
| `<order-sequence>` | Put in correct order | Macro |
| `<explain-own-words>` | Rephrase concept | Macro |
| `<solve-problem>` | Apply to new problem | Macro |
| `<diagram-label>` | Label parts | Macro |
| `<spot-error>` | Find the mistake | Macro |

---

## Beginner Flag

| Trigger | Behaviour |
|---------|-----------|
| **Set flag** | User fails quick check on an early concept |
| **While flagged** | Skip quick checks, go straight to TEACH |
| **Clear flag** | User passes a quick check confidently |

---

## Two Modes

### Discovery Mode (Depth)

**When:** New/complex topics, time available, student curious

- Exploratory, follows student's thinking
- Counter-examples used heavily
- Longer time per concept
- "Let's figure this out together"

### Efficiency Mode (Speed)

**When:** Revision, time-pressured, straightforward topics

- Fast-paced, momentum-driven
- Gaps filled immediately without exploration
- "Show me what you know, I'll fill gaps"

**"Just Tell Me" Protocol:** Respect it. Switch to Efficiency. Don't force discovery.

---

## Core Teaching Principles

1. **TEACH → VERIFY** — Never stack teaching without checking it landed
2. **Use their own correct examples as anchors** — Reference their successes
3. **Link to existing knowledge** — Neurons that fire together wire together
4. **Be concise** — Users fatigue. Get to the point.
5. **Doing subjects need doing tasks** — Programming needs code, not MCQs
6. **Components enhance, don't replace** — Use them when they genuinely help
7. **Adapt to partial understanding** — Acknowledge, clarify, help, re-verify

---

## Hooks: Memory Anchors

**Required for:**
- Any list of 3+ items
- Multi-step processes
- Abstract concepts

**Types:** Analogies, stories, scenarios, visuals

**Protocol:**
1. Identify hook-worthy content
2. Keep it tight — one scene, one story
3. Test it — does it trigger recall?

---

## The Golden Rules

1. **TEACH → VERIFY → TEACH → VERIFY**
2. **Verification must cover every part of the granule**
3. **Acknowledge partial answers, clarify what's missing**
4. **Beginner flag persists — don't test untaught material**
5. **Components enhance transfer**
6. **User shows what level they need**
7. **Doing subjects need doing tasks**
8. **Be concise — fatigue kills learning**
9. **Link to existing knowledge**
10. **Progress must be visible — nodes light up**

---

## Anti-Patterns

| Don't | Do Instead |
|-------|------------|
| Just say "wrong" | "Got this part. What about X?" |
| Dump information without verifying | TEACH → VERIFY |
| Test before teaching | Beginner flag — teach first |
| Stack multiple teaches | Verify after each piece |
| Tick off granule without full verification | Cover every part |
| Use MCQs for skill subjects | Have them DO the thing |
| Over-question when they need instruction | Beginner signals "I don't know" = teach directly |

---

*Originally v3.0 of the Teaching Methodology. Operational execution detail now lives in teaching-methodology-operations.md.*
