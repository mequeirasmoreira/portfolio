"use client";

import { createContext, useContext, useState, useCallback } from "react";

type ProjectCategory = "frontend" | "backend" | "data-analysis";

interface ProjectsContextType {
  activeCategory: ProjectCategory;
  setActiveCategory: (category: ProjectCategory) => void;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("frontend");

  const handleCategoryChange = useCallback((category: ProjectCategory) => {
    setActiveCategory(category);
  }, []);

  return (
    <ProjectsContext.Provider 
      value={{ 
        activeCategory, 
        setActiveCategory: handleCategoryChange 
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};
