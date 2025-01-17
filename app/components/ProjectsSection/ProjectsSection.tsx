"use client";

import { motion } from "framer-motion";
import { useCallback, memo } from "react";
import { ProjectCard } from "./ProjectCard";
import { useProjects } from "@/app/contexts/ProjectsContext";

type ProjectCategory = "frontend" | "backend" | "data-analysis";

const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "data-analysis", label: "Análise de Dados" },
] as const;

const projects = {
  frontend: [
    {
      title: "Portfolio Next.js",
      description: "Portfolio pessoal construído com Next.js, TailwindCSS e Framer Motion.",
      image: "/images/projects/portfolio.png",
      technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://portfolio.dev"
    },
    // Adicione mais projetos frontend
  ],
  backend: [
    {
      title: "API RESTful Django",
      description: "API RESTful para sistema de gerenciamento de tarefas.",
      image: "/images/projects/api.png",
      technologies: ["Django", "DRF", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/username/api"
    },
    // Adicione mais projetos backend
  ],
  "data-analysis": [
    {
      title: "Análise de Dados COVID-19",
      description: "Análise exploratória de dados da COVID-19 no Brasil.",
      image: "/images/projects/covid.png",
      technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
      githubUrl: "https://github.com/username/covid-analysis"
    },
    // Adicione mais projetos de análise de dados
  ]
};

const TabButton = memo(({ 
  active, 
  onClick, 
  children 
}: { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`
      px-6 
      py-2 
      rounded-full 
      text-sm 
      font-light 
      transition-colors
      ${active 
        ? "bg-blue-500 text-white" 
        : "text-zinc-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400"
      }
    `}
  >
    {children}
  </button>
));

TabButton.displayName = "TabButton";

export const ProjectsSection = () => {
  const { activeCategory, setActiveCategory } = useProjects();

  const handleCategoryChange = useCallback((category: ProjectCategory) => {
    setActiveCategory(category);
  }, [setActiveCategory]);

  return (
    <motion.section
      id="projects-section"
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
            Meus{" "}
            <span className="text-blue-500">Projetos</span>
          </motion.h2>

          {/* Tabs */}
          <div className="
            flex 
            justify-center 
            gap-4 
            mb-16
          ">
            {categories.map((category) => (
              <TabButton
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => handleCategoryChange(category.id as ProjectCategory)}
              >
                {category.label}
              </TabButton>
            ))}
          </div>

          {/* Grid de projetos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            id={`${activeCategory}-projects`}
            className="
              grid 
              grid-cols-1 
              md:grid-cols-2 
              lg:grid-cols-3 
              gap-8
            "
          >
            {projects[activeCategory].map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
