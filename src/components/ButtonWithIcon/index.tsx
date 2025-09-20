import React from 'react'
import Button, { type ButtonProps } from '../ui/Button'
import { Icon } from '../ui/Icon'
import styles from './index.module.css'
interface ButtonWithIcon extends ButtonProps {
    iconName: string,
    iconSize?: number
}

const ButtonWithIcon: React.FC<ButtonWithIcon> = ({
    iconName,
    ...props
}) => {
  return (
    <div className={styles.button}>
        <Button {...props} />
        <Icon name={iconName}/>
    </div>
  )
}

export default ButtonWithIcon