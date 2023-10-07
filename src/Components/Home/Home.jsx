import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import Service_cards from "./Services/Service_cards";
import Reservation from "../Reservation/Reservation";
import Team_member from "../Team_member/Team_member";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
    const service_data = useLoaderData();
    console.log(service_data)

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/teams.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
    }, []);

    console.log('team', data)
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>

            {/* service */}
            <div className="max-w-fit mx-auto md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {
                            service_data.map(data => <Service_cards key={data._id} value={data}></Service_cards>)
                        }
            </div>

            <Reservation></Reservation>

            {/* team */}
            <div className="text-center">
                <div>
                    <h2 className="text-3xl font-medium"><span className="text-2xl font-light text-orange-500">Adevents</span>Team Members</h2>
                    <p className="text-black font-normal">We make our events smarts  & impactfully by prefessional team members</p>
                </div>
                <div className="max-w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {
                        data.map(singledata => <Team_member key={singledata.id} team={singledata}></Team_member>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;