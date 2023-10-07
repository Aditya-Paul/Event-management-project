import { CiUser, CiMobile1, CiLocationArrow1, CiMenuBurger } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
const Reservatino_form = () => {

    return (
        <>
        <Navbar></Navbar>
        <div className="">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        {/* Name */}
                        <div className="form-control">
                            <div className="flex gap-2 mb-1">
                                <CiUser />
                                <span className="label-text text-pink-300">Name</span>
                            </div>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        
                        {/* Mobile */}
                        <div className="form-control">
                            <div className="flex gap-2 mb-1">
                                <CiMobile1 />
                                <span className="label-text text-pink-300">Mobile</span>
                            </div>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <div className="flex gap-2 mb-1">
                                <AiOutlineMail />
                                <span className="label-text text-pink-300">Email</span>
                            </div>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        {/* Address */}
                        <div className="form-control">
                            <div className="flex gap-2 mb-1">
                                <CiLocationArrow1 />
                                <span className="label-text text-pink-300">Location</span>
                            </div>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        {/* Type */}
                        <div className="form-control">
                            <div className="flex gap-2 mb-1">
                                <CiMenuBurger />
                                <span className="label-text text-pink-300">Type of events</span>
                            </div>
                            <select id="cars" name="cars" placeholder="type of events " className="bordered border-2 rounded-lg h-12">
                                <option value="Wedding Planning">Wedding Planning</option>
                                <option value="Birthday Party Coordination">Birthday Party Coordination</option>
                                <option value="Corporate Event Management">Corporate Event Management</option>
                                <option value="Concert Production">Concert Production</option>
                                <option value="Private Party Hosting">Private Party Hosting</option>
                                <option value="Conference Planning">Conference Planning</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Reservation</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
        
    );
};

export default Reservatino_form;