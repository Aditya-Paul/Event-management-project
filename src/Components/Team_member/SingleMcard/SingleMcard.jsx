/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleMcard = ({value}) => {
    const { name,image, job_position, experience } = value;
    return (
        <div>
            <div className="max-w-fit mx-auto">
                <img className="h-52 w-52" src={image} alt="" />
                <div className="space-y-4 pr-2  border-orange-200 text-center">
                    <h2 className="border-b-2 text-lg font-bold text-pink-400">{name}</h2>
                    <p>{job_position}</p>
                    <h2>Experience: {experience}</h2>
                    <button className="btn text-black bg-gradient-to-r from-violet-500 to-fuchsia-500"><Link to={`/`}>Go Back Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default SingleMcard;