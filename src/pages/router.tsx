import { createBrowserRouter } from "react-router";
import NotFoundPage from "./NotFoundPage";
import HelloPage from "./HelloPage";
import HelloLayout from "../app/layouts/HelloLayout";
import SignInPage from "./auth/SignInPage";
import SignUpPage from "./auth/SignUpPage";
import MainLayout from "../app/layouts/MainLayout";
import LessonLayout from "../app/layouts/LessonLayout";
import MainPage from "./modules/MainPage";
import ModulePage from "./modules/ModulePage";
import LessonPage from "./lessons/LessonPage";
import TaskPage from "./lessons/TaskPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HelloLayout />,
        children: [
            {
                index: true,
                element: <HelloPage />,
            },
            {
                path: 'auth/signin',
                element: <SignInPage />
            },
            {
                path: 'auth/signup',
                element: <SignUpPage />
            },
        ]
    },
    {
        path: '/modules',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: ':id',
                element: <ModulePage />
            }
        ]
    },
    {
        path: '/lesson',
        element: <LessonLayout />,
        children: [
            {
                path: ':lesson_id',
                element: <LessonPage />
            },
            {
                path: ':lesson_id/task/',
                element: <TaskPage />
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])