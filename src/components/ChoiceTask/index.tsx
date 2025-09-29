import type { TaskWithAnswers } from '../../app/store/slices/taskSlice'
import type { UserSelectAnswer } from '../../hooks/tasks/useUserTaskAnswer'
import shuffleArray from '../../libs/helpers/shuffleArray'
import { Icon } from '../ui/Icon'
import { Typography } from '../ui/Typography'
import styles from './index.module.css'
interface ChoiceTaskProps {
  options: TaskWithAnswers['answers']
  onSelect: (value: UserSelectAnswer) => void
  selectedOption: UserSelectAnswer,
  checked: boolean
}

const ChoiceTask: React.FC<ChoiceTaskProps> = ({
  options,
  onSelect,
  selectedOption,
  checked
}) => {
  return (
    <div className={styles.container}>
        {shuffleArray(options).map(option => (
            <div className={`${styles.row} ${checked ? styles.disabled : ''}`} key={option.id}>
                {option.id === selectedOption.id ?
                    <Icon name='check' size={20}/> 
                : 
                    <div className={styles.cirlce} onClick={() => onSelect(option)}></div>
                }
                <Typography weight='bold' size='sm' uppercase onClick={() => onSelect(option)}>
                    {option.answer_text}
                </Typography>
            </div>
        ))}
    </div>
  )
}

export default ChoiceTask