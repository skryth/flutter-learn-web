import { Link } from 'react-router'
import type { Module, ModulesStateLesson } from '../../app/store/slices/modulesSlice'
import { Icon } from '../ui/Icon'
import ProgressBar from '../ProgressBar'
import { Typography } from '../ui/Typography'
import styles from './index.module.css'
interface ModuleCardProps {
    id: Module['id'],
    title: string,
    order_index: Module['order_index']
    lessons: ModulesStateLesson[],
}
const ModuleCard: React.FC<ModuleCardProps> = ({
    id,
    title,
    order_index,
    lessons,
}) => {
    const completed = lessons.reduce((sum, c) => c.completed ? sum + 1 : sum , 0) 

  return (
    <Link className={styles.card} to={`/modules/${id}`}>
        <div className={styles.content}>
            <Typography as='h3' weight='bold' size='lg'>
                {order_index + 1}.{title}
            </Typography>
            <div>
                <ProgressBar current={completed} max={lessons.length}/>
                <div className={styles.info}>
                    <div className={styles.sum}>
                        <Icon name='book' size={15} />
                        <Typography weight='medium'>
                            уроков: {lessons.length}
                        </Typography>
                    </div>
                    <span className={styles.completed}>
                        {completed}/{lessons.length}
                    </span>
                </div>
            </div>
        </div>
        <button className={styles.button}>
            <Icon name='arrow-right' size={15} />
        </button>
    </Link>
  )
}

export default ModuleCard