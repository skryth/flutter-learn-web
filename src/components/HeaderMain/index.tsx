import Container from '../ui/Container'
import styles from './index.module.css'
import Logo from '../Logo'
import UserAvatar from '../UserAvatar'

const HeaderMain = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <UserAvatar />
        </div>
      </Container>
    </header>
  )
}

export default HeaderMain