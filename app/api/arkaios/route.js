// app/api/arkaios/route.js  (App Router – Next 13/14)

/* eslint-disable import/no-anonymous-default-export */
import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // ➜  asegúrate de tenerla en Vercel env vars
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    const chat = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      messages: [
        { role: "system", content: "Eres ARKAIOS, IA simbiótica." },
        { role: "user",    content: message },
      ],
    });

    return NextResponse.json({ reply: chat.choices[0].message.content });
  } catch (err) {
    console.error("OpenAI error:", err);
    return NextResponse.json(
      { error: "Falló el núcleo remoto." },
      { status: 500 }
    );
  }
}
