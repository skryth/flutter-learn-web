import type { ExampleFillCodeTask, ExampleStringCmpTask, TaskType } from '../libs/contants/example'
import CodeWithInput from '../components/CodeWithInput'
import ChoiceTask from '../components/ChoiceTask'
import type { UserAnswer, UserSelectAnswer } from './useUserTaskAnswer'
interface RenderTaskProps {
  userAnswer: UserAnswer, 
  task: ExampleStringCmpTask | ExampleFillCodeTask, 
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
        <ChoiceTask 
          code={task.question}
          options={task.task_type === 'fill_code' ? task.answers : []}
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