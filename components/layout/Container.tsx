import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  const baseClasses = "px-10 sm:px-14 md:px-20 lg:px-32";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <section className={combinedClasses}>
      {children}
    </section>
  );
}
