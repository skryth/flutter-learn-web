import { useParams } from 'react-router'
import Button from '../../../components/ui/Button'
import styles from './index.module.css'

const LessonPage = () => {
    const {lesson_id} = useParams();
    
  return (
    <div>
        <div className={styles.buttons}>
            <Button to='/modules' bg='secondary' color='darkblue' paddingX='sm'>
                На главную
            </Button>
            <Button to={`/lesson/${lesson_id}/task/1`} paddingX='sm'>
                К Заданию
            </Button>
        </div>
    </div>
  )
}

export default LessonPage