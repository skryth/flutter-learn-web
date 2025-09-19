import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Storage from "../../../libs/models/Storage";
interface UserState {
    login: string | null,
    loading: boolean,
    progress: UserProgress | null
}
export interface UserProgress {
    count_lessons: number,
    count_leaned_lessons: number,
    count_tasks: number,
    count_correct_tasks: number
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: Storage.get('login'),
        loading: false,
        progress: Storage.get('progress')
    } as UserState,
    reducers: {
        setUserLogin: (state, action: PayloadAction<UserState['login']>) => {
            state.login = action.payload;
            Storage.set('login', action.payload);
        },
        setUserLoading: (state, action: PayloadAction<UserState['loading']>) => {
            state.loading = action.payload;
        },
        // setUserProgress: (state, action: PayloadAction<UserState['progress']>) => {
        //     state.progress = action.payload;
        // },
        // todo
    }
})

export const {setUserLogin, setUserLoading} = userSlice.actions;

export default userSlice.reducer;