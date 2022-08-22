import React from "react";
import { Row, Col } from "react-bootstrap";

const Introduction = () => {
	return (
		<Row className='font-lexend flex justify-center text-center items-center'>
			<Col sm={3} md={3} lg={3} className='w-5/6'>
				<p className='text-7xl font-semibold flex justify-center'>
					We are ACM @ UCR
				</p>
				<p className='text-5xl font-normal flex justify-center'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Arcu, amet ut orci, at sed parturient quis sagittis a.
				</p>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<img
					alt='acm @ ucr logo'
					src='acm-ucr-logo.png'
				/>
			</Col>
		</Row>
	);
};

export default Introduction;
