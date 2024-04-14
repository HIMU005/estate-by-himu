import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    // console.log(children);
    const { user, loading } = useContext(AuthContext);
    // if (loading) <h2 className="text-7xl font-black text-center">Loading</h2>;

    if (user) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;