import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <div className="text-5xl">404</div>,
        children: ([
            {
                path: "/",
                element: <Home />
            }
        ])
    }
])

export default router;