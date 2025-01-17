"use client";

import { motion } from "framer-motion";

export const AboutSection = () => {
  const stats = [
    { label: "Anos de Experiência", value: "5+" },
    { label: "Projetos Entregues", value: "30+" },
    { label: "Tecnologias Dominadas", value: "15+" },
    { label: "Certificações", value: "8+" },
  ];

  const experiences = [
    {
      period: "2024 — Presente",
      role: "Analista de Qualidade JR",
      description:
        "Realizando diagnósticos de processos e mensuração de qualidade para identificar melhorias, desenvolver projetos operacionais e otimizar a jornada do cliente. Criação de relatórios e dashboards estratégicos com foco em eficiência e excelência no atendimento.",
      technologies: ["Python", "Excel", "Power BI"],
    },
  ];

  return (
    <motion.section
      id="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="
        relative 
        min-h-[calc(100vh-4rem)]
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
          {/* Grid principal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Coluna da esquerda - Estatísticas */}
            <div className="lg:col-span-5">
              <div
                className="
                lg:sticky 
                lg:top-32 
                space-y-8
                lg:space-y-16
              "
              >
                {/* Título da seção */}
                <h2
                  className="
                  text-2xl
                  sm:text-3xl 
                  font-light 
                  text-zinc-900 
                  dark:text-slate-50
                "
                >
                  Transformando ideias em{" "}
                  <span className="text-blue-500">experiências digitais</span>
                </h2>

                {/* Grid de estatísticas */}
                <div className="grid grid-cols-2 gap-4 sm:gap-8">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="
                        p-4
                        sm:p-6 
                        rounded-2xl 
                        border 
                        border-zinc-200/50 
                        dark:border-zinc-800/50
                        backdrop-blur-sm
                      "
                    >
                      <div
                        className="
                        text-2xl
                        sm:text-3xl 
                        font-light 
                        text-blue-500 
                        mb-2
                      "
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm sm:text-base text-zinc-600 dark:text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna da direita - Experiência */}
            <div className="lg:col-span-7">
              <div className="space-y-16">
                {/* Lista de experiências */}
                <div className="space-y-12">
                  {experiences.map((experience, index) => (
                    <div
                      key={index}
                      className="
                        p-6
                        sm:p-8 
                        rounded-2xl 
                        border 
                        border-zinc-200/50 
                        dark:border-zinc-800/50 
                        backdrop-blur-sm
                      "
                    >
                      <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-sm text-blue-500">{experience.period}</span>
                          <h3 className="text-xl sm:text-2xl font-light text-zinc-900 dark:text-slate-50">
                            {experience.role}
                          </h3>
                        </div>

                        <p className="text-base sm:text-lg text-zinc-600 dark:text-slate-400">
                          {experience.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="
                                px-3 
                                py-1 
                                text-sm
                                rounded-full 
                                bg-blue-500/10 
                                text-blue-500
                              "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
