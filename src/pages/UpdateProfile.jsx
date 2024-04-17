/* eslint-disable no-const-assign */
import { useContext, useState } from "react";
import { AuthContext } from "../routes/provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoMdPhotos } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [updateSuccess, setUpdateSuccess] = useState("");
    const [updateError, setUpdateError] = useState("");
    const navigate = useNavigate();
    if (!user) navigate("/login")

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        setUpdateError("");
        setUpdateSuccess("");
        const {
            photoURL,
            displayName,
            phoneNumber,
        } = data;


        updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL, phoneNumber: phoneNumber
            // displayName: "Update name", photoURL: 'update photo', phoneNumber: "my phone number"
        })
            .then(result => {
                console.log(result);
                setUpdateSuccess("Updated Successfully");
            })
            .catch((error) => {
                console.log(error);
                setUpdateError("Something wrong");
            });
    }


    return (
        <div>
            <Helmet>
                <title>E-State/Update-Profile</title>
            </Helmet>
            <form
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto space-y-3 mt-10">

                {/* name  */}
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" {...register("displayName")} className="grow" placeholder="Username" />
                </label>

                {/* photoUrL */}
                <label className="input input-bordered flex items-center gap-2">
                    <IoMdPhotos />
                    <input type="text" {...register("photoURL")} className="grow" placeholder="Your image link" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <FaPhone />

                    <input type="text" {...register("phone", { required: true })} className="grow" placeholder="Your phone number" />
                    {errors.password && <span className="text-sm text-red-500 font-bold">This field is required</span>}


                </label>
                <button type="submit" className="btn btn-primary btn-outline w-full">Submit</button>
                <h2
                    data-aos="fade-left"
                    data-aos-delay="600"
                    data-aos-duration="500"
                    className="text-center">
                    Visit Your Profile <Link to={"/profile"} className="btn btn-link">Click Here</Link>
                </h2>
            </form>
            {
                updateError && <h2 className="text-red-600 text-sm text-center">{updateError}</h2>
            }
            {
                updateSuccess && <h2 className="text-green-600 text-sm text-center">{updateSuccess}</h2>
            }

        </div>
    );
};

export default UpdateProfile;