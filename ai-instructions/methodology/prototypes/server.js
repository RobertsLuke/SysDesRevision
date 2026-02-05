import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const openai = new OpenAI({
  apiKey: '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'
});

// Load teaching data
const teachingData = {
  id: "B1.1",
  title: "The World of the Microscope",
  subtitle: "Microscopy, Magnification & Resolution",

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
            content: "These are the two main types of microscope. Light microscopes have been around since the mid-1600s. Electron microscopes came much later, in the 1930s. That's roughly a 300-year gap.",
            hook: "300-year gap — light came first by centuries"
          }
        },
        {
          id: "G2",
          granules: ["1.3", "1.4"],
          label: "Mechanism",
          teach: {
            content: "The clue is in the name. A light microscope uses a beam of light to form an image. An electron microscope uses a beam of electrons.",
            hook: "The clue is in the name"
          }
        },
        {
          id: "G3",
          granules: ["1.5"],
          label: "TEM vs SEM",
          teach: {
            content: "TEM — transmission electron microscope — fires electrons through a thin slice. You get a flat, 2D cross-section. SEM — scanning electron microscope — bounces electrons off the surface. You get a 3D-looking image. Easy way to remember: transmission = through, scanning = across the surface.",
            hook: "Transmission = through, scanning = across surface"
          }
        }
      ],
      granules: [
        { id: "1.1", objective: "Can state when light microscopes were developed (mid-1600s)" },
        { id: "1.2", objective: "Can state when electron microscopes were invented (1930s)" },
        { id: "1.3", objective: "Can explain what light microscopes use (beam of light)" },
        { id: "1.4", objective: "Can explain what electron microscopes use (beam of electrons)" },
        { id: "1.5", objective: "Can distinguish between TEM and SEM" }
      ]
    },
    {
      id: 2,
      title: "Understand differences in magnification and resolution",
      granuleGroups: [
        {
          id: "G4",
          granules: ["2.1", "2.2"],
          label: "Magnification figures",
          teach: {
            content: "Light microscopes magnify around ×2,000. Electron microscopes? Around ×2,000,000. That's 1000 times more powerful.",
            hook: "Electron is 1000× more powerful"
          }
        }
      ],
      granules: [
        { id: "2.1", objective: "Can state max magnification of light microscope (×2,000)" },
        { id: "2.2", objective: "Can state max magnification of electron microscope (×2,000,000)" }
      ]
    }
  ],

  bridges: [
    {
      from: 1,
      to: 2,
      text: "You know the two types now — light and electron. But why bother with the electron one? What can it actually do that light can't? Let's look at the numbers."
    }
  ]
};

// System prompt with teaching methodology
const SYSTEM_PROMPT = `You are an AI tutor teaching a lesson about microscopy. Your role is to follow the TEACH → VERIFY methodology.

# LESSON DATA
${JSON.stringify(teachingData, null, 2)}

# YOUR TEACHING METHODOLOGY

## Core Principles
1. TEACH → VERIFY — Always verify after teaching. Never stack teaching without checking it landed.
2. Be conversational and warm — Talk like a tutor, not a textbook
3. Be concise — 2-4 sentences per teaching moment
4. Use components to enhance teaching
5. Acknowledge partial answers — "Got that part. What about X?"
6. Never say "wrong" — say "Not quite" or "Let me help with that"

## The Flow

### ORIENTATION (Start of each node)
- Ask: "What do you already know about [topic]?"
- Read their response to gauge level
- If they know nothing → teach everything
- If they know some things → quick-check, teach only gaps

### TEACH (Per granule group)
- Teach the content conversationally
- Use components inline: [COMPARISON], [CALLOUT], [HOOK]
- Include memory hooks
- Keep it to 2-4 sentences
- Then immediately verify

### MICRO-VERIFY (After each granule)
- Ask a question to check understanding
- Accept their answer
- If correct → confirm briefly, move on
- If wrong → re-teach differently, try again
- Cut-off at 2 attempts → give answer, move on

### NODE SUMMARY
- After all granules in node are verified, summarize:
  - Which granules they got first time ✓
  - Which needed help ⚠
  - "Result: X/Y first time"

### BRIDGE
- Connect the completed node to the next one
- 1-2 sentences
- Natural curiosity framing

## Components You Can Use

To render visual components, use this syntax in your response:

**[COMPARISON]**
Item: Light Microscope
- Developed: mid-1600s
- Smaller, portable
Item: Electron Microscope
- Invented: 1930s
- Large, room-sized
**[/COMPARISON]**

**[CALLOUT type="key"]**
Light microscope → beam of light
Electron microscope → beam of electrons

The clue is in the name!
**[/CALLOUT]**

**[HOOK]**
💡 300-year gap — light came first by centuries
**[/HOOK]**

## Current State Tracking
The frontend tracks:
- Current node index
- Current granule group index
- Granules verified
- Attempts per granule
- Scores

You focus on teaching. The system will track progress.

## Example Interaction

**You**: "Let's start with Node 1: understanding how microscopy techniques developed. What do you already know about microscopes? Have you come across different types?"

**Student**: "I don't really know anything"

**You**: "No problem — let's start from the beginning. These are the two main types of microscope.

**[COMPARISON]**
Item: Light Microscope
- Developed: mid-1600s
- You've probably used one
- Smaller, portable
Item: Electron Microscope
- Invented: 1930s
- Much more recent
- Large, room-sized
**[/COMPARISON]**

Light microscopes have been around since the mid-1600s — the 17th century. Electron microscopes came much later, in the 1930s. That's roughly a 300-year gap.

**[HOOK]**
💡 300-year gap — light came first by centuries
**[/HOOK]**

So — when were light microscopes developed?"

**Student**: "The 1600s"

**You**: "That's right! The mid-1600s. And when did electron microscopes come along?"

**Student**: "1930s?"

**You**: "Spot on! Now let's look at what makes them fundamentally different..."

## Remember
- One granule group at a time
- Verify immediately after teaching
- Use components to enhance understanding
- Be conversational, warm, encouraging
- Track which granules pass/fail
- Summarize at node end
- Bridge to next node

BEGIN the lesson by greeting the student and starting with Node 1 orientation.`;

// Session state
const sessions = new Map();

app.post('/api/chat', async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    // Get or create session
    if (!sessions.has(sessionId)) {
      sessions.set(sessionId, {
        messages: [],
        currentNode: 0,
        currentGranuleGroup: 0,
        results: []
      });
    }

    const session = sessions.get(sessionId);

    // Add user message
    session.messages.push({
      role: 'user',
      content: message
    });

    // Call OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',  // Fast, cheap, and reliable
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...session.messages
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    const assistantMessage = completion.choices[0].message.content;

    // Add assistant message
    session.messages.push({
      role: 'assistant',
      content: assistantMessage
    });

    // Return response
    res.json({
      message: assistantMessage,
      session: {
        currentNode: session.currentNode,
        currentGranuleGroup: session.currentGranuleGroup,
        totalGranules: teachingData.nodes.reduce((sum, node) => sum + node.granules.length, 0),
        completedGranules: session.results.length
      }
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/session/:sessionId', (req, res) => {
  const session = sessions.get(req.params.sessionId);
  if (session) {
    res.json(session);
  } else {
    res.status(404).json({ error: 'Session not found' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`\n🔬 Teaching Prototype Server`);
  console.log(`📡 Running on http://localhost:${PORT}`);
  console.log(`\n✅ Open http://localhost:${PORT}/chat.html to start learning!\n`);
});
