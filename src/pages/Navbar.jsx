import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../routes/provider/AuthProvider";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
    const { user, setUser, logOut } = useContext(AuthContext);
    // const { photoURL, email } = user;

    const handleSignOut = () => {
        logOut()
            .then(setUser(null))
            .catch(error => console.log(error))
    }

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
        <li><NavLink to={'/update'}>Update Profile</NavLink></li>
        <li><NavLink to={'/profile'}>View Profile</NavLink></li>
    </>

    return (
        <div className="mt-4">
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
                    <NavLink to={"/"} className="btn btn-ghost text-2xl">E-State</NavLink>
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
                                user && <p className="text-sm">{user.email}</p>
                            }
                        </span>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                            <div className="w-10 rounded-full">
                                {
                                    user ?
                                        <>
                                            <div className="tooltip" data-tip="Home">
                                                <button className="tooltip" data-tip="ok">
                                                    <img src={user.photoURL} alt="Not found" />
                                                </button>
                                            </div>
                                        </> :
                                        <Link to={'/login'}>
                                            <CgProfile className="text-4xl" />
                                        </Link>
                                }
                            </div>
                        </div>
                    </div>

                    {
                        user ? <>
                            <button onClick={handleSignOut} className="btn btn-primary btn-outline">logOut</button>
                        </> :
                            <>
                                <Link to={"/login"} className="btn btn-secondary btn-outline">SignIn</Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;