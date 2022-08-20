import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Stats = () => {
	return (
		<div>
			<Container>
				<Row className='font-lexend text-4xl decoration-black font-semibold'>
					<Col xs={4} md={3} className='flex justify-center'>
						10+ members
					</Col>
					<Col xs={4} md={3} className='flex justify-center'>
						10 alumni
					</Col>
					<Col xs={4} md={3} className='flex justify-center'>
						10 socials
					</Col>
					<Col xs={4} md={3} className='flex justify-center'>
						10 workshops
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Stats;
