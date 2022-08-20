import React from "react";
import { Row, Col } from "react-bootstrap";
import Topic from "../components/Topic";

const Learn = () => {
	return (
		<div className='font-lexend text-lg'>
			{" "}
			<div className='flex justify-center items-center font-lexend font-bold text-4xl mb-4'>
				Learn
			</div>
			<Row>
				<Col className='flex justify-around'>
					professional
					<Topic />
				</Col>
				<Col className='flex justify-center items-center'>
					technical
					<Topic />
				</Col>
				<Col className='flex justify-around'>
					academic
					<Topic />
				</Col>
			</Row>
		</div>
	);
};

export default Learn;
