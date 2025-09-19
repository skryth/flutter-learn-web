import React, { useRef } from 'react'
import Input, { type InputProps } from '../ui/Input'
import styles from './index.module.css'

interface InputWithButtonProps extends InputProps {
    children: React.ReactNode | ((ref: TInputRef) => React.ReactNode)
}
type TInputRef = React.RefObject<HTMLInputElement | null>

const InputWithButton: React.FC<InputWithButtonProps> = ({
    children, 
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.container}>
        <Input {...props} ref={inputRef}/>
        {typeof children === 'function' ? children(inputRef) : children}
    </div>
  )
}

export default InputWithButton