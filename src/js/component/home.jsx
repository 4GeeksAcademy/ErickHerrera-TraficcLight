import React from "react";
import TrafficLight from "./trafficlight"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div style={{ textAlign: 'center', color:"white"}}>
			<h2>Semáforo</h2>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
				<TrafficLight/>
			</div>
		</div>
	);
};

export default Home;
