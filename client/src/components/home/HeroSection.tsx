import { SITE_TITLE } from "@/config/constants";
import Link from "next/link";

/**
 * @name HeroSection
 * @description Homepage welcome hero section.
 */

export default function HeroSection() {
  return (
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
  );
}
