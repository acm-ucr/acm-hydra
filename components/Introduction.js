import React from "react";
import { Row, Col } from "react-bootstrap";

const Introduction = () => {
	return (
		<Row className='font-lexend flex justify-center text-center w-11/12 items-center mx-auto'>
			<Col>
				<Row className='text-7xl font-semibold flex justify-center mx-auto whitespace-nowrap'>
					We are ACM @ UCR
				</Row>
				<Row className='text-5xl font-normal flex justify-center mx-auto w-5/6 pt-4'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Arcu, amet ut orci, at sed parturient quis sagittis a.
				</Row>
			</Col>
			<Col>
				<img alt='acm @ ucr logo' src='acm-ucr-logo.png' />
			</Col>
		</Row>
	);
};

export default Introduction;
