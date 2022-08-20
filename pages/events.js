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
				backgroundcolor='#43B9AD'
				textcolor='black'
			/>
		</div>
	);
};

export default Events;

// DO NOT EDIT
