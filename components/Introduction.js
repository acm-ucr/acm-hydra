import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Introduction = () => {
	return (
		<Container>
			<Row className='font-lexend flex justify-start text-center items-center'>
				<Row className='text-7xl font-semibold'>We are ACM @ UCR</Row>
				<Row className='text-5xl font-normal w-75'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Arcu, amet ut orci, at sed parturient quis sagittis a.
				</Row>
				<Col>
					<img className='w-95' alt='' src='./acm-ucr-logo.png' />
				</Col>
			</Row>
		</Container>
	);
};

export default Introduction;
