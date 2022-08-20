import React from "react";
import { Row, Col } from "react-bootstrap";

const Learn = () => {
	return (
		<div className='font-Arial text-lg'>
			{" "}
			<div className='flex justify-center items-center font-Arial font-bold text-4xl mb-4'>
				Learn
			</div>
			<Row>
				<Col className='flex justify-around'>professional</Col>
				<Col className='flex justify-center items-center'>
					technical
				</Col>
				<Col className='flex justify-around'>academic</Col>
			</Row>
		</div>
	);
};

export default Learn;
