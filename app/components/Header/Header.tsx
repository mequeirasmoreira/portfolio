"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./NavItem";
import { NavChildren } from "./NavChildren";
import {
  MoonIcon,
  SunIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CommandLineIcon,
  CodeBracketIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useProjects } from "@/app/contexts/ProjectsContext";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setActiveCategory } = useProjects();

  // Função para verificar a preferência de tema do usuário
  const getInitialTheme = () => {
    // Verifica se estamos no navegador para evitar erros de renderização do servidor
    if (typeof window !== "undefined") {
      // Primeiro, verifica a preferência salva no localStorage
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }

      // Se não houver preferência salva, usa a preferência do sistema
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  useEffect(() => {
    // Define o tema inicial na primeira renderização
    const initialTheme = getInitialTheme();
    setIsDarkMode(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      // No topo da página, sempre mostra
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Scrollando para baixo e não está no topo
      else if (scrollingDown && currentScrollY > 10) {
        setIsVisible(false);
      }
      // Scrollando para cima
      else if (!scrollingDown) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    const throttledControlHeader = () => {
      window.requestAnimationFrame(controlHeader);
    };

    window.addEventListener("scroll", throttledControlHeader);
    return () => window.removeEventListener("scroll", throttledControlHeader);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    // Salva a preferência do usuário no localStorage
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    if (mounted) {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [isDarkMode, mounted]);

  return (
    <header
      className={`
      fixed 
      top-0 
      left-0 
      right-0 
      z-50 
      flex 
      w-full 
      items-center 
      justify-center 
      px-2 
      py-4
      transition-transform 
      duration-300
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      <div
        className="
        relative 
        flex 
        w-full 
        max-w-7xl 
        flex-col 
        items-center 
        rounded-xl 
        border 
        dark:border-[#212121] 
        border-gray-200 
        dark:bg-[#0d0d0de6] 
        bg-slate-50/90
        backdrop-blur-sm
        p-2 
        lg:flex-row 
        transition 
        duration-200 
        ease-in-out
      "
      >
        <div className="relative flex h-8 w-full items-center justify-between gap-5 pl-1 lg:flex-row">
          <Link href="/">
            {isDarkMode ? (
              <Image
                src="/logo-dark.svg"
                alt="Logo"
                width={100}
                height={32}
                priority
                quality={100}
                style={{ objectFit: "contain" }}
              />
            ) : (
              <Image
                src="/logo-light.svg"
                alt="Logo"
                width={100}
                height={32}
                priority
                quality={100}
                style={{ objectFit: "contain" }}
              />
            )}
          </Link>
          <nav className="absolute left-1/2 hidden h-full -translate-x-1/2 transform items-center gap-6 text-sm lg:flex">
            <NavItem name="Sobre-mim" address="/about" haveChildren={true}>
              <NavChildren
                title="Experiências"
                icon={AcademicCapIcon}
                description={"Minha trajetória profissional"}
                href={"#experiences"}
              />
              <NavChildren
                title="Academico"
                icon={BookOpenIcon}
                description={"Meu historico acadêmico"}
                href={"#academic"}
              />
            </NavItem>
            <NavItem name="Projetos" address="/projects" haveChildren={true}>
              <NavChildren
                title="Backend"
                icon={CommandLineIcon}
                description={"Python, Django, FastAPI, Next Routes, etc..."}
                href={"#projects"}
                onClick={() => {
                  setActiveCategory("backend");
                  setTimeout(() => {
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
              />
              <NavChildren
                title="Frontend"
                icon={CodeBracketIcon}
                description={"React, Next.js, Tailwind, etc..."}
                href={"#projects"}
                onClick={() => {
                  setActiveCategory("frontend");
                  setTimeout(() => {
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
              />
              <NavChildren
                title="Análise de Dados"
                icon={ChartBarIcon}
                description={"Python, Pandas, Numpy, etc..."}
                href={"#projects"}
                onClick={() => {
                  setActiveCategory("data-analysis");
                  setTimeout(() => {
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
              />
            </NavItem>

            <NavItem name="Social" address="" haveChildren={true}>
              <NavChildren
                title="Linkedin"
                icon={FaLinkedin}
                href={"https://www.linkedin.com/in/miqueiassmoreira/"}
                external={true}
              />
              <NavChildren
                title="GitHub"
                icon={FaGithub}
                href={"https://github.com/mequeirasmoreira/mequeirasmoreira"}
                external={true}
              />
            </NavItem>
            <NavItem name="Blog" address="/blog" haveChildren={false} />
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full">
              {isDarkMode ? (
                <SunIcon className="h-6 w-6 text-white dark:hover:text-blue-500 dark:text-gray-300" />
              ) : (
                <MoonIcon className="h-6 w-6 text-white text-zinc-950 hover:text-blue-500" />
              )}
            </button>
            <Link
              href="#contact"
              className="
                dark:bg-white
                dark:text-zinc-950
                dark:hover:bg-slate-200
                bg-blue-500
                text-white
                hover:bg-blue-700
                h-8
                px-6
                flex
                items-center
                justify-center
                font-medium
                rounded-md
                transition
                duration-200
                ease-in-out
                "
            >
              Fale Comigo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
