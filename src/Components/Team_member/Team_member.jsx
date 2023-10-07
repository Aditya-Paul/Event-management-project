/* eslint-disable react/prop-types */


const Team_member = ({team}) => {
    const { name,job_position,experience } = team;
    return (
        <div className="flex flex-row">
            <img className="h-52 w-52" src="https://i.ibb.co/2PDYx3x/IMG-3736.jpg" alt="" />
            <div>
                <h2>{name}</h2>
                <p>{job_position}</p>
                <h2>Experience: {experience}</h2>
            </div>
        </div>
    );
};

export default Team_member;