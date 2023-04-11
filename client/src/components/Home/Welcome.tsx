import * as React from "react";
import TextTransition from "./TextTransitions";

export interface WelcomeProps {
  className?: string;
}

/**
 * @name Welcome
 * @description This holds the Welcome container in the homepage.
 */
export const Welcome = (props: WelcomeProps) => {
  const { className } = props;

  return (
    <main className="flex flex-col">
      <div className="bg-gradient-to-t from-lightCoral to-alabaster p-8 pb-16">
        <h1>
          Una recopilación de
          <br />
          recursos para deconstruir...
        </h1>
        <h1 className="mt-96 float-right">... y reconstuirnos juntxs</h1>
      </div>
      <div className="bg-alabaster p-8">
        <h1>
          Encuentra ese espacio seguro
          <br />
          estés donde estés
        </h1>
        <div>
          <h1 className="float-right text-right mt-96">
            y conecta con quienes
            <br />
            comparten tus
            <br />
            <span className="text-6xl">
              <TextTransition></TextTransition>
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
};
