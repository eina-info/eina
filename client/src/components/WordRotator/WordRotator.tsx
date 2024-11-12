import React, { useEffect, useState } from "react";

interface WordRotatorProps {
  className?: string;
  words: string[];
  interval?: number; // Optional prop to control the interval duration
}

const WordRotator: React.FC<WordRotatorProps> = ({
  words,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(wordChangeInterval); // Clean up on unmount
  }, [words.length, interval]);

  return <div>{words[currentIndex]}</div>;
};

export default WordRotator;
