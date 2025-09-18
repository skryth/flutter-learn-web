import React from 'react'
import styles from './index.module.css'
import { Typography, type TypographyProps } from '../Typography';

type BgColor = "primary" | "secondary";
type Size = "sm" | "md";

interface ButtonProps extends Pick<TypographyProps, 'color' | 'size'> {
    children: React.ReactNode;
    onClick: VoidFunction;
    bg?: BgColor;
    paddingX?: Size,
    paddingY?: Size,
    borderRadius?: Size
}
const Button: React.FC<ButtonProps> = ({
    children,
    onClick: onClick,
    bg = 'primary',
    paddingX = 'md',
    paddingY = 'sm',
    borderRadius = 'sm',
    color = 'white',
    size = 'sm'
}) => {
  return (
    <button 
        className={`
            ${styles.button}
            ${styles[`color-${bg}`]}    
            ${styles[`px-${paddingX}`]}    
            ${styles[`py-${paddingY}`]}    
            ${styles[`borderRad-${borderRadius}`]}    
        `}
        type='button'
        onClick={onClick}
    >
        <Typography 
            color={color}
            size={size}
            weight='bold'
            as='span'
            uppercase
        >
            {children}
        </Typography>
    </button>
  )
}

export default Button