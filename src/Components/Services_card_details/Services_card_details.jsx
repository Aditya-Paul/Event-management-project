import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";


const Services_card_details = () => {
    const [card, setcard] = useState({});

    const { id } = useParams()
  
    const Cards = useLoaderData();

    useEffect(() => {

        const getcard = Cards?.find(card => card.id === id);
  
        setcard(getcard);
      }, [id, Cards]);

    return (
        <div className="">
            <SingleCard card={card}></SingleCard>
        </div>
    );
};

export default Services_card_details;