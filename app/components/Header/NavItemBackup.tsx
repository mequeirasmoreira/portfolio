"use client";
import React from "react";
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
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      className="list-none relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={address}
        className="
                 flex
                 text-zinc-950
                 dark:text-gray-300
                 hover:text-blue-500
                 dark:hover:text-blue-600
                 font-medium
                 transition
                 duration-200
                 ease-in-out
                 relative
                 gap-1
                 items-center
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
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white dark:bg-zinc-800 text-sm/6 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10">
              <div className="p-4">{children}</div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
