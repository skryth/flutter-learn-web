import { API } from "..";
import type { TaskExplanation, TaskStringCmp, TaskType, TaskWithAnswers } from "../../../../app/store/slices/taskSlice";

const tasksRoute = {
    getTask: (id: TaskStringCmp['id'] | TaskWithAnswers['id']) => {
        return API.get<(TaskStringCmp | TaskWithAnswers)[]>(`/lessons/${id}/tasks`)
    },
    checkTask: (
        answer_id: TaskStringCmp['id'] | TaskWithAnswers['id'],
        task_type: TaskType,
        user_answer: string
    ) => {
        return API.post<TaskExplanation>(`/tasks/check`, { answer_id, task_type, user_answer })
    }
}
export default tasksRoute;