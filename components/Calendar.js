import React from "react";
import Filter from "./Filter";
import { Row, Col } from "react-bootstrap";

const Calendar = () => {
	return (
		<div>
			<Row className='w-5/6 p-1'>
				<Col xs={4} sm={3} lg={2} className='mb-1'>
					<Filter topic={"Meetings"} color={"#82aaff"} />
				</Col>
				<Col xs={4} sm={3} lg={2} className='mb-1'>
					<Filter topic={"Career"} color={"#c792ea"} />
				</Col>
				<Col xs={4} sm={3} lg={2} className='mb-1'>
					<Filter topic={"Socials"} color={"#ff5370"} />
				</Col>
				<Col xs={4} sm={3} lg={2} className='mb-1'>
					<Filter topic={"Workshops"} color={"#ffd700"} />
				</Col>
			</Row>
		</div>
	);
};

export default Calendar;
