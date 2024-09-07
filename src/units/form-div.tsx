import React from "react";

interface propTypes {
  children: React.ReactNode;
  className?: string;
}

export const FormDiv = ({ children, className }: propTypes) => {
  return (
    <main
      className={`bg-brand-primary flex flex-col gap-9 px-12 py-8 rounded-lg border border-grey ${className}`}
    >
      {children}
    </main>
  );
};
