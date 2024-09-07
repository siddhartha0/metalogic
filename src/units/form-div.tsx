import React from "react";

interface propTypes {
  children: React.ReactNode;
}

export const FormDiv = ({ children }: propTypes) => {
  return (
    <main className="bg-brand-primary flex flex-col gap-9 px-12 py-8 rounded-lg border border-grey">
      {children}
    </main>
  );
};
