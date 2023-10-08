/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Service_cards = ({ value }) => {
    const {id, image, name, short_description, price } = value;
    return (
        
        <div className="">
            <div className="card w-96 h-[500px] glass p-2 items-center ">
                <div>
                    <figure><img className="rounded-lg" src={image} alt="car!" /></figure>
                </div>
                <div className="relative text-center">
                    <div className="card-body items-center w-80 absolute right-[-9.5rem] bg-white top-[-2rem] rounded-2xl">
                        <h2 className="card-title">{name}</h2>
                        <p>{short_description}</p>
                        <h2 className="card-title">Price: ${price}</h2>
                        <div className=" ">
                            <button className="btn btn-primary"><Link to={`/services/${id}`}>
                            See details</Link> </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Service_cards;