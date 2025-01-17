// NavItem.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

interface NavItemProps {
  name: string;
  address: string;
  haveChildren: boolean;
  children?: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({
  name,
  address,
  haveChildren,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="list-none relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={address}
        className="
          flex
          items-center
          gap-1
          relative
          font-medium
          transition
          duration-200
          ease-in-out
          text-zinc-600
          hover:text-blue-500
          dark:text-slate-50
          dark:hover:text-blue-500
        "
      >
        {name}
        {haveChildren &&
          (isHovered ? (
            <ChevronUpIcon className="h-4 w-4" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          ))}
      </Link>

      {haveChildren && isHovered && children && (
        <div className="absolute top-full left-0 z-50 w-full">
          <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
            <div className="
              w-screen 
              max-w-md 
              flex-auto 
              overflow-hidden 
              rounded-lg 
              bg-slate-50
              dark:bg-zinc-950 
              shadow-lg 
              border
              border-slate-200
              dark:border-zinc-800
            ">
              <div className="p-3">{children}</div>
            </div>
          </div>

          {/* Div de sobreposição para controle de hover */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bg-transparent"
            style={{
              width: "calc(100% + 2rem)", // Largura do modal + padding
              height: "100px", // Altura suficiente para manter o modal aberto
              top: "100%", // Começa logo abaixo do item de navegação
            }}
          />
        </div>
      )}
    </li>
  );
};
