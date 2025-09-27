import Container from "../../components/ui/Container"
import { Typography } from "../../components/ui/Typography"
import Button from "../../components/ui/Button"
import styles from './index.module.css'

const NotFoundPage = () => {

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.content}>
          <Typography as="h1" weight="bold" size="xxl" className={styles.title}>
            404
          </Typography>

          <Typography as="h2" weight="bold" size="xxl" className={styles.subtitle}>
            Страница не найдена
          </Typography>

          <Typography color="light" weight="medium" className={styles.description}>
            Возможно, страница была перемещена или удалена
          </Typography>

            <Button 
              to="/"
              bg="primary"
              paddingY="md"
            >
              На главную
            </Button>
        </div>
      </div>
    </Container>
  )
}

export default NotFoundPage