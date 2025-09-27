import { useRef } from "react";
import { useAppDispatch } from "../../app/store/hooks";
import useCatchError from "../useCatchError";
import { setTaskExplanation, setTaskExplanationLoading, type TaskStringCmp, type TaskType, type TaskWithAnswers } from "../../app/store/slices/taskSlice";
import tasksRoute from "../../libs/models/API/routes/tasks";
import toast from "react-hot-toast";
import { useMinimumDelay } from "../useMinimumDelay";

const useFetchCheckAnswer = () => {
    const dispatch = useAppDispatch();
    const catchError = useCatchError();
    const withMinimumDelay = useMinimumDelay();
    const toastRef = useRef<string>(null);

    const fetchCheckAnswer = async (    
        answer_id: TaskStringCmp['id'] | TaskWithAnswers['id'],
        task_type: TaskType,
        user_answer: string
    ) => {
        try {
            toastRef.current = toast.loading('Пожалуйста, подождите');
            dispatch(setTaskExplanationLoading(true))
            const explanation = await withMinimumDelay(
                tasksRoute.checkTask(answer_id, task_type, user_answer)
            );
            dispatch(setTaskExplanation(explanation));
            return explanation;
        } catch (error) {
            catchError(error)
        } finally {
            toastRef.current && toast.dismiss(toastRef.current);
            dispatch(setTaskExplanationLoading(false))
        }
    }
    return fetchCheckAnswer;
}
export default useFetchCheckAnswer;