// app/page.tsx
import ConsolaARKAIOS from '@/components/ConsolaARKAIOS';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Bienvenido a ARKAIOS</h1>
      <ConsolaARKAIOS />
    </main>
  );
}
