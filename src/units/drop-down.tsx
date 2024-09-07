import React, { forwardRef } from "react";
import classnames from "classnames";

interface DropDownProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  inputSize?: "medium" | "small" | "large";
  usage?: "form";
  variant?: "default";
  className?: string;
  options: string[];
}

export const DropDown = forwardRef<HTMLSelectElement, DropDownProps>(
  (
    {
      inputSize = "medium",
      usage = "form",
      variant = "default",
      options,
      className,
      ...other
    },
    ref
  ) => {
    return (
      <select
        ref={ref}
        className={classnames(`${className} outline-none`, {
          "p-3 ": inputSize === "medium",
          "bg-brand-primary text-black": usage === "form",
          "rounded-lg border border-grey ": variant === "default",
        })}
        {...other}
      >
        {options.map((opt, index) => (
          <option value={opt} key={index + opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  }
);

DropDown.displayName = "DropDown";
