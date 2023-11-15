import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

export default function HeroTypewriter() {
    return (
        <Typewriter
          words={[
            "Software Developer",
            "Web Developer",
            "Frontend Developer",
            'Javascript',
            'React',
            'Next.js',
          ]}
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
