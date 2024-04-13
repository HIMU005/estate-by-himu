import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <div>
            <h2>I am root</h2>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;