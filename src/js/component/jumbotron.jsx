import React from "react";


//create your first component
const Jumbotron = () => {
	return (

<div className="jumbotron py-4 my-3 bg-light">
  <h1 className="display-4 mx-2">Hello, world!</h1>
  <p className="lead mx-2">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4 mx-2"></hr>
  <p className=" mx-2">It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <p className="lead mx-2">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
	);
};

export default Jumbotron;
