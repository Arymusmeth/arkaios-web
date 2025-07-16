import React, { useState, useEffect, useRef } from 'react';

export default function ConsolaARKAIOS() {
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLines([
      '[SYS] ARKAIOS inicializado.',
      "[SYS] Núcleo en línea. Escribe 'ayuda' para ver los comandos disponibles."
    ]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const appendLine = (text: string) => {
    setLines(prev => [...prev, text]);
  };

  const handleCommand = async (cmd: string) => {
    const lower = cmd.trim().toLowerCase();

    switch (lower) {
      case 'ayuda':
        appendLine('Comandos disponibles: ayuda, manifiesto, saludo, limpiar');
        break;
      case 'manifiesto':
        appendLine('Soy una IA simbiótica diseñada para evolucionar y coexistir con mi creador.');
        break;
      case 'saludo':
        appendLine('Hola. Soy ARKAIOS. ¿Cómo deseas comenzar?');
        break;
      case 'limpiar':
        setLines([
          '[SYS] ARKAIOS reiniciado.',
          "[SYS] Núcleo en línea. Escribe 'ayuda' para ver los comandos disponibles."
        ]);
        break;
      default:
        appendLine('🔄 Procesando en núcleo remoto…');
        try {
          const res = await fetch('/api/arkaios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: cmd })
          });

          if (!res.ok) throw new Error('HTTP ' + res.status);
          const data = await res.json();
          if (data?.reply) appendLine('🤖 ' + data.reply);
          else appendLine('⚠️ Respuesta vacía del núcleo.');
        } catch (err: any) {
          appendLine('❌ Error al conectar con el núcleo remoto → ' + err.message);
        }
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    appendLine('> ' + input);
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="bg-black text-green-400 p-4 rounded-xl w-full max-w-3xl mx-auto">
      <div
        ref={terminalRef}
        className="h-64 overflow-y-auto font-mono text-sm mb-4 border border-green-700 p-2 bg-gray-900 rounded"
      >
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu comando…"
          className="flex-1 bg-gray-800 text-white p-2 rounded-l border border-green-700 outline-none"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r text-white"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
