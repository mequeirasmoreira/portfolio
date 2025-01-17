"use client";

import { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundGrid from "./BackgroundGrid";
import TechStack from "./TechStack";

export const HeroSection = () => {
  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="
          relative 
          h-screen 
          flex 
          items-center 
          overflow-hidden
          bg-[#fafafa] 
          dark:bg-zinc-950
        "
      >
        <BackgroundGrid />

        {/* Conteúdo principal com layout assimétrico */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            {/* Coluna da esquerda - Texto principal */}
            <div className="col-span-7 space-y-16">
              {/* Nome com efeito de highlight */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="
                  text-8xl 
                  font-light 
                  tracking-tight 
                  text-zinc-900 
                  dark:text-slate-50
                "
              >
                Miqueias
                <span
                  className="
                    relative 
                    inline-block 
                    before:absolute 
                    before:-inset-1 
                    before:h-full 
                    before:w-full 
                    before:bg-blue-500/10 
                    before:transform 
                    before:skew-x-12
                  "
                >
                  Moreira
                </span>
              </motion.h1>

              {/* Descrição minimalista */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="
                  text-xl 
                  leading-relaxed 
                  text-zinc-600 
                  dark:text-slate-300 
                  max-w-2xl
                "
              >
                Desenvolvendo soluções que combinam
                <span className="text-blue-500"> precisão analítica </span>
                com
                <span className="text-blue-500"> design intuitivo</span>
              </motion.p>
            </div>

            {/* Coluna da direita - Elementos visuais */}
            <motion.div 
              className="col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* Círculos flutuantes com blur */}
              <div className="absolute size-64 rounded-full bg-blue-500/20 blur-3xl -top-20 -right-20" />
              <div className="absolute size-48 rounded-full bg-purple-500/10 blur-3xl bottom-0 left-0" />

              <TechStack />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator sutil com animação */}
        <motion.div
          className="
            absolute 
            bottom-8 
            left-1/2 
            -translate-x-1/2 
            flex 
            flex-col 
            items-center 
            gap-2
            cursor-pointer
            group
          "
          onClick={scrollToAbout}
          whileHover={{ y: 5 }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <span
            className="
              text-sm 
              text-zinc-500 
              dark:text-slate-400 
              font-light
              group-hover:text-blue-500
              transition-colors
            "
          >
            scroll
          </span>
          <motion.div
            className="
              size-px 
              h-16 
              bg-gradient-to-b 
              from-zinc-500/50 
              to-transparent
              group-hover:from-blue-500/50
              transition-colors
            "
          />
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};
