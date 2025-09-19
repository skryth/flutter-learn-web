import Button from '../ui/Button'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import styles from './index.module.css'

const HeaderHello = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <div className={styles.buttons}>
            <Button bg='secondary' color='darkblue' to='/auth/signin'>Войти</Button>
            <Button to='/auth/signup'>Начать</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default HeaderHello