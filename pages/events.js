import React from "react";
import CalendarEvents from "../components/CalendarEvents";
import Upcoming from "../components/Upcoming";

const Events = () => {
	return (
		<div>
			<title>Events</title>
			<CalendarEvents />
			<Upcoming size={8} />
		</div>
	);
};

export default Events;

// DO NOT EDIT
