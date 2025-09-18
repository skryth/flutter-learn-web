import { createBrowserRouter } from "react-router";
import NotFoundPage from "./NotFoundPage";
import HelloPage from "./HelloPage";
import HelloLayout from "../app/layouts/HelloLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HelloLayout />,
        children: [
            {
                index: true,
                element: <HelloPage />
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])