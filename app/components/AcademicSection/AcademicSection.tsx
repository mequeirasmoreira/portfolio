"use client";

import { motion } from "framer-motion";
import { memo } from "react";

const AcademicCard = memo(
  ({
    institution,
    course,
    period,
    description,
    skills,
  }: {
    institution: string;
    course: string;
    period: string;
    description: string;
    skills: string[];
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
      relative 
      p-8 
      rounded-2xl 
      border 
      border-zinc-200/50 
      dark:border-zinc-800/50
      backdrop-blur-sm
      group
      hover:border-blue-500/20
      transition-colors
    "
    >
      {/* Linha decorativa */}
      <div
        className="
      absolute 
      -left-px 
      top-0 
      h-full 
      w-1 
      bg-gradient-to-b 
      from-transparent 
      via-blue-500/20 
      to-transparent 
      opacity-0
      group-hover:opacity-100
      transition-opacity
    "
      />

      {/* Instituição */}
      <div
        className="
      text-sm 
      text-blue-500 
      mb-2
      font-medium
    "
      >
        {institution}
      </div>

      {/* Curso */}
      <h3
        className="
      text-xl 
      text-zinc-900 
      dark:text-slate-50 
      mb-2
      font-light
    "
      >
        {course}
      </h3>

      {/* Período */}
      <div
        className="
      text-sm 
      text-zinc-500 
      dark:text-slate-400 
      mb-4
    "
      >
        {period}
      </div>

      {/* Descrição */}
      <p
        className="
      text-zinc-600 
      dark:text-slate-400 
      leading-relaxed 
      mb-6
    "
      >
        {description}
      </p>

      {/* Skills */}
      <div
        className="
      flex 
      flex-wrap 
      gap-2
    "
      >
        {skills.map((skill) => (
          <span
            key={skill}
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
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
);

AcademicCard.displayName = "AcademicCard";

export const AcademicSection = () => {
  const academics = [
    {
      institution: "Estácio",
      course: "Analise e Desenvolvimento de Sistemas",
      period: "2024 — 2026",
      description:
        "Formação com foco em desenvolvimento de software, engenharia de dados e inteligência artificial. Participação em projetos de pesquisa e extensão.",
      skills: ["Python", "Machine Learning", "Data Science", "Estatística"],
    },
    {
      institution: "Digital Innovation One",
      course: "Bootcamp Full Stack Developer",
      period: "2022",
      description:
        "Desenvolvimento web full stack com foco em tecnologias modernas e práticas ágeis. Projetos práticos e trabalho em equipe.",
      skills: ["React", "Node.js", "TypeScript", "DevOps"],
    },
  ];

  return (
    <motion.section
      id="academic-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="
        relative 
        min-h-screen
        py-32
        bg-slate-50
        dark:bg-zinc-900
        overflow-hidden
      "
    >
      {/* Linhas decorativas */}
      <div className="absolute inset-0 flex justify-center">
        <div
          className="
          w-px 
          h-full 
          bg-gradient-to-b 
          from-transparent 
          via-zinc-300/20 
          to-transparent
        "
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="
              text-3xl 
              font-light 
              text-zinc-900 
              dark:text-slate-50
              mb-16
              text-center
            "
          >
            Formação <span className="text-blue-500">Acadêmica</span>
          </motion.h2>

          {/* Grid de cards */}
          <div className="space-y-8">
            {academics.map((academic) => (
              <AcademicCard key={academic.course} {...academic} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
