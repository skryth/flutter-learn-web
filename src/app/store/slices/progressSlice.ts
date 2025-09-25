import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface ProgressState {
    progress: Progress | null,
    loading: boolean,
}
export interface Progress {
    total_lessons: number,
    completed_lessons: number,
    correct_answers: number,
    total_answers: number,
}

const progressSlice = createSlice({
    name: 'progress',
    initialState: {
        progress: null,
        loading: false,
    } as ProgressState,
    reducers: {
        setProgress: (state, action: PayloadAction<ProgressState['progress']>) => {
            state.progress = action.payload;
        },
        setProgressLoading: (state, action: PayloadAction<ProgressState['loading']>) => {
            state.loading = action.payload;
        }
    }
})

export const {setProgress, setProgressLoading} = progressSlice.actions;

export default progressSlice.reducer;