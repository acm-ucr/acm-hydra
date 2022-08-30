import React from "react";
import { Row, Col } from "react-bootstrap";
import Event from "./Event";
import { Events } from "./Events.js";

const upcoming = Events.filter(event => {
	return event.start > new Date();
}).slice(0, 3);

const Upcoming = () => {
	return (
		<div className='flex justify-content items-center flex-col'>
			<text className='flex justify-center text-5xl font-bold'>
				Upcoming Events
			</text>
			<br />
			<Row className='w-11/12'>
				{upcoming.map((event, index) => (
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
