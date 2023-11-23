import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroTypewriter({words}) {

  return (
    <Typewriter
      words={words}
      loop={0}
      cursor={true}
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
      wrapperClassName="typewriter-wrapper"
      cursorClassName="typewriter-cursor"
    />
  );
}
