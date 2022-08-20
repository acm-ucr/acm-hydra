import React from "react";
import Calendar from "../components/Calendar";
import PastEvents from "../components/PastEvents";
import Topic from "../components/Topic";

const Events = () => {
	return (
		<div>
			<Calendar />
			<PastEvents />
			<Topic
				Topic='course planning'
				BackgroundColor='#43B9AD'
				TextColor='black'
			/>
		</div>
	);
};

export default Events;

// DO NOT EDIT
