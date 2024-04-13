import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdPhotos } from "react-icons/io";

const Register = () => {
    const [passError, setPassError] = useState("");
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const photoUrL = data.photoUrl;
        const password = data.password;
        setPassError("");

        if (password.length < 6) {
            setPassError("Password required 6 characters or longer!!");
            return
        }
        if (!/(?=.*[A-Z]).+/.test(password)) {
            setPassError('Password must contain at least one uppercase letter');
            return;
        }
        if (!/(?=.*[a-z]).+/.test(password)) {
            setPassError('Password must contain at least one lowercase letter');
            return;
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto space-y-3 mt-10">

                {/* name  */}
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" {...register("name")} className="grow" placeholder="Username" />
                </label>
                {/* email  */}
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="email" {...register("email", { required: true })} className="grow" placeholder="Email" />
                    {errors.email && <span className="text-sm text-red-500 font-bold">This field is required</span>}
                </label>
                {/* photoUrL */}
                <label className="input input-bordered flex items-center gap-2">
                    <IoMdPhotos />
                    <input type="text" {...register("photoUrl")} className="grow" placeholder="Search" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input type="password" {...register("password", { required: true })} className="grow" placeholder="Your password" />
                    {errors.password && <span className="text-sm text-red-500 font-bold">This field is required</span>}
                    {
                        passError && <span className="text-sm font-bold text-red-600">{passError}</span>
                    }

                </label>
                <button className="btn btn-primary btn-outline w-full">Register</button>
            </form>
        </div>
    );
};

export default Register;