import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Vortex } from "react-loader-spinner";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    // console.log(children);
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (<Vortex
            visible={true}
            height="180"
            width="180"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}

        />)
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}