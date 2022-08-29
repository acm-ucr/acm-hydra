import React from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Events from "./Events.js";

const mLocalizer = momentLocalizer(moment);

const CustomToolbar = event => {
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
		<div className='font-lexend p-1 break-all'>
			<p>
				{event.title}
				<br />
				{event.event.start.toLocaleTimeString(navigator.language, {
					hour: "2-digit",
					minute: "2-digit",
				})}{" "}
				<nbsp /> - <nbsp />
				{event.event.end.toLocaleTimeString(navigator.language, {
					hour: "2-digit",
					minute: "2-digit",
				})}
				<br />
				{event.event.location}
			</p>
		</div>
	);
};

const CalendarEvents = () => {
	return (
		<section className='w-full flex justify-center items-center flex-col'>
			<div className=' w-11/12 flex justify-center items-center'>
				<div className='h-[110vh] w-full'>
					<Calendar
						className='font-lexend w-full'
						events={Events}
						localizer={mLocalizer}
						defaultView='month'
						views={["month"]}
						components={{
							event: CustomEvent,
							toolbar: CustomToolbar,
						}}
						eventPropGetter={event => {
							const backgroundColor = event.color;
							return { style: { backgroundColor } };
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default CalendarEvents;
