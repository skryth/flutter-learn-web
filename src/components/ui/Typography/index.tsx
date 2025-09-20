import React from "react";
import styles from "./index.module.css";

type Size = "sm" | "md" | "lg" | "xl" | "xxl";
type Weight = "regular" | "medium" | "bold";
type Color = "primary" | "light" | "darkblue" | "title" | "code" 
| "main" | "placeholder" | "input" | "white";

export interface TypographyProps {
  children: React.ReactNode;
  size?: Size;
  weight?: Weight;
  color?: Color;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; 
  uppercase?: boolean
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  size = "md",
  weight = "regular",
  color = "title",
  as: Tag = "p",
  uppercase = false,
}) => {
  return (
    <Tag
      className={`
        ${styles[`size-${size}`]}
        ${styles[`weight-${weight}`]}
        ${styles[`color-${color}`]}
        ${uppercase ? styles.uppercase: ''}
      `}
    >
      {children}
    </Tag>
  );
};
