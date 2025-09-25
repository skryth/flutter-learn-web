import { useAppSelector } from '../../app/store/hooks'
import Button from '../ui/Button'
import ConditionalLoader from '../ui/Loading/ConditionalLoading'
import { Typography } from '../ui/Typography'
import styles from './index.module.css'

const UserProgress = () => {
    const {progress, loading} = useAppSelector(state => state.progress);
    
    if (!loading && !progress) {
        return (
            <section className={styles.section}>
                <Typography as='h2' weight='bold' size='xxl'>Прогресс не найден</Typography>
                <Typography color='light' weight='medium' style={{textAlign: 'center'}}>
                    Повторите попытку позже
                </Typography>
            </section>
        )
    }

  return (
    <ConditionalLoader isLoading={loading}>
        <section className={styles.section}>
            <Typography as='h2' weight='bold' size='xxl'>Прогресс</Typography>
            <div className={styles.content}>
                <div className={styles.row}>
                    <Typography color='light' weight='medium'>Всего уроков:</Typography>
                    <Typography color='light' weight='medium'>{progress?.total_lessons}</Typography>
                </div>
                <div className={styles.row}>
                    <Typography color='light' weight='medium'>Пройдено:</Typography>
                    <Typography color='light' weight='medium'>{progress?.completed_lessons}</Typography>
                </div>
                <div className={styles.line}></div>
                <div className={styles.row}>
                    <Typography color='light' weight='medium'>Правильных ответов:</Typography>
                    <Typography color='light' weight='medium'>{progress?.correct_answers}</Typography>
                </div>
            </div>
            <Button>Поделиться прогрессом</Button>
        </section>
    </ConditionalLoader>
  )
}

export default UserProgress