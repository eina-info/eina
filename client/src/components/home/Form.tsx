import { ContactUs } from "./contactForm";
/**
 * @name Formm
 * @description Contact Form.
 */

export default function Fromm() {
  return (
    <div className="bg-foreground flex justify-center text-background ">
      <div className="text-background bg-foreground flex flex-col justify-center gap-4 p-10 mt-20 mb-40 m-8 w-[400px] border-solid border-current border-2 rounded-2xl">
        <h2 className="text-5xl pb-4">¿Te suena?</h2>
        <h3 className="text-2xl">
          ¿Quieres difundir un evento o recurso que podría tener cabida aquí?
          ¡Contáctanos!
        </h3>
        <h3 className="text-2xl">
          Nos encantaría conocerte y compartir tu material.
        </h3>
        <h3 className="text-2xl">
          Además, <strong>¡es gratis!</strong>
        </h3>
        <ContactUs />
      </div>
    </div>
  );
}
