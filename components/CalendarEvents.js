import React, { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Events from "./Events.js";
import { Row, Col } from "react-bootstrap";
import Filter from "./Filter.js";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Event from "./Event.js";

const mLocalizer = momentLocalizer(moment);

const filters = [
	{
		topic: "Meetings",
		color: "#82aaff",
	},
	{
		topic: "Career",
		color: "#c792ea",
	},
	{
		topic: "Socials",
		color: "#ff5370",
	},
	{
		topic: "Workshops",
		color: "#ffd700",
	},
];
const CustomToolbar = event => {
	return (
		<div className=''>
			<Row className=''>
				<Col
					xs={3}
					className=' w-full flex justify-start items-center text-3xl font-lexend font-bold'
				>
					<FaArrowLeft
						onClick={() => event.onNavigate("PREV")}
						className='hover:text-acm-darkgray hover:cursor-pointer'
					/>
					<div className='text-center text-5xl p-1'>
						{event.date.getMonth() + 1 < 10
							? `0${event.date.getMonth() + 1}`
							: event.date.getMonth() + 1}
						<br />
						{event.date.getFullYear() % 100}
					</div>
					<FaArrowRight
						onClick={() => event.onNavigate("NEXT")}
						className='hover:text-acm-darkgray hover:cursor-pointer'
					/>
				</Col>
				<Col
					xs={9}
					className=' w-full flex justify-end items-center m-0 p-0'
				>
					<Row className=' w-full m-0 p-0 flex justify-end items-center '>
						{filters.map((filter, index) => {
							return (
								<Col
									key={index}
									xs={4}
									sm={4}
									lg={2}
									className='m-1 p-0'
								>
									<Filter
										topic={filter.topic}
										color={filter.color}
									/>
								</Col>
							);
						})}
					</Row>
				</Col>
			</Row>
		</div>
	);
};

const CustomEvent = ({ title, event }) => {
	return (
		<div className='font-lexend p-1'>
			<p className='inline whitespace-nowrap'>
				{title}
				<br />
				{event.location}
				<nbsp /> - <nbsp />
				{event.start.toLocaleTimeString(navigator.language, {
					hour: "2-digit",
					minute: "2-digit",
				})}
			</p>
		</div>
	);
};

const CalendarEvents = () => {
	const [eventInfo, setEventInfo] = useState({});

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
						onSelectEvent={event => {
							setEventInfo(event);
						}}
						eventPropGetter={event => {
							return { style: { backgroundColor: event.color } };
						}}
						dayPropGetter={event => {
							const bg =
								new Date(event).toLocaleDateString() ==
								new Date().toLocaleDateString()
									? "#c3e88d"
									: "white";
							return {
								style: {
									background: bg,
									margin: 0,
									padding: 0,
								},
							};
						}}
					/>
				</div>
			</div>
			<div className='w-4/5'>
				<Event event={eventInfo} isCalendarEvent={true} />
			</div>
		</section>
	);
};

export default CalendarEvents;
