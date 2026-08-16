"use client";
import { Typewriter } from "react-simple-typewriter";

function TypeWriter() {
  return (
    <div className="font-medium text-sm sm:text-base md:text-lg flex items-center justify-center flex-wrap gap-1.5 text-neutral-600 dark:text-neutral-400">
      <span>Passionate</span>
      <span className="text-neutral-900 dark:text-white font-bold min-h-[1.5em] inline-block">
        <Typewriter
          words={[
            "Full-Stack Developer",
            "MERN Stack Specialist",
            "AI & ML Practitioner",
            "Problem Solver (512+ LeetCode)",
            "Software Engineer",
          ]}
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1800}
          loop={0}
          cursor={true}
          cursorColor="currentColor"
          cursorBlinking={true}
        />
      </span>
    </div>
  );
}

export default TypeWriter;
