import { useCallback, useState } from 'react'
import { useAppSelector } from '../../app/store/hooks';
import useFetchCheckAnswer from './useFetchCorrectAnswer';
import useCatchError from '../useCatchError';

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
    const task = useAppSelector(state => state.task.task!);
    const fetchCheckAnswer = useFetchCheckAnswer();
    const catchError = useCatchError();
    
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

    const checkAnswer = async () => {
        try {
            const explanation = await fetchCheckAnswer(userAnswer.answer.id!, task.task_type, userAnswer.answer.answer_text);
            callSetUserAnswerType(explanation?.is_correct ? "success" : "wrong");
        } catch (error) {
            catchError(error)
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