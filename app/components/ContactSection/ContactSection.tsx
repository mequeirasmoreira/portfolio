"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { ContactForm } from "./ContactForm";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/mequeirasmoreira",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/miqueiassmoreira/",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:miqueiassantosmoreira@gmail.com",
    label: "Email",
  },
];

export const ContactSection = () => {
  return (
    <motion.section
      id="contact-section"
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
            Vamos <span className="text-blue-500">Conversar</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Coluna da esquerda - Informações de contato */}
            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="
                  text-zinc-600 
                  dark:text-slate-400 
                  leading-relaxed
                "
              >
                Estou sempre interessado em novos projetos e oportunidades. Se
                você tem uma ideia em mente ou quer apenas trocar uma ideia,
                fique à vontade para entrar em contato!
              </motion.p>

              {/* Links sociais */}
              <div className="space-y-4">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="
                    text-xl 
                    font-light 
                    text-zinc-900 
                    dark:text-slate-50
                  "
                >
                  Me encontre nas redes
                </motion.h3>

                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      viewport={{ once: true }}
                      className="
                        p-3
                        rounded-full
                        bg-white/50
                        dark:bg-zinc-800/50
                        text-zinc-600
                        dark:text-slate-400
                        hover:text-blue-500
                        dark:hover:text-blue-400
                        transition-colors
                        backdrop-blur-sm
                      "
                    >
                      <link.icon className="size-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna da direita - Formulário */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
