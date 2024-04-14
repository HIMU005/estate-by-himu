import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import ErrorState from "../pages/ErrorState";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorState />,
        children: ([
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/fakeData.json'),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/update",
                element: <PrivateRoute>
                    <UpdateProfile />
                </PrivateRoute>
            }
        ])
    }
])

export default router;