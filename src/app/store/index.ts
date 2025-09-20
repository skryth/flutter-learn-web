import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import modulesSlice from './slices/modulesSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        modules: modulesSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch