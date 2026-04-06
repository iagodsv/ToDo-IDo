import React from "react";
import type { TextProps } from "./type";

export default function Text({
  className,
  children,
  as = "span",
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className,
      ...props,
    },
    children,
  );
}
