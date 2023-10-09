/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Team_member = ({team}) => {
    const {id,image, name,job_position,experience } = team;
    return (
        <div className="flex flex-row gap-4  
        border-b-8 border-b-purple-500">
            <div className="">
            <img className=" top-20 h-52 w-52 rounded-xl" src={image} alt="" />
            </div>
            <div className="space-y-4 pr-2 ">
                <h2 className="border-b-2 text-lg font-bold text-purple-500">{name}</h2>
                <p className="text-black">{job_position}</p>
                <h2 className="text-black"> Experience: {experience}</h2>
                <button className="btn text-black bg-gradient-to-r from-violet-100 to-fuchsia-500"><Link to={`/teams/${id}`}>Contact</Link></button>
            </div>
        </div>
    );
};

export default Team_member;