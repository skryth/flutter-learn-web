import CodeWithInput from '../components/CodeWithInput'
import FillCodeTask from '../components/FillCodeTask'
import ChoiceTask from '../components/ChoiceTask'
import type { UserAnswer, UserSelectAnswer } from './tasks/useUserTaskAnswer'
import type { TaskStringCmp, TaskType, TaskWithAnswers } from '../app/store/slices/taskSlice'
interface RenderTaskProps {
  userAnswer: UserAnswer, 
  task: TaskStringCmp | TaskWithAnswers, 
  setUserAnswerText: (value: string) => void, 
  checkAnswer: VoidFunction, 
  setUserAnswer: (value: UserSelectAnswer) => void
}

const useRenderTaskByType = (type: TaskType) => {
  const RenderTask: React.FC<RenderTaskProps> = ({userAnswer, task, setUserAnswerText, checkAnswer, setUserAnswer}) => {
    if (type === 'string_cmp') {
      return (
        <CodeWithInput 
          disabled={Boolean(userAnswer.answerType)}
          code={task.question} 
          inputValue={userAnswer.answer.answer_text} 
          setValue={setUserAnswerText}
          onEnter={checkAnswer} 
        />
      )
    } else if (type === 'fill_code') {
      return (
        <FillCodeTask 
          code={task.question}
          options={task.task_type === 'fill_code' ? task.answers : []}
          onSelect={setUserAnswer}
          selectedOption={userAnswer.answer}
          checked={Boolean(userAnswer.answerType)}
        />
      )
    } else if(type === 'choice') {
      return (
        <ChoiceTask 
          options={task.task_type === 'choice' ? task.answers : []}
          onSelect={setUserAnswer}
          selectedOption={userAnswer.answer}
          checked={Boolean(userAnswer.answerType)}
        />
      )
    }
  }

  return {RenderTask}
}

export default useRenderTaskByType