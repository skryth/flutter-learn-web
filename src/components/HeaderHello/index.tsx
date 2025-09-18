import Button from '../ui/Button'
import Container from '../ui/Container'
import { Icon } from '../ui/Icon'
import { Typography } from '../ui/Typography'
import styles from './index.module.css'

const HeaderHello = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Icon name='logo' size={34}/>
            <Typography as='h1' color='primary' size='md' weight='bold' uppercase>
              Flutter Learn
            </Typography>
          </div>
          <div className={styles.buttons}>
            <Button bg='secondary' color='darkblue' onClick={() => {}}>Войти</Button>
            <Button onClick={() => {}}>Начать</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default HeaderHello