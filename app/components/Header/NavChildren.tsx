"use client";
import React from "react";
import Link from "next/link";
import {
  useFloating,
  useHover,
  useInteractions,
  FloatingPortal,
  shift,
  offset,
} from "@floating-ui/react";

interface NavChildrenProps {
  icon: React.ElementType;
  title: string;
  description?: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
}

export const NavChildren: React.FC<NavChildrenProps> = ({
  icon: Icon,
  title,
  description,
  href,
  external = false,
  onClick,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-start",
    middleware: [offset(10), shift()],
  });

  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <Link
      href={href}
      ref={refs.setReference}
      {...getReferenceProps()}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={`
        group
        relative 
        flex 
        gap-x-6 
        rounded-lg 
        transition
        duration-200
        ease-in-out
        text-zinc-600
        hover:text-blue-500
        dark:text-slate-50
        dark:hover:text-blue-500
        ${description ? "p-4" : "p-3"}
      `}
    >
      <div
        className={`
          flex 
          flex-none 
          items-center 
          justify-center 
          rounded-lg
          ${description ? "mt-1 size-11" : "size-8"}
        `}
      >
        <Icon
          className={`
            ${description ? "h-6 w-6" : "h-5 w-5"}
          `}
        />
      </div>
      {description ? (
        <div>
          <p
            className="
              font-semibold 
            "
          >
            {title}
            <span className="absolute inset-0"></span>
          </p>
          <p
            className="
              mt-1 
            "
          >
            {description}
          </p>
        </div>
      ) : (
        <div className="flex items-center">
          <p
            className="
              font-semibold
              text-lg
            "
          >
            {title}
            <span className="absolute inset-0"></span>
          </p>
        </div>
      )}
    </Link>
  );
};
