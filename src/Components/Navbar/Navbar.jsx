import { Link, NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 2000000000,
        });
    }, [])

    const links = <>
        <li><NavLink to='/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to='/reservation' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Reservation</NavLink></li>
    </>
    return (
        <div data-aos="flip-left" data-aos-delay="1000000 "className="mt-10">
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
                    <button ><Link to='/login'>Login</Link></button>
                    <button ><Link to='/register'>Register</Link></button>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/2PDYx3x/IMG-3736.jpg" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;