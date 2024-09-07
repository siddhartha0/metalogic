import classname from "classnames";
import React from "react";

interface propTypes
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  inputSize?: "medium" | "small" | "large";
  children?: React.ReactNode;
  usage?: "form";
  variant?: "default";
  className?: string;
}

export const InputField = React.memo(
  ({
    inputSize = "medium",
    usage = "form",
    children,
    variant = "default",
    className,
    ...other
  }: propTypes) => {
    return (
      <input
        className={classname(`${className} outline-none`, {
          "p-3 ": inputSize === "medium",
          "bg-brand-primary text-black": usage === "form",
          "rounded-lg border border-grey ": variant === "default",
        })}
        {...other}
      >
        {children}
      </input>
    );
  }
);
