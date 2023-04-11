import React, { useState, useEffect } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

import getRandomNumber from "./getRandomNumber";
import { words } from "./constants";

export interface TextTransitionProps {
  className?: string;
}

export const TextTransition = (props: TextTransitionProps) => {
  const { className } = props;

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setWordIndex(getRandomNumber(0, words.length));
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <React.Fragment>
      <section>
        <section className="inline">
          <ReactTextTransition
            springConfig={presets.gentle}
            className="big"
            delay={300}
            inline
          >
            {words[wordIndex]}
          </ReactTextTransition>
        </section>
      </section>
    </React.Fragment>
  );
};

export default TextTransition;
