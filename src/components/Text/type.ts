import type React from "react";

export interface TextProps {
  className?: string;
  children?: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}
