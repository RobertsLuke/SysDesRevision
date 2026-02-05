# 🚀 Quick Start - Conversational AI Teaching Prototype

## What You're About to Experience

A conversational AI tutor that teaches microscopy using your TEACH → VERIFY methodology. It's like having a conversation with Claude, but the AI follows your pedagogical principles and uses inline visual components.

## How to Run

### Easy Way (Windows)
Just **double-click `start.bat`** in the prototypes folder!

It will:
- Kill any process already using port 3000
- Start the server automatically

### Manual Way (All Platforms)

**1. Open Terminal**
Navigate to the prototypes folder:
```bash
cd prototypes
```

**2. Start the Server**
```bash
npm start
```

You should see:
```
🔬 Teaching Prototype Server
📡 Running on http://localhost:3000

✅ Open http://localhost:3000/chat.html to start learning!
```

**3. Open the Chat Interface**
Open your browser and go to: **http://localhost:3000/chat.html**

## What Happens Next

1. **The AI greets you** and asks what you know about microscopes
2. **Be honest** - Say "I don't know anything" or share what you know
3. **The AI adapts** - Teaches at your level
4. **Components appear inline** - Comparison tables, callouts, hooks
5. **Natural conversation** - Just chat like you would with me
6. **TEACH → VERIFY rhythm** - AI teaches then immediately checks understanding
7. **Complete the lesson** - Go through Node 1 (microscopy types) and Node 2 (magnification)

## Example Interaction

**AI**: "Let's start with Node 1: understanding how microscopy techniques developed. What do you already know about microscopes?"

**You**: "I don't really know anything"

**AI**: "No problem — let's start from the beginning. These are the two main types...

[Comparison table renders inline showing Light vs Electron microscopes]

So — when were light microscopes developed?"

**You**: "The 1600s?"

**AI**: "That's right! The mid-1600s..."

## Tips

- **Answer naturally** - No need to be formal, just chat
- **Be honest about what you don't know** - The AI adapts to your level
- **Try partial answers** - The AI should recognize what's correct and help with what's missing
- **Watch for components** - Comparisons, callouts, and hooks enhance understanding
- **Complete the lesson** - Go through both nodes to see the full methodology

## Troubleshooting

**Port 3000 already in use?**
- Kill whatever's using port 3000, or change PORT in server.js

**"Failed to get response"?**
- Check the terminal - is the server running?
- Check the OpenAI API key is valid
- Check your internet connection

**AI not following methodology?**
- It's guided by the system prompt in server.js
- Sometimes needs gentle reminders
- Report issues so we can refine the prompt

## What to Look For

Test if the methodology actually works:

✅ Does TEACH → VERIFY feel natural?
✅ Do components help or distract?
✅ Does the AI adapt to your level?
✅ Is the tone warm and encouraging?
✅ Do you feel the confidence loop at the end?
✅ Are node summaries useful?
✅ Do bridges connect topics well?

## Stop the Server

Press **Ctrl+C** in the terminal when done.

---

**Ready?** Run `npm start` and open http://localhost:3000/chat.html!
