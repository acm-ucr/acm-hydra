import React from "react";
import CalendarPageOne from "../../components/Events/CalendarPageOne";
import CalendarPage2 from "../../components/Events/CalendarPage2";
import SuggestionsForm from "../../components/Events/SuggestionsForm";

const Events = () => {
	return (
		<div>
			<CalendarPageOne />
			<CalendarPage2 />
			<SuggestionsForm />
		</div>
	);
};

export default Events;
