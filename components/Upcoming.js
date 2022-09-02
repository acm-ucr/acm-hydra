import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Event from "./Event";
import { Events } from "./Events.js";

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
		<div className='flex justify-content items-center flex-col'>
			<text className='text-acm-black flex justify-center text-5xl font-bold'>
				Upcoming Events
			</text>
			<br />
			<Row className='w-11/12'>
				{events.map((event, index) => (
					<Col key={index}>
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
