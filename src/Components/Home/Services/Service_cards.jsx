/* eslint-disable react/prop-types */
import { AiOutlineArrowRight } from "react-icons/ai";

const Service_cards = ({ value }) => {
    const { image, name, short_description, price } = value;
    return (
        <div className="">
            <div className="card w-96 h-[500px] glass p-2 items-center bg-gray-400">
                <div>
                    <figure><img className="rounded-lg" src={image} alt="car!" /></figure>
                </div>
                <div className="relative text-center">
                    <div className="card-body items-center w-80 absolute right-[-9.5rem] bg-white top-[-2rem] rounded-2xl">
                        <h2 className="card-title">{name}</h2>
                        <p>{short_description}</p>
                        <h2 className="card-title">Price: ${price}</h2>
                        <div className=" ">
                            <button className="btn btn-primary">See details <AiOutlineArrowRight/> </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service_cards;