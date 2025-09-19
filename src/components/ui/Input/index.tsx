import React from 'react'
import styles from './index.module.css'
export interface InputProps {
    type?: React.HTMLInputTypeAttribute,
    placeholder: string,
    name: string,
    ref?: React.RefObject<HTMLInputElement | null>
}

const Input: React.FC<InputProps> = ({
    type = 'text',
    placeholder, 
    name,
    ref
}) => {
  return (
    <input 
        className={styles.input} 
        type={type} 
        placeholder={placeholder} 
        name={name} 
        ref={ref}
        required 
    />
  )
}

export default Input