import React from 'react'
import Button from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Typography } from '../ui/Typography'
import styles from './index.module.css'
import type { UserAnswerType } from '../../hooks/tasks/useUserTaskAnswer'
import { useAppSelector } from '../../app/store/hooks'
import useFetchNextLesson from '../../hooks/lessons/useFetchNextLesson'

interface ButtonCheckTaskProps {
    userAnswerType: UserAnswerType
    checkAnswer: VoidFunction
    disabled?: boolean
}

const ButtonCheckTask: React.FC<ButtonCheckTaskProps> = ({
    userAnswerType,
    checkAnswer,
    disabled = false
}) => {    
    const explanationText = useAppSelector(state => state.task.explanation.explanation?.explanation);
    const fetchNextLesson = useFetchNextLesson()

    if (!userAnswerType) return (
        <Button 
            disabled={disabled}
            bg={userAnswerType ? userAnswerType : 'primary'}
            onClick={checkAnswer}
        >
            Проверить
        </Button>
    )
  return (
    <>
        <div className={styles.row}>
            <Button
                onClick={fetchNextLesson}
                bg={userAnswerType}
            >
                Дальше
            </Button>
            <div className={styles.rowMessage}>
                <Icon name={userAnswerType === 'success' ? 'check' : userAnswerType} size={19} />
                <Typography color={userAnswerType} size='lg' weight='bold' uppercase >
                    {userAnswerType === 'success' ? 'Здорово!' : 'Неверно'}
                </Typography>
            </div>
        </div>
        <div className={styles.explanation}>
            <Typography color='darkblue' size='lg' weight='bold' uppercase style={{
                position: 'absolute',
                top: '-0.9rem',
                left: '1rem'
            }}>
                Объяснение
            </Typography>
            <Typography color='light' weight='medium'>
                {explanationText}
            </Typography>
        </div>
    </>
  )
}

export default ButtonCheckTask