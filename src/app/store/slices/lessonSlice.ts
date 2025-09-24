import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface LessonState {
    lesson: Lesson | null,
    loading: boolean,
}
export interface Lesson {
    id: string,
    title: string,
    content: string,
    module_id: string,
    status: boolean
}

const lessonSlice = createSlice({
    name: 'lesson',
    initialState: {
        lesson: null,
        loading: true,
    } as LessonState,
    reducers: {
        setLesson: (state, action: PayloadAction<LessonState['lesson']>) => {
            state.lesson = action.payload;
        },
        setLessonLoading: (state, action: PayloadAction<LessonState['loading']>) => {
            state.loading = action.payload;
        }
    }
})

export const {setLesson, setLessonLoading} = lessonSlice.actions;

export default lessonSlice.reducer;