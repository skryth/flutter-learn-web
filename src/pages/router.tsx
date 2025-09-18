import { createBrowserRouter } from "react-router";
import NotFoundPage from "./NotFoundPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: 'a'
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])