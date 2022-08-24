import React from "react";
import { Row, Col } from "react-bootstrap";

const Vision = () => {
	return (
		<Row className='font-lexend flex justify-between items-center w-5/6 mx-auto'>
			<Col sm={6} className='text-center'>
				<p className='text-6xl font-semibold flex justify-center mx-auto'>
					Our Vision
				</p>
				<p className='text-3xl font-normal flex justify-center mx-auto w-10/12 pt-3'>
					Our Vision is simple: We want to improve our members
					professionally, technically, and personally. We want to help
					our members grow throughout their college career, whether
					they enter as a first-year university student or as a
					transfer student.
				</p>
			</Col>
			<Col sm={6}>
				<img alt='picture frame component' src='' />
			</Col>
		</Row>
	);
};

export default Vision;
