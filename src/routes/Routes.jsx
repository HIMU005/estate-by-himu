import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import ErrorState from "../pages/ErrorState";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorState />,
        children: ([
            {
                path: "/",
                element: <Home />
            }
        ])
    }
])

export default router;