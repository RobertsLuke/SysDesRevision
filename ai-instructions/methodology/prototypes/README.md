# Teaching Prototype - Microscopy Lesson

This prototype implements the pedagogical methodology described in the teaching documents. It demonstrates the **TEACH → VERIFY** rhythm through **conversational AI tutoring**.

## What This Prototype Does

This is a **conversational AI tutor** that:

1. **Teaches through natural conversation** - Like chatting with Claude or ChatGPT
2. **Uses inline visual components** - Comparisons, callouts, hooks rendered in chat
3. **Follows TEACH → VERIFY methodology** - Orientation → teach → micro-verify → node summary → bridge
4. **Adapts to your level** - Asks what you know, teaches only what you need
5. **Scores honestly** - Tracks which granules you got first time vs needed help
6. **Implements the confidence loop** - You see your transformation from "I don't know" to explaining concepts

## How to Use

### Setup (One-time)

1. **Install Node.js** if you don't have it (https://nodejs.org)
2. **Open terminal in the `prototypes` folder**
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the server:**
   ```bash
   npm start
   ```
5. **Open the chat interface** - Go to http://localhost:3000/chat.html in your browser

### Using the Lesson

1. **The AI tutor greets you** and asks what you know about microscopes
2. **Answer honestly** - "I don't know anything" or share what you know
3. **The AI teaches conversationally** - Explains concepts with inline components
4. **The AI verifies** - Asks questions to check understanding
5. **You respond** - Type your answers naturally
6. **The AI adapts** - Confirms correct answers, helps with wrong ones
7. **Node summaries** - Shows which granules you got first time
8. **Bridges** - Connects nodes with natural transitions
9. **Continue** - Complete all nodes to finish the lesson

## What's Implemented

### Conversational Teaching
- ✅ **OpenAI GPT-5 mini** - Powers the AI tutor
- ✅ **Natural conversation** - No button clicking, just chat
- ✅ **Inline components** - Visual tools rendered in chat messages
- ✅ **Orientation phase** - AI asks what you know and adapts
- ✅ **TEACH → VERIFY rhythm** - Built into the AI's system prompt
- ✅ **Partial answer handling** - AI recognizes partial correctness naturally

### Teaching Components (Rendered Inline)
- ✅ **[COMPARISON]** - Side-by-side comparison tables
- ✅ **[CALLOUT]** - Key facts highlighted
- ✅ **[HOOK]** - Memory anchors displayed

### Flow
- ✅ **Orientation** - "What do you know about X?"
- ✅ **Teaching** - Conversational with inline components
- ✅ **Micro-verify** - Questions after teaching each granule group
- ✅ **Response handling** - Correct/partial/incorrect with appropriate feedback
- ✅ **Node summaries** - AI summarizes which granules passed/needed help
- ✅ **Bridges** - Natural transitions between nodes
- ✅ **Warm, encouraging tone** - "That's right!" not "Correct."

### What's NOT Yet Implemented
- ⚠️ **Automatic state tracking** - AI should update node/granule progress automatically
- ⚠️ **Cut-off enforcement** - AI should cut off after 2 attempts (relies on AI following instructions)
- ⚠️ **Scaffolding down** - AI should try easier questions on failure (AI can do this naturally)
- ⚠️ **Match-pairs component** - Not yet implemented in renderer
- ⚠️ **Spaced repetition** - No persistence or review scheduling
- ⚠️ **Progress bar** - No visual progress indicator yet

## Content

The prototype uses **Node 1 and Node 2** from the microscopy lesson:

**Node 1: Microscopy development**
- Timeline (light 1600s, electron 1930s)
- Mechanism (light uses light, electron uses electrons)
- TEM vs SEM (2D vs 3D)

**Node 2: Magnification and resolution**
- Magnification figures (×2,000 vs ×2,000,000)
- Resolution concept and values

## Files

### Main Files
- **`chat.html`** - Conversational chat interface (open this in browser)
- **`server.js`** - Node.js backend with OpenAI integration
- **`package.json`** - Node.js dependencies
- **`microscopy-teach-data.js`** - Teaching data structure (also embedded in server.js)

### Old Files (V1 Static Prototype)
- **`index.html`** - Original static prototype (no AI, button-based)
- Can still be used to see the original implementation

### Architecture

