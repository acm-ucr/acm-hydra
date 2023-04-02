import React, { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import Events from "./data/Events.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CustomToolbar from "./CustomToolbar.js";
import CustomEvent from "./CustomEvent.js";
import axios from "axios";

import Event from "./Event.js";
import Modal from "./Modal.js";

const mLocalizer = momentLocalizer(moment);

const colorMappings = {
	social: "!bg-acm-red",
	career: "!bg-acm-lightpurple",
	general: "!bg-acm-blue",
	technical: "!bg-acm-orange",
	academic: "!bg-acm-marine",
};

const colorMappingsText = {
	social: "text-acm-red",
	career: "text-acm-lightpurple",
	general: "text-acm-blue",
	technical: "text-acm-orange",
	academic: "text-acm-marine",
};

const colorMappingsBorder = {
	social: "border-acm-red",
	career: "border-acm-lightpurple",
	general: "border-acm-blue",
	technical: "border-acm-orange",
	academic: "border-acm-marine",
};

const colorMappingsShadow = {
	social: "shadow-acm-red",
	career: "shadow-acm-lightpurple",
	general: "shadow-acm-blue",
	technical: "shadow-acm-orange",
	academic: "shadow-acm-marine",
};

const CalendarEvents = () => {
	const [modalEvent, setModalEvent] = useState(null);
	const [calendarEvents, setCalendarEvents] = useState([]);

	useEffect(() => {
		// setEvents(
		// 	Events.filter(event => {
		// 		return event.start > new Date();
		// 	}).slice(0, 8)
		// );

		axios
			.get(
				`https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
			)
			.then(response => {
				const calendarEvents = response.data.items
					.filter(a => {
						a.start = new Date(a.start.dateTime);
						a.end = new Date(a.end.dateTime);

						a.color =
							colorMappings[
								`${a.description
									.split(" ")[0]
									.toLowerCase()
									.replace(":", "")}`
							];

						a.textColor =
							colorMappingsText[
								`${a.description
									.split(" ")[0]
									.toLowerCase()
									.replace(":", "")}`
							];

						a.border =
							colorMappingsBorder[
								`${a.description
									.split(" ")[0]
									.toLowerCase()
									.replace(":", "")}`
							];

						a.shadow =
							colorMappingsShadow[
								`${a.description
									.split(" ")[0]
									.toLowerCase()
									.replace(":", "")}`
							];

						return (
							(a.description.startsWith("General:") ||
								a.description.startsWith("Technical:") ||
								a.description.startsWith("Social:") ||
								a.description.startsWith("Career:") ||
								a.description.startsWith("Academic:")) &&
							new Date(a.start) > new Date()
						);
					})
					.sort((a, b) => {
						return new Date(a.start) - new Date(b.start);
					});
				console.log(calendarEvents);
				setCalendarEvents(calendarEvents);
			})
			.catch(error => {
				console.log("Error: ", error);
			});
	}, []);

	return (
		<section className='w-full flex justify-center items-center flex-col mt-[12vh]'>
			<p className='text-center font-lexend flex justify-center text-heading m-0 pt-4'>
				Calendar of Events
			</p>
			<div className='mb-5 w-11/12 flex justify-center items-center'>
				<div className='h-[110vh] w-full relative'>
					<Calendar
						className='font-lexend w-full m-0 p-0'
						events={calendarEvents}
						localizer={mLocalizer}
						defaultView='month'
						views={["month"]}
						components={{
							event: CustomEvent,
							toolbar: CustomToolbar,
						}}
						eventPropGetter={event => {
							return { className: `${event.color}` };
						}}
						dayPropGetter={event => {
							const bg =
								new Date(event).toLocaleDateString() ==
								new Date().toLocaleDateString()
									? "!bg-acm-green"
									: "!bg-acm-white";
							return {
								className: `${bg}`,
								style: {
									margin: 0,
									padding: 0,
								},
							};
						}}
						onSelectEvent={event => {
							setModalEvent(event);
						}}
					/>
					<Modal event={modalEvent} setState={setModalEvent} />
				</div>
			</div>

			<Row className='w-11/12 mb-20 flex justify-center'>
				<p className='text-center flex justify-center text-heading'>
					Upcoming Events
				</p>
				{calendarEvents.length ? (
					calendarEvents.slice(0, 8).map((event, index) => (
						<Col className='p-3' md={6} lg={3} key={index}>
							<Event
								title={event.summary}
								location={event.location}
								shadow={event.shadow}
								start={event.start}
								end={event.end}
								description={event.description.replace(
									event.description.split(" ")[0],
									""
								)}
							/>
						</Col>
					))
				) : (
					<Col className='text-text flex justify-center text-center text-acm-black font-lexend p-3'>
						No upcoming events, please check back later!
					</Col>
				)}
			</Row>
		</section>
	);
};

export default CalendarEvents;
