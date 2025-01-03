"use client";
import Navbar from "@/components/Navbar/Navbar";
import ConnectSection from "@/components/home/ConnectSection";
import Fromm from "@/components/home/Form";
import HeroSection from "@/components/home/HeroSection";

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
        <HeroSection />
        <ConnectSection />
        <Fromm />
      </main>
      <footer className=""></footer>
    </div>
  );
}
