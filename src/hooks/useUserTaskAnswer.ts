import { useCallback, useState } from 'react'
import { exampleTasks } from '../libs/contants/example';

export type UserAnswerType = "success" | "wrong" | null;
export interface UserSelectAnswer {
    id: null | string,
    answer_text: string
}
export interface UserAnswer {
    answer: UserSelectAnswer,
    answerType: UserAnswerType
}

const useUserTaskAnswer = () => {
    // todo: task state to useFetchTask
    const [task, setTask] = useState(exampleTasks[2]);
    
    const [userAnswer, setUserAnswer] = useState<UserAnswer>({
        answer: {
            id: null,
            answer_text: ''
        },
        answerType: null,
    })
    const callSetUserAnswerFull = useCallback(
        (value: UserAnswer['answer']) => setUserAnswer(c => ({...c, answer: value})), 
    []);

    const callSetUserAnswerText = useCallback(
        (value: UserAnswer['answer']['answer_text']) => setUserAnswer(c => ({
            ...c, answer: {...c.answer, answer_text: value}
    })), []);

    const callSetUserAnswerType = useCallback(
        (value: UserAnswer['answerType']) => setUserAnswer(c => ({...c, answerType: value})), 
    []);

    const checkAnswer = () => {
        if (task.task_type === 'string_cmp') {
            callSetUserAnswerType(userAnswer.answer.answer_text === task.server_answer_by_id ? "success" : "wrong")
        } else {
            callSetUserAnswerType(userAnswer.answer.id === task.correct_id ? "success" : "wrong")
        }
    }

  return {
    setUserAnswer: callSetUserAnswerFull, 
    setUserAnswerText: callSetUserAnswerText,
    checkAnswer,
    userAnswer,
    task
    }
}

export default useUserTaskAnswer