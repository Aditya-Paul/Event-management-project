
import { useLoaderData } from "react-router-dom";
import DocsDetails from "./DocsDetails/DocsDetails";
import Navbar from "../Navbar/Navbar";


const Docs = () => {
    const service_data = useLoaderData();


    return (
        <>
            <Navbar></Navbar>
            <div className="pt-16 md:pt-20 lg:pt-0" >

                {
                    service_data.map(item => <DocsDetails key={item.id} value={item}></DocsDetails>)
                }
            </div>
        </>

    );
};

export default Docs;