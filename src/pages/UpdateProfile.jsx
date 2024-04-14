import { useContext } from "react";
import { AuthContext } from "../routes/provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    if (!user) navigate("/login")
    return (
        <div>
            <h3>Update Your Profile</h3>

        </div>
    );
};

export default UpdateProfile;