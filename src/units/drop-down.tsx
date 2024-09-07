import classname from "classnames";
import React from "react";

interface propTypes
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

export const DropDown = React.memo(
  ({
    inputSize = "medium",
    usage = "form",
    variant = "default",
    options,
    className,
    ...other
  }: propTypes) => {
    return (
      <select
        name=""
        id=""
        className={classname(`${className} outline-none`, {
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
