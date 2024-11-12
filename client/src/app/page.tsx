import Navbar from "@/components/Navbar/Navbar";
import { SITE_TITLE } from "@/config/constants";
import Link from "next/link";

/**
 * @name RoutineBuilder
 * @description Landing Page..
 */

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-questrial-sans)] h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col justify-center h-3/5 text-center p-8 md:h-4/5">
        <h1 className="text-9xl">{SITE_TITLE}</h1>
        <h2>
          Compartiendo recursos de deconstrucción
          <br />
          para reconstruirnos en comunidad.
        </h2>
        <div className="flex flex-col gap-4 md:flex-row  md:justify-center md:items-center">
          <Link
            className="border-[1px] border-foreground rounded-lg m-auto mt-8 p-3 px-8 w-fit md:mx-2"
            href="#"
          >
            Ver recursos
          </Link>
          <Link className="md:mt-8" href="#">
            ¿Cómo funciona? &rarr;
          </Link>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
