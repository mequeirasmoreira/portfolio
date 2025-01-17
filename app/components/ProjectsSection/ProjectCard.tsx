"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectCard = memo(({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl
}: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="
      group 
      relative 
      rounded-2xl 
      border 
      border-zinc-200/50 
      dark:border-zinc-800/50 
      overflow-hidden
      backdrop-blur-sm
      hover:border-blue-500/20
      transition-colors
    "
  >
    {/* Imagem com overlay */}
    <div className="relative h-48 overflow-hidden">
      <div className="
        absolute 
        inset-0 
        bg-gradient-to-t 
        from-zinc-900/80 
        to-transparent 
        z-10
      " />
      <img
        src={image}
        alt={title}
        className="
          w-full 
          h-full 
          object-cover 
          group-hover:scale-105 
          transition-transform 
          duration-500
        "
      />
      
      {/* Links */}
      <div className="
        absolute 
        top-4 
        right-4 
        flex 
        gap-3 
        z-20
      ">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2 
              rounded-full 
              bg-zinc-900/50 
              text-slate-50 
              hover:bg-blue-500 
              transition-colors
            "
          >
            <FaGithub className="size-5" />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2 
              rounded-full 
              bg-zinc-900/50 
              text-slate-50 
              hover:bg-blue-500 
              transition-colors
            "
          >
            <FaExternalLinkAlt className="size-5" />
          </a>
        )}
      </div>
    </div>

    {/* Conteúdo */}
    <div className="p-6 space-y-4">
      <h3 className="
        text-xl 
        font-light 
        text-zinc-900 
        dark:text-slate-50
      ">
        {title}
      </h3>

      <p className="
        text-zinc-600 
        dark:text-slate-400 
        leading-relaxed
      ">
        {description}
      </p>

      {/* Tecnologias */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              px-3 
              py-1 
              text-xs 
              rounded-full 
              bg-blue-500/10 
              text-blue-500 
              dark:bg-blue-500/5
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
));

ProjectCard.displayName = "ProjectCard";
