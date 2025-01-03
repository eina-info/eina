import { SITE_TITLE } from "@/config/constants";
import Link from "next/link";

/**
 * @name Formm
 * @description Contact Form.
 */

export default function Fromm() {
  return (
    <div className="bg-foreground flex justify-center">
      <div className="text-background bg-foreground flex flex-col justify-center gap-4 p-6 mt-20 mb-40 m-8 h-[65vh] w-[400px] border-solid border-current border-2 rounded-2xl">
        <h1 className="text-6xl pb-4">¿Te suena?</h1>
        <h2>
          Si organizas un evento que podría tener cabida aquí, ¡contáctanos!
        </h2>
        <h2>Nos encantaría conocerte y difundir tu evento.</h2>
        <h2>
          Además, <strong>¡es gratis!</strong>
        </h2>
      </div>
    </div>
  );
}
