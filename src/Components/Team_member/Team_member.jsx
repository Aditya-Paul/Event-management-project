/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Team_member = ({team}) => {
    const {id,image, name,job_position,experience } = team;
    return (
        <div className="flex flex-row gap-4 border-r-8 
        border-b-8 border-b-purple-500">
            <img className="h-52 w-52" src={image} alt="" />
            <div className="space-y-4 pr-2  border-orange-200">
                <h2 className="border-b-2 text-lg font-bold text-pink-400">{name}</h2>
                <p>{job_position}</p>
                <h2>Experience: {experience}</h2>
                <button className="btn text-black bg-gradient-to-r from-violet-500 to-fuchsia-500"><Link to={`/teams/${id}`}>Contact</Link></button>
            </div>
        </div>
    );
};

export default Team_member;