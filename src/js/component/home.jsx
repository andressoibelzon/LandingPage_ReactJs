import React from "react";
import Card from "./card.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";


//create your first component
const Home = () => {
	return (
		<>
		<div className="container py-3">
		<Navbar />
		<Jumbotron />
		<Cards />
		<Footer />
		</div>
		</>
	);
};

export default Home;
