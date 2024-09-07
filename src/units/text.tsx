import classname from "classnames";
import React from "react";

interface propTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  size?: "header" | "medium" | "small" | "tiny";
  usage?: "brand" | "primary" | "warning";
  variant?: "default" | "mid" | "rare";
  className?: string;
}

export const Text = React.memo(
  ({
    size = "medium",
    children,
    usage = "brand",
    variant = "default",
    className,
    ...other
  }: propTypes) => {
    return (
      <p
        className={classname(`${className}`, {
          "text-[48px]": size == "header",
          "text-[32px]": size === "medium",
          "text-[20px]": size === "small",
          "text-[18px]": size === "tiny",

          "text-black": usage == "brand",
          "text-fade-black": usage == "primary",
          "text-warning": usage == "warning",

          "font-medium": variant === "default",
          "font-semibold": variant === "mid",
          "font-bold": variant === "rare",
        })}
        {...other}
      >
        {children}
      </p>
    );
  }
);
