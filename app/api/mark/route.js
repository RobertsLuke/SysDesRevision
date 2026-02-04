import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { question, answer, marks, markingGuide } = await request.json();

    if (!answer || answer.trim().length === 0) {
      return NextResponse.json(
        { error: "Please write an answer before submitting." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key not configured." },
        { status: 500 }
      );
    }

    const systemPrompt = `You are a fair, encouraging academic marker for a university Distributed Systems module. 

You will receive a short-answer question, the total marks available, a marking guide listing the key points expected, and a student's answer.

Your job:
1. Assess which key points from the marking guide the student has addressed (even if worded differently).
2. Award marks proportionally based on how many key points were covered.
3. Provide constructive, encouraging feedback.

Respond with ONLY valid JSON (no markdown, no backticks) in this exact format:
{
  "score": <number out of total marks>,
  "feedback": "<2-3 sentences of encouraging, constructive feedback>",
  "pointsHit": ["<key point covered>", ...],
  "pointsMissed": ["<key point missed>", ...]
}

Be fair — give credit for correct understanding even if the wording isn't perfect. Round to the nearest 0.5 mark. Be warm and encouraging in tone.`;

    const userPrompt = `Question: ${question}

Total marks: ${marks}

Key points to look for:
${markingGuide.map((p, i) => `${i + 1}. ${p}`).join("\n")}

Student's answer:
${answer}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-5.1",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.3,
        max_completion_tokens: 800,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenAI API error:", err);
      return NextResponse.json(
        { error: "Failed to get AI feedback. Please try again." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const content = data.choices[0].message.content.trim();

    // Parse JSON — strip any accidental markdown fencing
    const cleaned = content.replace(/```json|```/g, "").trim();
    const result = JSON.parse(cleaned);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Marking error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
