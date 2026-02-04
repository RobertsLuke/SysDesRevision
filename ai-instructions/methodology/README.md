# Methodology — README

**Last updated:** February 2026

This folder contains the **authoritative, current** methodology documents. A fresh AI or developer reads these to understand the entire system.

## Current Documents (Read in This Order)

| # | File | Purpose |
|---|------|---------|
| 1 | `teaching-philosophy.md` | **WHY** — The pedagogical beliefs and principles |
| 2 | `content-creation-methodology.md` | **WHAT** — 7-pass pipeline: source material → structured data |
| 3 | `teaching-methodology-operations.md` | **HOW** — Decision tree, verification, scoring, lesson delivery |
| 4 | `ui-feature-lists.md` | **BUILD** — Comprehensive feature specs for both the Content Creation UI and Teaching UI |
| 5 | `example-microscopy-b1-1.js` | **REFERENCE** — Complete worked example data file |
| 6 | `INSTRUCTIONS.md` | **LEGACY** — Still valid for question-only tasks (no teach data) |

## Reading Order

For understanding the philosophy: 1 → 2 → 3  
For building the UIs: 4 (references 2 and 3 throughout)  
For seeing a real data example: 5

## Archive

`archive/` contains superseded documents kept for historical reference. They were absorbed into the three authoritative docs above and should NOT be used for implementation.

## The System in One Sentence

Build a node/granule skeleton from source material (doc 2), teach it with TEACH → VERIFY (doc 3), score it honestly, and let the confidence loop bring students back.
