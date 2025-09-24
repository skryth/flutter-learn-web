import tasksRoute from "../../libs/models/API/routes/tasks";
import { useAppDispatch } from "../../app/store/hooks";
import useCatchError from "../useCatchError";
import { setTaskExplanation, setTaskExplanationLoading, type TaskStringCmp, type TaskType, type TaskWithAnswers } from "../../app/store/slices/taskSlice";

const useFetchCheckAnswer = () => {
    const dispatch = useAppDispatch();
    const catchError = useCatchError();

    const fetchCheckAnswer = async (    
        answer_id: TaskStringCmp['id'] | TaskWithAnswers['id'],
        task_type: TaskType,
        user_answer: string
    ) => {
        try {
            dispatch(setTaskExplanationLoading(true))
            const explanation = await tasksRoute.checkTask(answer_id, task_type, user_answer);
            dispatch(setTaskExplanation(explanation));
            return explanation;
        } catch (error) {
            catchError(error)
        } finally {
            dispatch(setTaskExplanationLoading(false))
        }
    }
    return fetchCheckAnswer;
}
export default useFetchCheckAnswer;