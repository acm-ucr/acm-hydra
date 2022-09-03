import React from "react";
import { Row, Col } from "react-bootstrap";

const Introduction = () => {
	return (
		<Row className='text-acm-black font-lexend flex justify-between items-center w-11/12 mx-auto'>
			<Col className='text-center'>
				<p className='text-3xl font-semibold mx-auto whitespace-nowrap navbar-expand'>
					We are ACM @ UCR
				</p>
				<p className='text-xl font-normal mx-auto w-11/12 pt-5'>
					ACM at UCR is the largest student-run technical organization
					with a focus on Computer Science. Our goal is to help our
					members develop their technical and professional skills to
					help them in school and the tech industry. We aim to
					accomplish our goal by providing technical workshops,
					professional events, and many more opportunities for our
					members to excel.
				</p>
			</Col>
			<Col>
				<img alt='acm @ ucr logo' src='acm-ucr-logo.png' />
			</Col>
		</Row>
	);
};

export default Introduction;
