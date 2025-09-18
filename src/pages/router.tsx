import { createBrowserRouter } from "react-router";
import NotFoundPage from "./NotFoundPage";
import HelloPage from "./HelloPage";
import HelloLayout from "../app/layouts/HelloLayout";
import SignInPage from "./auth/SignInPage";
import SignUpPage from "./auth/SignUpPage";

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
        path: '*',
        element: <NotFoundPage />
    }
])