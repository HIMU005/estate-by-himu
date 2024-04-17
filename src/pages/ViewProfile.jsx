import { useContext } from "react";
import { AuthContext } from "../routes/provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ViewProfile = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const {
        email,
        photoURL,
        displayName,
        phoneNumber,
    } = user;
    // console.log(email, photoURL, phoneNumber, displayName);
    return (
        <div className="w-1/2 mx-auto mt-12">
            <Helmet>
                <title>E-State/View-Profile</title>
            </Helmet>
            <div className="flex gap-5 items-center">
                <h1 className="text-xl">Your Email: </h1>
                <h2 className="border-2 border-black rounded-2xl p-2 px-4 bg-yellow-200">{email}</h2>
            </div>

            <div className="flex gap-5 items-center">
                <h1 className="text-xl">Your Name: </h1>
                {
                    displayName ?
                        <h2 className="border-2 border-black rounded-2xl p-2 px-4">{displayName}</h2> :
                        <h2 className="border-2 border-black rounded-2xl p-2 px-4">Not available</h2>
                }
            </div>


            <div className="flex gap-5 items-center">
                <h1 className="text-xl">photo </h1>
                {
                    photoURL ?
                        <img className="text-red-500" src={photoURL} alt="Not available or Image not valid" /> :
                        <h2 className="border-2 border-black rounded-2xl p-2 px-4">Not available </h2>
                }
            </div>

            <div className="flex gap-5 items-center">
                <h1 className="text-xl">Your Phone Number: </h1>
                {
                    phoneNumber ?
                        <h2 className="border-2 border-black rounded-2xl p-2 px-4">{phoneNumber}</h2> :
                        <h2 className="border-2 border-black rounded-2xl p-2 px-4">Not Available</h2>
                }
            </div>

            <h2>Want to Updade? <Link to={'/update'} className="btn-link">Click here</Link></h2>

        </div>
    );
};

export default ViewProfile;