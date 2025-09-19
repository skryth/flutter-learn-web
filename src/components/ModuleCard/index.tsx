import { Icon } from '../ui/Icon'
import { Typography } from '../ui/Typography'
import styles from './index.module.css'
interface ModuleCardProps {
    title: string,
    lessons: {
        count: number,
        completed: number
    },
}
const ModuleCard: React.FC<ModuleCardProps> = ({
    title,
    lessons,
}) => {
  return (
    <div className={styles.card}>
        <div className={styles.content}>
            <Typography as='h3' weight='bold' size='lg'>
                {title}
            </Typography>
            <div>
                <div className={styles.progressBar}>
                    <div className={styles.userProgress} style={{
                        width: `${(lessons.completed / lessons.count) * 100}%`
                    }}></div>
                </div>
                <div className={styles.info}>
                    <div className={styles.sum}>
                        <Icon name='book' size={15} />
                        <Typography weight='medium'>
                            уроков: {lessons.count}
                        </Typography>
                    </div>
                    <span className={styles.completed}>
                        {lessons.completed}/{lessons.count}
                    </span>
                </div>
            </div>
        </div>
        <button className={styles.button}>
            <Icon name='arrow-right' size={15} />
        </button>
    </div>
  )
}

export default ModuleCard