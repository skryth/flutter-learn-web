import ConditionalLoader from '../../components/ui/Loading/ConditionalLoading'
import useFetchProgress from '../../hooks/progress/useFetchProgress'
import { Typography } from '../../components/ui/Typography';
import ProgressBar from '../../components/ProgressBar';
import styles from './index.module.css'

const ProgressPage = () => {
    const {progress, loading} = useFetchProgress();
    const completionPercentage = progress && Math.round((progress.completed_lessons / progress.total_lessons) * 100)
    const successPercentage = progress && Math.round((progress.correct_answers / progress.total_answers) * 100) || 0

    if (!progress && !loading) {
        return (
            <section className={styles.section}>
                <div className={styles.error}>
                    <Typography as='h2' weight='bold' size='xl'>
                        Прогресс не найден
                    </Typography>
                    <Typography color='light' style={{textAlign: 'center'}}>
                        Не удалось загрузить данные прогресса. Возможно, ссылка уже неактуальна.
                    </Typography>
                </div>
            </section>
        )
    }

    return (
        <ConditionalLoader isLoading={loading} center>
            {progress && <section className={styles.section}>
                <div className={styles.header}>
                    <Typography as='h2' weight='bold' size='xxl'>
                        Прогресс 
                    </Typography>
                    <Typography weight='bold' size='xxl' color='main'>
                        {progress.username}
                    </Typography>
                </div>
                <div className={styles.mainProgress}>
                    <div className={styles.percentage}>
                        <Typography weight='bold' size='xxl' color='main'>
                            {completionPercentage}%
                        </Typography>
                        <Typography color='light' size='sm'>общего прогресса</Typography>
                    </div>
                    <ProgressBar current={progress.completed_lessons} max={progress.total_lessons} />
                </div>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <Typography weight='bold' size='lg'>{progress.total_lessons}</Typography>
                        <Typography color='light' size='sm'>всего уроков</Typography>
                    </div>
                    <div className={styles.stat}>
                        <Typography weight='bold' size='lg'>{progress.completed_lessons}</Typography>
                        <Typography color='light' size='sm'>пройдено</Typography>
                    </div>
                    <div className={styles.stat}>
                        <Typography weight='bold' size='lg' color='success'>{progress.total_answers}</Typography>
                        <Typography color='light' size='sm'>решено задач</Typography>
                    </div>
                    <div className={styles.stat}>
                        <Typography weight='bold' size='lg' color='success'>{progress.correct_answers}</Typography>
                        <Typography color='light' size='sm'>правильных ответов</Typography>
                    </div>
                    <div className={`${styles.stat} ${styles.full}`}>
                        <Typography weight='bold' size='xl' color='success'>{successPercentage}%</Typography>
                        <Typography color='light'>успеха</Typography>
                    </div>
                </div>
            </section>}
        </ConditionalLoader>
    )
}

export default ProgressPage