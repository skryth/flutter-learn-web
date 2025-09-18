import React from 'react'
import styles from './index.module.css'

interface ContainerProps {
    children: React.ReactNode;    
}
const Container: React.FC<ContainerProps> = ({
    children
}) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default Container