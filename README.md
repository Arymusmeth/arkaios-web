# 🧠 ARKAIOS Voice Interface

**ARKAIOS** es una interfaz central de inteligencia artificial diseñada para interactuar con múltiples motores de IA (texto, voz, imagen, video, etc.) desde una única consola web unificada.

Esta versión incluye una **consola reactiva + modo de voz funcional**, construida con tecnologías modernas como **Next.js (App Router)**, **Tailwind CSS**, y **OpenAI Whisper API** (para el reconocimiento de voz).

---

## 🚀 Características

- Entrada de comandos vía **voz o texto**
- Imagen de avatar de IA como fondo
- Botón de micrófono interactivo (modo replicante)
- Modo normal / avanzado (visual y funcional)
- Backend vía Vercel Functions (`/api/arkaios`)
- Respuestas generadas por IA de forma directa
- Conversión de voz a texto sin guardar audio
- Modular y extensible para nuevas APIs de IA

---

## ⚙️ Tecnologías

- **Next.js 14+ (App Router)**
- **React + TypeScript**
- **Tailwind CSS**
- **Vercel Serverless Functions**
- **OpenAI API**
- **Web Speech API / Whisper**

---

## 🧰 Requisitos

- Node.js `18+`
- Clave API de OpenAI (`.env.local`):
```env
OPENAI_API_KEY=tu_clave_aqui
