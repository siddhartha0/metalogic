import React from "react";
import classnames from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  usage?: "default" | "rare";
  size?: "medium";
  variant?: "md" | "xl";
  className?: string;
}

export const Button = React.memo(
  ({
    children,
    className,
    size = "medium",
    usage = "default",
    variant = "md",
    ...other
  }: ButtonProps): JSX.Element => {
    return (
      <button
        className={classnames(
          `${className} text-white font-bold leading-7  hover:bg-primary`,

          {
            "rounded-lg": variant === "md",
            "py-1 px-3": size === "medium",
            "bg-secondary ": usage === "default",
            "bg-ternary": usage === "rare",
          }
        )}
        {...other}
      >
        {children}
      </button>
    );
  }
);
