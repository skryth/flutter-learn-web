import { createBrowserRouter } from "react-router";
import NotFoundPage from "./NotFoundPage";
import HelloPage from "./HelloPage";
import HelloLayout from "../app/layouts/HelloLayout";
import AuthPage from './AuthPage'

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
                element: <AuthPage />
            },
            {
                path: 'auth/signup',
                element: <AuthPage />
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])