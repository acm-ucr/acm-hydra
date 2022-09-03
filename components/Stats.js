import React from "react";
import { Row, Col } from "react-bootstrap";

const Stats = () => {
	return (
		<Row className='font-lexend text-5xl decoration-acm-black text-acm-black font-semibold flex justify-between items-center whitespace-nowrap'>
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
				1000+ alumni
			</Col>
			<Col
				sm={12}
				md={6}
				lg={3}
				className='flex justify-center whitespace-nowrap'
			>
				50+ socials
			</Col>
			<Col
				sm={12}
				md={6}
				lg={3}
				className='flex justify-center whitespace-nowrap'
			>
				100+ workshops
			</Col>
		</Row>
	);
};

export default Stats;
