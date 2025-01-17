"use client";

import { memo } from "react";

const technologies = [
  "Python",
  "React",
  "Django",
  "Next.js",
  "Tailwind",
  "FastAPI",
] as const;

const TechStack = memo(() => {
  return (
    <div
      className="
        relative 
        grid 
        grid-cols-3 
        gap-4 
        p-8 
        rounded-2xl 
        border 
        border-slate-200/10 
        backdrop-blur-sm
      "
    >
      {technologies.map((tech) => (
        <div
          key={tech}
          className="
            p-4 
            text-sm 
            font-light 
            text-zinc-600 
            dark:text-slate-400 
            hover:text-blue-500 
            dark:hover:text-blue-400
            transition-colors
          "
        >
          {tech}
        </div>
      ))}
    </div>
  );
});

TechStack.displayName = "TechStack";

export default TechStack;
