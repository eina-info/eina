import { SITE_TITLE, SITE_VERBS } from "@/config/constants";
import WordRotator from "../WordRotator/WordRotator";
import Image from "next/image";

/**
 * @name ConnectSection
 * @description Homepage glitter connect section
 */

export default function ConnectSection() {
  return (
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
  );
}
