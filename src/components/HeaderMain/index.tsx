import React from 'react'
import Container from '../ui/Container'
import styles from './index.module.css'
import Logo from '../Logo'
interface HeaderMainProps {
    children: React.ReactNode
}

const HeaderMain: React.FC<HeaderMainProps> = ({
    children
}) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <div className={styles.right}>
            {children}
          </div>
        </div>
      </Container>
    </header>
  )
}

export default HeaderMain