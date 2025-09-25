import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { exampleTasks } from "../../../libs/contants/example";
export interface TaskState {
    task: TaskStringCmp | TaskWithAnswers | null,
    explanation: {
        explanation: TaskExplanation | null,
        loading: boolean,
    },
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
}

export interface TaskExplanation {
    explanation: string,
    image: string,
    is_correct: boolean
} 

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        task: exampleTasks[0],
        explanation: {
            explanation: null,
            loading: false
        },
        loading: false,
    } as TaskState,
    reducers: {
        setTask: (state, action: PayloadAction<TaskState['task']>) => {
            state.task = action.payload;
        },
        setTaskLoading: (state, action: PayloadAction<TaskState['loading']>) => {
            state.loading = action.payload;
        },
        setTaskExplanation: (state, action: PayloadAction<TaskExplanation>) => {
            state.explanation.explanation = action.payload;
        },
        setTaskExplanationLoading: (state, action: PayloadAction<boolean>) => {
            state.explanation.loading = action.payload;
        }
    }
})

export const {setTask, setTaskLoading, setTaskExplanation, setTaskExplanationLoading} = taskSlice.actions;

export default taskSlice.reducer;