import React from "react";
import { Row, Col } from "reaxt-bootstrap";
import Filter from "Filter.js";

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

const Filters = () => {
	return (
		<Row className='w-5/6 p-1'>
			{filters.map((filter, index) => {
				return (
					<Col key={index} xs={4} sm={3} lg={2} className='mb-1'>
						<Filter topic={filter.topic} color={filter.color} />
					</Col>
				);
			})}
		</Row>
	);
};

export default Filters;
