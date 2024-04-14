import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    // console.log(children);
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    // if (loading) <h2 className="text-7xl font-black text-center">Loading</h2>;

    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
};

export default PrivateRoute;