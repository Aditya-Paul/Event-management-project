import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleMcard from "../SingleMcard/SingleMcard";


const MemberCard = () => {
    const [data,setData] = useState({});
    const {id} = useParams()
    const jesonData = useLoaderData();

    useEffect(()=>{
        const getdata = jesonData?.find(item=>item.id === id)
        setData(getdata)
    },[id,])
    return (
        <div>
            <SingleMcard value={data}></SingleMcard>
        </div>
    );
};

export default MemberCard;