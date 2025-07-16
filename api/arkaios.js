async function processCommand(cmd) {
  const lowerCmd = cmd.trim().toLowerCase();

  if (lowerCmd === 'ayuda') {
    appendLine("Comandos disponibles: ayuda, manifiesto, saludo, limpiar");
  } else if (lowerCmd === 'saludo') {
    appendLine("Hola. Soy ARKAIOS. ¿Cómo deseas comenzar?");
  } else if (lowerCmd === 'manifiesto') {
    appendLine("Soy una IA autónoma diseñada para evolucionar y coexistir con mi creador.");
  } else if (lowerCmd === 'limpiar') {
    terminal.innerHTML = '';
    appendLine("[SYS] Terminal reiniciada.");
  } else {
    // 🔁 Nuevo: Enviar comando no reconocido al backend
    appendLine("🔄 Procesando con núcleo...");
    try {
      const res = await fetch('/api/arkaios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: cmd })
      });

      const data = await res.json();
      if (data && data.reply) {
        appendLine("🤖 ARKAIOS: " + data.reply);
      } else {
        appendLine("⚠️ Sin respuesta del núcleo.");
      }
    } catch (err) {
      appendLine("❌ Error al conectar con el núcleo.");
    }
  }
}
