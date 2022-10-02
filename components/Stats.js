import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Stats = () => {
	return (
		<Row className='mb-20 font-lexend text-4xl font-medium decoration-acm-black text-acm-black flex justify-between items-center whitespace-nowrap mx-auto w-11/12'>
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
