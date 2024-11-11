import Example from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-questrial-sans)] h-screen">
      <header>
        <Example />
      </header>
      <main className="flex flex-col justify-center items-center h-4/5 text-center p-8">
        <h1 className="text-9xl">eina</h1>
        <h2>
          Compartiendo recursos de deconstrucción
          <br />
          para reconstruirnos en comunidad.
        </h2>
        <p>Próximamente...</p>
      </main>
      <footer className=""></footer>
    </div>
  );
}
