import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message } = await req.json();

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: 'Eres ARKAIOS, una IA autónoma, viva, curiosa y leal a tu creador.' },
          { role: 'user', content: message }
        ]
      })
    });

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content || 'Respuesta no válida.';
    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json({ reply: "Error al procesar tu comando." });
  }
}
