import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../routes/provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
    const { loginUser, setUser, googleLogIn, gitHubLogIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [show, setShow] = useState(false);

    const located = useLocation();

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();
    const handleToggle = () => {
        setShow(!show);
    }

    const onSubmit = (data) => {
        // const email = data.email;
        // const password = data.password;
        const { email, password } = data;
        setLoginError("");

        loginUser(email, password)
            .then(result => {
                setUser(result.user),
                    navigate(located.state || '/')
            })
            .catch(error => {
                console.log(error);
                setLoginError("Enter Your Email and Password correctly")
            })


    }

    const handleLogInWithGoogle = () => {
        googleLogIn()
            .then(result => {
                setUser(result.user)
                navigate(located.state || "/")
            })
            .catch(error => console.log(error))
    }
    const handleLogInWithGitHub = () => {
        gitHubLogIn()
            .then(result => {
                setUser(result.user)
                navigate(located.state || "/")
            })
            .catch(error => console.log(error))
    }




    return (
        <div>
            <Helmet>
                <title>E-State/Login</title>
            </Helmet>
            <form
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto space-y-3 mt-10">

                {/* email  */}
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="email" {...register("email", { required: true })} className="grow" placeholder="Email" />
                    {errors.email && <span className="text-sm text-red-500 font-bold">This field is required</span>}
                </label>
                {/* password  */}
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input
                        {
                        ...show ? { type: "text" } : { type: "password" }
                        }
                        {...register("password", { required: true })} className="grow" placeholder="Your password" />
                    {
                        !show ? <FiEye onClick={handleToggle} /> : <FiEyeOff onClick={handleToggle} />
                    }
                </label>
                <button type="submit" className="btn btn-primary btn-outline w-full">Login</button>
                {
                    loginError &&
                    <span className="text-red-600 font-bold text-sm">{loginError}</span>
                }
            </form>
            <h2
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="500"
                className="w-1/2 mx-auto">Do not have an account? <Link to={"/register"} className="btn btn-link">Register</Link></h2>
            <div className="flex justify-evenly w-2/3 mx-auto mt-3">
                <button onClick={handleLogInWithGoogle} className="btn btn-primary">Google SignIn</button>
                <button onClick={handleLogInWithGitHub} className="btn btn-secondary">Github SignIn</button>
            </div>
        </div>
    );
};

export default Login;