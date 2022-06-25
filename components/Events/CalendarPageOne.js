import React from "react";
// import Calendar from "@ericz1803/react-google-calendar";
import { Upcoming } from "../../components/Events/Upcoming";

import { Col, Row, Container } from "react-bootstrap";

// const API_KEY = "";
// let calendars = [
//   {
//     calendarId: "",
//   },
// ];

const CalendarPageOne = () => {
	return (
		<Container>
			<Row className='align-items-center'>
				<Col sm={11} lg={9}>
					{/* <Calendar apiKey={API_KEY} calendars={calendars} /> */}
				</Col>
				<Col sm={12} lg={3}>
					<Upcoming />
				</Col>
			</Row>
		</Container>
	);
};

export default CalendarPageOne;
