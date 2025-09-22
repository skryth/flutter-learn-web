import Container from '../../../components/ui/Container'
import { Typography } from '../../../components/ui/Typography'
import ButtonCheckTask from '../../../components/ButtonCheckTask'
import EmulatorFlutter from '../../../components/EmulatorFlutter'
import useUserTaskAnswer from '../../../hooks/useUserTaskAnswer'
import useRenderTaskByType from '../../../hooks/useRenderTaskByType'
import { taskTitle } from '../../../libs/contants/task'
import styles from './index.module.css'

const TaskPage = () => {
  const {checkAnswer, userAnswer, setUserAnswer, setUserAnswerText, task} = useUserTaskAnswer();
  const {RenderTask} = useRenderTaskByType(task.task_type)
  return (
<Container>
  <Typography as='h1' weight='bold' size='xxl' style={{marginBlock: '2.1875rem 0.3125rem'}}>
    {taskTitle(task.task_type)}
  </Typography>
  <Typography size='md' style={{marginBottom: '2rem'}}>
    {task.task_type === 'choice' ? task.question : 'Заполни пропущенное слово в коде приложения Flutter'}
  </Typography>
  
  <div className={`${styles.row} ${task.task_type === 'choice' ? styles.col : ''}`}>
    <div className={styles.task}>
      <RenderTask 
        task={task} 
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer} 
        setUserAnswerText={setUserAnswerText} 
        checkAnswer={checkAnswer} 
      />
      <div className={styles.questions}> {/* нужно ли? */}
        <ButtonCheckTask 
          disabled={userAnswer.answer.answer_text.length === 0}
          userAnswerType={userAnswer.answerType} 
          checkAnswer={checkAnswer} 
        />
      </div>
    </div>
    {task.task_type !== 'choice' && <EmulatorFlutter userAnswerType={userAnswer.answerType} />}
  </div>
</Container>
  )
}

export default TaskPage