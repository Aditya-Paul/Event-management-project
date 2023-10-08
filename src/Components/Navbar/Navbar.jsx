import { Link, NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, userlogout } = useContext(AuthContext)

    const handlesignout = () => {
        userlogout()
            .then(res => {
                console.log(res.user)
                Swal.fire("Good job!", "Logged out successfully", "success");
            })
            .catch()
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 2000000000,
        });
    }, [])

    const links = <>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/reservation' >Reservation</NavLink></li>
        <li><NavLink to='/description'>Blog</NavLink></li>

    </>
    return (
        <div data-aos="flip-left" data-aos-delay="1000000 " className="">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Events Creation</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user ?
                            <div className="flex flex-col md:flex-row  items-center gap-2">
                                <h2>{user.displayName}</h2>
                                <div>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                </div>

                                <button className="btn" onClick={handlesignout}><Link to='/'>Logout</Link>
                                </button>
                            </div>
                            :
                            <div className="space-x-3">
                                <button className="btn " ><Link to='/login'>Login</Link></button>
                                <button className="btn " ><Link to='/register'>Register</Link></button>
                            </div>
                    }

                </div>
            </div>
        </div >
    );
};

export default Navbar;