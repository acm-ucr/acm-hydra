import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Event from "./Event";
import axios from "axios";

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

const Upcoming = ({ size }) => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://www.googleapis.com/calendar/v3/calendars/${
					process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
				}/events?key=${
					process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
				}&singleEvents=true&orderBy=starttime&timeMin=${new Date().toISOString()}&maxResults=${size}`,
			)
			.then(response => {
				const calendarEvents = response.data.items.filter(a => {
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
						a.description.startsWith("General:") ||
						a.description.startsWith("Technical:") ||
						a.description.startsWith("Social:") ||
						a.description.startsWith("Career:") ||
						a.description.startsWith("Academic:")
					);
				});

				setEvents(calendarEvents);
			});
	}, [size]);

	return (
		<div className='w-full mb-20 flex justify-content items-center flex-col'>
			<p className='flex justify-center text-center text-acm-black font-lexend text-heading'>
				Upcoming Events
			</p>
			<br />
			<Row className='w-11/12 flex justify-center items-stretch'>
				{events.length !== 0 ? (
					events.slice(0, size).map((event, index) => (
						<Col className='p-3' md={6} lg={4} key={index}>
							<Event
								title={event.summary}
								location={event.location}
								shadow={event.shadow}
								start={event.start}
								end={event.end}
								description={event.description.replace(
									event.description.split(" ")[0],
									"",
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
		</div>
	);
};

export default Upcoming;
