import React from 'react'
import styles from './index.module.css'
export interface InputProps {
    type?: React.HTMLInputTypeAttribute,
    placeholder: string,
    name: string,
    value?: string,
    onChange?: (value: string) => void
    ref?: React.RefObject<HTMLInputElement | null>
}

const Input: React.FC<InputProps> = ({
    type = 'text',
    placeholder, 
    name,
    ref,
    onChange,
    ...props
}) => {
  return (
    <input 
      {...props}
      className={styles.input} 
      type={type} 
      placeholder={placeholder} 
      name={name} 
      ref={ref}
      required 
      onChange={e => onChange && onChange(e.target.value)}
    />
  )
}

export default Input