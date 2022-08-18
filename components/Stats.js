import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Stats = () => {
	return (
		<div>
			<Container className='justify-center mx-auto'>
				<Row className='font-lexend text-5xl decoration-black font-semibold justify-center mx-auto text-center'>
					<Col xs={4} md={2} className='flex justify-center'>
						10+ members
					</Col>
					<Col xs={4} md={2} className='flex justify-center'>
						10 alumni
					</Col>
					<Col xs={4} md={2} className='flex justify-center'>
						10 socials
					</Col>
					<Col xs={4} md={2} className='flex justify-center'>
						10 workshops
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Stats;
