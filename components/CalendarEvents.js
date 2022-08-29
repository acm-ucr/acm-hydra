import React from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Events from "./Events.js";
import { Row, Col } from "react-bootstrap";
import Filter from "./Filter.js";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
		<div>
			<Row>
				<Col className='flex justify-start items-center text-3xl font-lexend font-bold'>
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
				<Col className='flex justify-end items-center '>
					{filters.map((filter, index) => {
						return (
							<Col
								key={index}
								xs={4}
								sm={3}
								lg={2}
								className='m-1'
							>
								<Filter
									topic={filter.topic}
									color={filter.color}
								/>
							</Col>
						);
					})}
				</Col>
			</Row>
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
