# Session Summary — 4 Feb 2026
# Teach Mode Rebuild: Decision Tree Discovery

## What Happened This Session

Starting point: Teaching mode V1 was built but flawed — it skipped orientation entirely and treated every student as a blank slate. We needed to rebuild the teaching methodology from the ground up.

## Method

Rather than theorising, we ran mock lessons. Two simulated students with opposite knowledge levels (complete beginner vs knowledgeable) went through the same Node 1 (Microscopy Techniques) content. Watching how the system should adapt to each student revealed the decision tree organically.

## Key Discoveries (in order)

### 1. The Node Micro-Cycle
Every node follows: ORIENTATION → TEACH + MICRO-VERIFY (per granule group) → MACRO-VERIFY → NODE SUMMARY. This pattern repeats for every node in a lesson.

### 2. The Orientation Question Is Everything
A single open question ("What do you know about X?") determines the entire path. Three responses map to three paths: beginner (teach everything), partial (quick-check then teach gaps), knowledgeable (quick-check only).

### 3. The Confidence Loop
Learn → Prove you've learned → See the proof → Feel good → Want more. This is the core value proposition. The macro-verify written response is where it fires — a student who said "I don't know anything" 10 minutes ago writes a coherent explanation.

### 4. Components First, Text Second
Teaching components (images, comparisons, callouts) do the heavy lifting. Text explains the components, not vice versa.

### 5. The Verification Ladder
Open recall → Fill-blank → MCQ → True-false. Always scaffold DOWN on failure, never up. Cut-off at 2 attempts to prevent loops.

### 6. Node Transitions: The Bridge
Between nodes, a 1-2 sentence narrative bridge connects what they just learned to why the next topic matters. Then a fresh orientation question starts the next micro-cycle.

### 7. The Scoring Algorithm
Raw events (passed, firstAttempt, attempts, scaffolded, cutOff, source) → mastery score (0-100) via defined algorithm → thresholds → actions (spaced repetition, custom decks, heat maps, readiness indicators, next session intelligence).

### 8. Weakness Reporting at Three Levels
Level 1: WHAT (granule label). Level 2: HOW BAD (score + threshold). Level 3: WHY (specific confusion pattern from raw event interpretation).

### 9. Teach → Review Pipeline
Lesson summary becomes a launchpad. "Practice weak areas now" drops them into flashcards/MCQs filtered to only the granules they struggled with. One lesson generates custom review materials immediately.

### 10. Custom Practice Decks From Metrics
Subject-wide granule mastery queries build dynamic decks. Weak granules get flashcards + MCQs. As mastery improves, granules drop out. Student always has a current, targeted "what I need to work on" deck.

### 11. Data Visualisation Catalogue
26 visualisations identified, grouped by question they answer (Where am I? How am I improving? What should I do next? Big picture? This session?). Prioritised into 5 essential, 5 high-value, 16 nice-to-have.

## Mock Lesson Results

Both mock lessons validated the decision tree:
- **Beginner:** ~10 min, 5 granules taught, scaffolding used, 4/5 first time
- **Knowledgeable:** ~2 min, 0 granules taught, 5/5 quick-checked
- Same tree, same content, completely different and appropriate experiences

## Files Produced

| File | Description |
|------|-------------|
| `dev-notes-teach-rebuild.md` | Complete dev notes with decision tree, mock lessons, algorithm, features, visualisation catalogue |
| `decision-tree-node1.jsx` | Interactive React visualisation of Node 1 decision tree with beginner/knowledgeable path toggle |
| `SESSION-SUMMARY.md` | This file |

## Next Steps

- [ ] Content creation methodology documentation (reproducible, handoff-ready)
- [ ] Teaching methodology documentation (reproducible, handoff-ready)
- [ ] Build repeatable YAML format for content structure
- [ ] Add metrics/analytics into the YAML schema
- [ ] Implement the scoring algorithm
- [ ] Build UI to support the teaching methodology
