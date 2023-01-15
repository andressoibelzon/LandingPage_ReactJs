import React from "react";
import Card from "./card.jsx";


//create your first component
const Cards = () => {
	return (
        <div className="d-flex justify-content-between py-4 ">
            <Card />
            <Card />
            <Card />
            <Card />


        </div>
	);
};

export default Cards;
