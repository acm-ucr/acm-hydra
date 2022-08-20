import React from "react";
import Calendar from "../components/Calendar";
import PastEvents from "../components/PastEvents";
import Topic from "../components/Topic";

const Events = () => {
	return (
		<div>
			<Calendar />
			<PastEvents />
			<Topic Topic='resume' BackgroundColor='#43B9AD' TextColor='white' />
		</div>
	);
};

export default Events;

// DO NOT EDIT
