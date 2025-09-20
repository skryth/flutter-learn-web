import React from "react";
import styles from "./index.module.css";

type Size = "sm" | "md" | "lg" | "xl" | "xxl";
type Weight = "regular" | "medium" | "bold";
type Color = "primary" | "light" | "darkblue" | "title" | "code" 
| "main" | "placeholder" | "input" | "white";

export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
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
  ...props
}) => {
  return (
    <Tag
      className={`
        ${styles[`size-${size}`]}
        ${styles[`weight-${weight}`]}
        ${styles[`color-${color}`]}
        ${uppercase ? styles.uppercase: ''}
      `}
      {...props}
    >
      {children}
    </Tag>
  );
};
