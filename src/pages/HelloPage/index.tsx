import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import { Image } from '../../components/ui/Image'
import { Typography } from '../../components/ui/Typography'
import styles from './index.module.css'

const HelloPage = () => {
  return (
    <Container>
      <div className={styles.content}>
          <div className={styles.imageWrapper}>
              <Image src='flutter-hello' width={285} height={300}/>
          </div>
          <div className={styles.column}>
              <Typography as='h2' size='xxl' weight='bold'>
                  Эффективный, интересный и веселый способ изучения Flutter!
              </Typography>
              <div className={styles.buttons}>
                <Button to='/auth/signup' paddingY='md'>
                    Зарегистрироваться
                </Button>
                <Button 
                    color='main'
                    bg='secondary' 
                    paddingY='md'
                    to='/auth/signin'
                >
                    Уже есть аккаунт
                </Button>
              </div>
          </div>
      </div>
    </Container>
  )
}

export default HelloPage