import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// todo state structure

interface ModulesState {
    list: Module[],
    loading: boolean
}
export interface Module {
    id: string,
    title: string,
    description: string,
    order_index: number,
    lessons: Lesson[],
    count_completed_lessons: number,
    count_correct_tasks: number
}
export interface Lesson {
    id: string,
    title: string,
    content: string,
    order_index: number,
    is_completed: boolean;
} 

const modulesSlice = createSlice({
    name: 'modules',
    initialState: {
        list: [],
        loading: false
    } as ModulesState,
    reducers: {
        setModules: (state, action: PayloadAction<Module[]>) => {
            state.list = action.payload
        },
        setModulesLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    }
})

export const {setModulesLoading} = modulesSlice.actions;

export default modulesSlice.reducer;