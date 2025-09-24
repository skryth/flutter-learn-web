import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { exampleTasks } from "../../../libs/contants/example";
export interface TaskState {
    task: TaskStringCmp | TaskWithAnswers | null,
    loading: boolean,
}
export type TaskType = 'string_cmp' | 'fill_code' | 'choice';

interface TaskRequiredOptions {
    id: string,
    task_type: TaskType,
    question: string,
}
export interface TaskAnswer {
    id: string,
    answer_text: string
}
export interface TaskStringCmp extends TaskRequiredOptions {
  task_type: "string_cmp",
  answers: Pick<TaskAnswer, 'id'>[],
}

export interface TaskWithAnswers {
  task_type: "fill_code" | "choice",
  id: string,
  question: string,
  answers: TaskAnswer[],
//   correct_id: string
}

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        task: exampleTasks[0],
        loading: true,
    } as TaskState,
    reducers: {
        setTask: (state, action: PayloadAction<TaskState['task']>) => {
            state.task = action.payload;
        },
        setTaskLoading: (state, action: PayloadAction<TaskState['loading']>) => {
            state.loading = action.payload;
        }
    }
})

export const {setTask, setTaskLoading} = taskSlice.actions;

export default taskSlice.reducer;