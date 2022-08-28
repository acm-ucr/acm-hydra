import React from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const mLocalizer = momentLocalizer(moment);

const events = [
	{
		id: 0,
		title: "All Day Event very long title",
		allDay: true,
		start: new Date(2022, 8, 0),
		end: new Date(2022, 8, 1),
	},
	{
		id: 1,
		title: "Long Event",
		start: new Date(2022, 8, 7),
		end: new Date(2022, 8, 10),
	},

	{
		id: 2,
		title: "DTS STARTS",
		start: new Date(2022, 8, 13, 0, 0, 0),
		end: new Date(2022, 8, 20, 0, 0, 0),
	},
];

const CustomToolbar = event => {
	console.log(event);

	return (
		<div>
			<button onClick={() => event.onNavigate("PREV")}>Previous</button>
			{event.date.getMonth() + 1}
			<br />
			{event.date.getFullYear() % 100}
			<button onClick={() => event.onNavigate("NEXT")}>Next</button>
		</div>
	);
};

const CalendarEvents = () => {
	return (
		<section className='w-full flex justify-center items-center flex-col'>
			<div className=' w-11/12 flex justify-center items-center'>
				<div className='h-[100vh] w-full'>
					<Calendar
						className='font-lexend w-full'
						events={events}
						localizer={mLocalizer}
						step={30}
						views={["month"]}
						components={{
							// event: EventComponent,
							toolbar: CustomToolbar,
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default CalendarEvents;
