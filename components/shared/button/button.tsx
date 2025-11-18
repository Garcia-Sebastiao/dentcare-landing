import React from "react";
import Link from "next/link";
import { clsx as cn } from "clsx";

type ButtonProps = {
  href?: string;
  label: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  label,
  onClick,
  className,
  children,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn("px-4 py-2 bg-primary text-white rounded", className)}
      >
        {label ? label : children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 bg-green-shade-01 text-white rounded font-medium transition-all cursor-pointer",
        className
      )}
    >
      {label ? label : children}
    </button>
  );
}
