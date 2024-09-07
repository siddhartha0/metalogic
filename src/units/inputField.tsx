import classname from "classnames";
import React, { forwardRef } from "react";

interface propTypes
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  inputSize?: "medium" | "small" | "large";
  usage?: "form";
  variant?: "default";
  className?: string;
}

export const InputField = forwardRef<HTMLInputElement, propTypes>(
  (
    {
      inputSize = "medium",
      usage = "form",
      variant = "default",
      className,
      ...other
    }: propTypes,
    ref
  ) => {
    return (
      <input
        className={classname(`${className} outline-none`, {
          "p-3": inputSize === "medium",
          "bg-brand-primary text-black": usage === "form",
          "rounded-lg border border-grey": variant === "default",
        })}
        ref={ref}
        {...other}
      />
    );
  }
);
