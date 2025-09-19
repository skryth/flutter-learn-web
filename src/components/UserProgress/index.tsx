import Button from '../ui/Button'
import { Typography } from '../ui/Typography'
import styles from './index.module.css'

const UserProgress = () => {
  return (
    <section className={styles.section}>
        <Typography as='h2' weight='bold' size='xxl'>Прогресс</Typography>
        <div className={styles.content}>
            <div className={styles.row}>
                <Typography color='light' weight='medium'>Всего уроков:</Typography>
                <Typography color='light' weight='medium'>31</Typography>
            </div>
            <div className={styles.row}>
                <Typography color='light' weight='medium'>Пройдено:</Typography>
                <Typography color='light' weight='medium'>5</Typography>
            </div>
            <div className={styles.line}></div>
            <div className={styles.row}>
                <Typography color='light' weight='medium'>Правильных ответов:</Typography>
                <Typography color='light' weight='medium'>5</Typography>
            </div>
        </div>
        <Button>Поделиться прогрессом</Button>
    </section>
  )
}

export default UserProgress