import Container from '../../../components/ui/Container'
import { Typography } from '../../../components/ui/Typography'
import ButtonCheckTask from '../../../components/ButtonCheckTask'
import EmulatorFlutter from '../../../components/EmulatorFlutter'
import useUserTaskAnswer from '../../../hooks/useUserTaskAnswer'
import styles from './index.module.css'
import useRenderTaskByType from '../../../hooks/useRenderTaskByType'

const TaskPage = () => {
  const {checkAnswer, userAnswer, setUserAnswer, setUserAnswerText, task} = useUserTaskAnswer();
  const {RenderTask} = useRenderTaskByType(task.task_type)
  return (
<Container>
  <Typography as='h1' weight='bold' size='xxl' style={{marginBlock: '2.1875rem 0.3125rem'}}>
    Заполни пропуск
  </Typography>
  <Typography size='md' style={{marginBottom: '2rem'}}>
    Заполни пропущенное слово в коде приложения Flutter
  </Typography>
  
  <div className={styles.row}>

    <div className={styles.task}>
      <RenderTask 
        task={task} 
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer} 
        setUserAnswerText={setUserAnswerText} 
        checkAnswer={checkAnswer} 
      />
      <div className={styles.questions}>
        <ButtonCheckTask 
          userAnswerType={userAnswer.answerType} 
          checkAnswer={checkAnswer} 
        />
      </div>
    </div>

    <EmulatorFlutter userAnswerType={userAnswer.answerType} />

  </div>
</Container>
  )
}

export default TaskPage