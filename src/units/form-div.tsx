import React from "react";

interface propTypes {
  children: React.ReactNode;
}

export const FormDiv = ({ children }: propTypes) => {
  return (
    <main className="bg-brand-primary flex flex-col gap-8 p-4">{children}</main>
  );
};
