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
		start: new Date(2022, 8, 6, 12, 1, 0),
		end: new Date(2022, 8, 6, 11, 45, 0),
	},
	{
		id: 1,
		title: "Long Event",
		start: new Date(2022, 8, 7, 12, 1, 0),
		end: new Date(2022, 8, 7, 11, 45, 0),
	},

	{
		id: 2,
		title: { title: "POGGERS", time: "5PM" },
		start: new Date(2022, 8, 13, 12, 1, 0),
		end: new Date(2022, 8, 13, 11, 45, 0),
	},
];

const CustomToolbar = event => {
	// console.log(event);

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

const CustomEvent = event => {
	return (
		<div>
			{event.title.title}
			<br />
			{event.title.time}
			{/* {event.slotStart.getHours()}<br />
            {event.slotStart.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}<br />
            {event.slotEnd.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })} */}
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
						// step={30}
						// views={["month"]}
						defaultView='month'
						components={{
							event: CustomEvent,
							toolbar: CustomToolbar,
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default CalendarEvents;
