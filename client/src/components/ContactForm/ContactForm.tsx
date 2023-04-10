import * as React from "react";
import { SubmitContactForm } from "./SubmitContactForm";

export interface ContactFormProps {
  className?: string;
}

/**
 * @name ContactForm
 * @description Contact form in homepage.
 */
export const ContactForm = (props: ContactFormProps) => {
  const { className } = props;

  return (
    <div className="flex justify-center">
      <div className="border border-black rounded-2xl p-8 m-12 relative flex flex-col">
        <h1 className="text-4xl">¿Te suena?</h1>
        <div className="py-10">
          <p>
            Si organizas un evento que <br />
            podría tener cabida aquí,
            <br />
            ¡contáctanos!
            <br />
            <br />
            Nos encantaría conocerte
            <br /> y difundir tu evento.
            <br />
            Además, ¡es gratis!
          </p>
        </div>
        <SubmitContactForm />
        <button className="border border-black rounded-full p-1 px-4 absolute bg-white -bottom-4">
          Enviar
        </button>
      </div>
    </div>
  );
};
