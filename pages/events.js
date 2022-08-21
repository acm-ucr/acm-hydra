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
				topic='course planning'
				backgroundColor='#43B9AD'
				textColor='black'
			/>
		</div>
	);
};

export default Events;

// DO NOT EDIT
