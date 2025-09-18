import { createBrowserRouter } from "react-router";
import NotFoundPage from "./NotFoundPage";
import HelloPage from "./HelloPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HelloPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])