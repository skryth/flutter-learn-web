import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
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
    completed: boolean,
    order_index: number
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

export const {setModules, setModulesLoading} = modulesSlice.actions;

export default modulesSlice.reducer;


