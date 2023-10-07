import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import Service_cards from "./Services/Service_cards";
import Reservation from "../Reservation/Reservation";

const Home = () => {
    const service_data = useLoaderData();
    console.log(service_data)
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    {
                        service_data.map(data => <Service_cards key={data._id} value={data}></Service_cards>)
                    }
                </div>
            </div>
            <Reservation></Reservation>

        </div>
    );
};

export default Home;