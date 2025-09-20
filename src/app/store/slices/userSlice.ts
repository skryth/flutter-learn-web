import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Storage from "../../../libs/models/Storage";
interface UserState {
    login: string | null,
    loading: boolean,
}


const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: Storage.get('login'),
        loading: false,
    } as UserState,
    reducers: {
        setUserLogin: (state, action: PayloadAction<UserState['login']>) => {
            state.login = action.payload;
            Storage.set('login', action.payload);
        },
        setUserLoading: (state, action: PayloadAction<UserState['loading']>) => {
            state.loading = action.payload;
        }
    }
})

export const {setUserLogin, setUserLoading} = userSlice.actions;

export default userSlice.reducer;