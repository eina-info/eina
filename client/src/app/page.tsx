"use client";
import Navbar from "@/components/Navbar/Navbar";
import WordRotator from "@/components/WordRotator/WordRotator";
import { SITE_TITLE, SITE_VERBS } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";

/**
 * @name RoutineBuilder
 * @description Landing Page..
 */

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-questrial-sans)]">
      <header className="absolute sticky top-0 w-screen">
        <Navbar />
      </header>
      <main className="">
        <div className="flex flex-col justify-center mt-20 mb-40 text-center p-8 md:h-[65vh]">
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
        </div>
        <div className="bg-foreground flex flex-col items-center text-background py-28 px-8">
          <div>
            <h1>Conecta con quienes comparten tus</h1>
            <h1 className="text-5xl">
              <WordRotator words={SITE_VERBS} />
            </h1>
          </div>
          <div className="md:flex">
            <div>
              <div className="flex flex-col gap-2">
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={20}
                  height={20}
                  className="m-4"
                />
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={20}
                  height={20}
                  className="mb-2"
                />
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={50}
                  height={50}
                />
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex">
                <span className="text-2xl">Descubre</span>
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={20}
                  height={20}
                  className="ml-1 md:hidden"
                />
              </div>
            </div>
            <div className="ml-20 md:ml-0 md:mt-48">
              <div className="flex flex-col gap-2">
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={20}
                  height={20}
                  className="hidden m-4 md:block"
                />
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={20}
                  height={20}
                  className="mb-2"
                />
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={50}
                  height={50}
                />
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex">
                <span className="text-2xl">Aprende</span>
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={20}
                  height={20}
                  className="ml-1 md:hidden"
                />
              </div>
            </div>
            <div className="ml-40 md:ml-0 md:mt-96">
              <div className="flex flex-col gap-2">
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={20}
                  height={20}
                  className="hidden m-4 md:block"
                />
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={20}
                  height={20}
                  className="mb-2"
                />
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={50}
                  height={50}
                />
                <Image
                  src="/svg/starburst.svg"
                  alt="star icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex">
                <span className="text-2xl">Comparte</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
