import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Event from "./Event";
import { Events } from "./data/Events.js";

const Upcoming = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		setEvents(
			Events.filter(event => {
				return event.start > new Date();
			}).slice(0, 3)
		);
	}, []);

	return (
		<div className='w-full mb-20 flex justify-content items-center flex-col'>
			<p className='flex justify-center text-center text-acm-black font-lexend text-heading'>
				Upcoming Events
			</p>
			<br />
			<Row className='w-11/12'>
				{events.map((event, index) => (
					<Col className='p-3' md={6} lg={4} key={index}>
						<Event
							title={event.title}
							location={event.location}
							color={event.color}
							start={event.start}
							end={event.end}
							description={event.description}
						/>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Upcoming;
