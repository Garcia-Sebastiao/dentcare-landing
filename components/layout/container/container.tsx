import { clsx as cn } from "clsx";
import { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn(className, "w-full max-w-314 mx-auto")}>{children}</div>
  );
}
