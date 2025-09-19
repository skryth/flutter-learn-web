import React from 'react'
import { Typography, type TypographyProps } from '../Typography';
import { Link } from 'react-router';
import styles from './index.module.css'

type BgColor = "primary" | "secondary";
type Size = "sm" | "md";

interface ButtonProps extends Pick<TypographyProps, 'color' | 'size'> {
    children: React.ReactNode;
    onClick?: VoidFunction;
    bg?: BgColor;
    paddingX?: Size;
    paddingY?: Size;
    borderRadius?: Size;
    to?: string;
    type?: 'submit' | 'button'
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
    to,
    type = 'button'
}) => {
    const buttonStyles = `
        ${styles.button}
        ${styles[`color-${bg}`]}    
        ${styles[`px-${paddingX}`]}    
        ${styles[`py-${paddingY}`]}    
        ${styles[`borderRad-${borderRadius}`]}    
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
    <button className={buttonStyles} type={type} onClick={onClick} >
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