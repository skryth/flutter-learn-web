import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import modulesSlice from './slices/modulesSlice'
import taskSlice from './slices/taskSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        modules: modulesSlice,
        task: taskSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch