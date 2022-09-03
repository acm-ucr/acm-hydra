import React from "react";
import { Row, Col } from "react-bootstrap";

const Stats = () => {
	return (
		<Row className='font-lexend text-5xl decoration-black font-semibold flex justify-between items-center whitespace-nowrap'>
			<Col
				sm={12}
				md={6}
				lg={3}
				className='flex justify-center whitespace-nowrap'
			>
				500+ members
			</Col>
			<Col
				sm={12}
				md={6}
				lg={3}
				className='flex justify-center whitespace-nowrap'
			>
				10+ alumni
			</Col>
			<Col
				sm={12}
				md={6}
				lg={3}
				className='flex justify-center whitespace-nowrap'
			>
				10 socials
			</Col>
			<Col
				sm={12}
				md={6}
				lg={3}
				className='flex justify-center whitespace-nowrap'
			>
				20 workshops
			</Col>
		</Row>
	);
};

export default Stats;
