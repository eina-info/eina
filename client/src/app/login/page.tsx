import Navbar from "@/components/Navbar/Navbar";
import SignIn from "@/components/SignIn/SignIn";

/**
 * @name Home
 * @description Login page.
 */

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-questrial-sans)] h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col justify-center h-3/5 text-center p-8">
        <SignIn />
      </main>
      <footer className=""></footer>
    </div>
  );
}
