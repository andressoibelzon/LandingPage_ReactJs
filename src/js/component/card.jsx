import React from "react";


//create your first component
const Card = () => {
	return (
        <div className="">
<div className="card">
  <img className="card-img-top" src="http://placekitten.com/268/180" alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
	);
};

export default Card;
