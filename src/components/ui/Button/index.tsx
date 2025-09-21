import React from 'react'
import { Typography, type TypographyProps } from '../Typography';
import { Link } from 'react-router';
import styles from './index.module.css'

type BgColor = "primary" | "secondary" | "success" | "wrong";
type Size = "sm" | "md";

export interface ButtonProps extends Pick<TypographyProps, 'color' | 'size'> {
    children: React.ReactNode;
    onClick?: VoidFunction;
    bg?: BgColor;
    paddingX?: Size;
    paddingY?: Size;
    borderRadius?: Size;
    to?: string;
    align?: 'center' | 'left' | 'right';
    type?: 'submit' | 'button',
    disabled?: boolean
}
const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    bg = 'primary',
    paddingX = 'md',
    paddingY = 'sm',
    borderRadius = 'sm',
    color = 'white',
    size = 'sm',
    align = 'center',
    to,
    type = 'button',
    disabled = false
}) => {
    const buttonStyles = `
        ${styles.button}
        ${styles[`color-${bg}`]}    
        ${styles[`px-${paddingX}`]}    
        ${styles[`py-${paddingY}`]}    
        ${styles[`borderRad-${borderRadius}`]}    
        ${styles[`align-${align}`]}    
    `;

    if (to) return (
        <Link className={buttonStyles} to={to}>
            <Typography 
                color={color}
                size={size}
                weight='bold'
                as='span'
                uppercase
            >
                {children}
            </Typography>
        </Link>
    )

  return (
    <button className={buttonStyles} type={type} onClick={onClick} disabled={disabled}>
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