import React from 'react'
import Button from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Typography } from '../ui/Typography'
import type { UserAnswerType } from '../../pages/lessons/TaskPage'
import styles from './index.module.css'

interface ButtonCheckTaskProps {
    userAnswer: string,
    userAnswerType: UserAnswerType,
    checkAnswer: VoidFunction
}
const exampleExplanation = "Flutter представляет фреймворк от компании Google, который позволяет создавать кроссплатформенные приложения, которые могут использовать однин и тот же код. Спектр платформ широк - это веб-приложения, мобильные приложения под Android и iOS, графические приложения под настольные операционные системы Windows, MacOS, Linux, а также веб-приложения"

const ButtonCheckTask: React.FC<ButtonCheckTaskProps> = ({
    userAnswer,
    userAnswerType,
    checkAnswer
}) => {
    if (!userAnswerType) return (
        <Button 
            disabled={userAnswer.length === 0}
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
                to='/modules/' 
                bg={userAnswerType}
            >
                На главную
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
                {exampleExplanation}
            </Typography>
        </div>
    </>
  )
}

export default ButtonCheckTask