```
┌─────────────────┐
│   Browser       │
│  (chat.html)    │  ← Student types messages
└────────┬────────┘
         │ HTTP POST /api/chat
         ↓
┌─────────────────┐
│   Node.js       │
│  (server.js)    │  ← Handles API calls
└────────┬────────┘
         │ OpenAI API
         ↓
┌─────────────────┐
│   OpenAI        │
│  GPT-5 mini     │  ← AI tutor with methodology
└─────────────────┘
```

### How It Works

1. **System prompt** in server.js contains:
   - Full teaching methodology
   - All lesson data (nodes, granules, content)
   - Component syntax instructions
   - Example interactions

2. **Chat interface** sends user messages to server

3. **Server** adds message to conversation history and calls OpenAI

4. **OpenAI** responds following the methodology, using component syntax

5. **Frontend** parses component syntax and renders visual elements inline

6. **State** tracked in session on server (current node, granules verified, etc.)

## Design Principles Applied

From the methodology docs:

1. ✅ **TEACH → VERIFY always** - Never stacks teaching without verification
2. ✅ **Components first, text second** - Teaching components are prominent
3. ✅ **Concise teaching** - 2-4 sentences per granule group
4. ✅ **Warm, encouraging tone** - "That's right!" not "Correct answer"
5. ✅ **Honest scoring** - Tracks attempts, shows first-time vs needed-help
6. ✅ **Visible progress** - Progress bar and node summaries
7. ✅ **Confidence loop** - Final summary celebrates transformation

## Testing the Methodology

Use this prototype to:

- **Experience the TEACH → VERIFY rhythm** in natural conversation
- **See AI adapt to your level** - Try different orientation responses
- **Test component effectiveness** - Do comparisons/callouts help?
- **Validate teaching clarity** - Is content understandable?
- **Check verification alignment** - Do questions match what was taught?
- **Test partial answer handling** - AI should acknowledge correct parts
- **Evaluate tone** - Warm and encouraging? Not patronising?
- **Check pacing** - Does conversation flow naturally?

### Example Test Scenarios

**Scenario 1: Complete Beginner**
- Start: "I don't know anything about microscopes"
- AI should teach everything from scratch
- Expect: Node 1 → 5 granules taught and verified → Node summary → Bridge → Node 2

**Scenario 2: Some Knowledge**
- Start: "I know there are light and electron microscopes"
- AI should recognize existing knowledge, fill gaps
- Expect: Faster progression, quick-check some granules

**Scenario 3: Partial Answers**
- Give partially correct answers (e.g., "1600s" for timeline but miss electron date)
- AI should acknowledge correct part, help with missing part
- Expect: "That's right about light microscopes. What about electron?"

## Troubleshooting

**Server won't start:**
- Check Node.js is installed: `node --version`
- Run `npm install` first
- Check port 3000 isn't in use

**"Failed to get response" error:**
- Check server is running (see terminal output)
- Check OpenAI API key is valid
- Check internet connection

**AI doesn't follow methodology:**
- The system prompt in server.js guides behavior
- AI might need reminders ("Please verify this before moving on")
- Check that teaching data loaded correctly

**Components not rendering:**
- Check syntax in AI response (should have `**[COMPARISON]**` etc.)
- Check browser console for JavaScript errors
- Component parser is in chat.html script section

## Next Steps

### Immediate Improvements

1. **Add match-pairs component** - For macro-verification
2. **Implement automatic state tracking** - Server tracks progress automatically
3. **Add progress indicator** - Visual bar showing lesson progress
4. **Persist sessions** - Save to database for multi-session learning
5. **Add Node 3** - Calculations with unit conversions and formula triangle

### Future Features

6. **Spaced repetition** - Review scheduling based on granule scores
7. **Custom practice decks** - Generate flashcards/MCQs from weak granules
8. **Heat maps** - Visual representation of mastery across all granules
9. **Multiple lessons** - Expand beyond microscopy
10. **Voice input** - Speak responses instead of typing

### Methodology Refinements

11. **Explicit cut-off** - Force 2-attempt limit (currently relies on AI)
12. **Scaffolding enforcement** - Track verification difficulty levels
13. **Macro-verify stages** - Stage 1 (match-pairs) → Stage 2 (explain-own-words)
14. **Confidence loop metrics** - Measure transformation explicitly
15. **A/B testing** - Test different teaching approaches

## Credits

Built following the methodology in:
- `teaching-methodology-operations.md` - Operational execution guide
- `content-creation-methodology.md` - Content structure and pipeline
- `teaching-philosophy.md` - Pedagogical principles

Data derived from:
- `example-microscopy-b1-1.js` - Original biology microscopy content
