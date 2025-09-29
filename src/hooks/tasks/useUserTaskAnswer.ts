import { useCallback, useState } from 'react'
import { useAppSelector } from '../../app/store/hooks';
import useFetchCheckAnswer from './useFetchCorrectAnswer';

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
    const task = useAppSelector(state => state.task.task);
    const fetchCheckAnswer = useFetchCheckAnswer();
    
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

    const checkAnswer = async () => {
        if (!task?.task_type) return;
        
        const explanation = await fetchCheckAnswer(
            task.task_type === 'string_cmp' ? task.answers[0].id : userAnswer.answer.id!, 
            task.task_type, 
            userAnswer.answer.answer_text
        );
        setUserAnswer(c => ({...c, answerType: explanation?.is_correct ? "success" : "wrong"}))
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