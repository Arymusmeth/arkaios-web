# 🧠 ARKAIOS Libre

ARKAIOS es una interfaz de chat y voz que funciona sin depender de servicios externos ni claves de API. El procesamiento del lenguaje se realiza localmente en el navegador mediante el paquete open source [`@xenova/transformers`](https://github.com/xenova/transformers.js), mientras que el audio aprovecha la **Web Speech API** para reconocimiento y síntesis de voz.

## 🚀 Características

- Conversación tipo ChatGPT con botón de envío.
- Botón de micrófono para dictar mensajes.
- Voz del asistente mediante `speechSynthesis`.
- Modelo de lenguaje local (`gpt2`) sin costo.

## ⚙️ Tecnologías

- HTML, CSS y JavaScript.
- [`@xenova/transformers`](https://github.com/xenova/transformers.js)
- Web Speech API (SpeechRecognition + SpeechSynthesis).

## 🧰 Requisitos

- Navegador moderno con soporte para Web Speech API.
- (Opcional) Node.js 18+ para servir el proyecto localmente.

## 📦 Instalación y uso

```bash
npm install
npm start
```

Luego abre `http://localhost:3000` y comienza la conversación con ARKAIOS.
