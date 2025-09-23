import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { exampleModules } from "../../../libs/contants/example";
interface ModulesState {
    list: Module[],
    loading: boolean
}
export interface Module {
    id: string,
    title: string,
    description: string,
    order_index: number,
    lessons: ModulesStateLesson[]
}
export interface ModulesStateLesson {
    id: string,
    title: string,
    completed: boolean
} 

const modulesSlice = createSlice({
    name: 'modules',
    initialState: {
        list: exampleModules,
        loading: true
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

export const {setModules, setModulesLoading} = modulesSlice.actions;

export default modulesSlice.reducer;


