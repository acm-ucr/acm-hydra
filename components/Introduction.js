import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Introduction = () => {
	return (
		<Container>
			<Col className='font-lexend'>
				<Row className='text-7xl font-semibold'>We are ACM @ UCR</Row>
				<Row className='text-5xl font-normal'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Arcu, amet ut orci, at sed parturient quis sagittis a.
				</Row>
			</Col>
      
			<Col>
				<img className='' alt='' src='./acm-ucr-logo.png' />
			</Col>
		</Container>
	);
};

export default Introduction;
