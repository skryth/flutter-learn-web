import React, { useCallback, useRef, useState } from 'react'
import Input, { type InputProps } from '../ui/Input'
import styles from './index.module.css'

interface InputWithButtonProps extends InputProps {
    children: React.ReactNode | 
    (({inputRef, value}: {inputRef: TInputRef, value: string}) => React.ReactNode)
}
type TInputRef = React.RefObject<HTMLInputElement | null>

const InputWithButton: React.FC<InputWithButtonProps> = ({
    children, 
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState('');
    const onChange = useCallback((value: string) => setValue(value), []);
  return (
    <div className={styles.container}>
        <Input {...props} ref={inputRef} value={value} onChange={onChange}/>
        {typeof children === 'function' ? children({inputRef, value}) : children}
    </div>
  )
}

export default InputWithButton