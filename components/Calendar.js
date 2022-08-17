import React from "react";
import Filter from "./Filter";
import { Row, Col } from "react-bootstrap";

const filterMapping = [
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

const Calendar = () => {
	return (
		<div>
			<Row className='w-5/6 p-1'>
				{filterMapping.map((filter, index) => {
					return (
						<Col key={index} xs={4} sm={3} lg={2} className='mb-1'>
							<Filter topic={filter.topic} color={filter.color} />
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default Calendar;
