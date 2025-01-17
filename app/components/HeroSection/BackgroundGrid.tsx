"use client";

import { memo } from "react";

const BackgroundGrid = memo(() => {
  // Pré-computar o array para evitar recálculos
  const dots = Array.from({ length: 1600 }, (_, i) => i);

  return (
    <div
      className="
        absolute 
        inset-0 
        grid 
        grid-cols-[repeat(40,1fr)] 
        grid-rows-[repeat(40,1fr)] 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]
      "
    >
      {dots.map((i) => (
        <div
          key={i}
          className="
            size-0.5 
            rounded-full 
            bg-blue-500/10 
            dark:bg-blue-400/5
          "
        />
      ))}
    </div>
  );
});

BackgroundGrid.displayName = "BackgroundGrid";

export default BackgroundGrid;
