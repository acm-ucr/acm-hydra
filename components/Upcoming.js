import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Event from "./Event";
import EventsContext from "./EventContext";
import { useContext } from "react";
// import Events from "./data/Events.js";

const Upcoming = props => {
	const { events } = useContext(EventsContext);

	return (
		<div className='w-full mb-20 flex justify-content items-center flex-col'>
			<p className='flex justify-center text-center text-acm-black font-lexend text-heading'>
				Upcoming Events
			</p>
			<br />
			<Row className='w-11/12 flex justify-center items-stretch'>
				{events.length !== 0 ? (
					events.slice(0, props.size).map((event, index) => (
						<Col className='p-3' md={6} lg={4} key={index}>
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
		</div>
	);
};

export default Upcoming;
