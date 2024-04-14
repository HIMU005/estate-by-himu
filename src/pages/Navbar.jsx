import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../routes/provider/AuthProvider";

const Navbar = () => {
    const { user, setUser, logOut } = useContext(AuthContext);
    console.log(user);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                setUser(null),
                    console.log(result)
            })
    }

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
        <li><NavLink to={'/update'}>Update Profile</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <NavLink to={"/"} className="btn btn-ghost text-xl">E-State</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                {/* profile  */}
                <div className="navbar-end">
                    <div className="flex justify-center items-center">
                        <span>
                            {
                                user && <span className="text-sm">{user.email}</span>
                            }
                        </span>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    {
                        user && <button onClick={handleSignOut} className="btn btn-primary btn-outline">logOut</button>
                    }
                    {
                        user || <Link to={"/login"} className="btn btn-secondary btn-outline">SignIn</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;