import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Introduction = () => {
	return (
		<Row className='mb-20 text-acm-black font-lexend flex justify-center items-center w-11/12 mx-auto'>
			<Col xs={12} md={7} lg={8} className='text-center'>
				<p className='text-heading mx-auto inline'>We are </p>
				<p className='text-heading mx-auto sm:inline block'>ACM@UCR</p>
				<p className='text-text mx-auto w-11/12 pt-5'>
					ACM at UCR is the largest student-run technical organization
					with a focus on Computer Science. Our goal is to help our
					members develop their technical and professional skills to
					help them in school and the tech industry. We aim to
					accomplish our goal by providing technical workshops,
					professional events, and many more opportunities for our
					members to excel.
				</p>
			</Col>
			<Col xs={7} sm={5} md={5} lg={4}>
				<img alt='acm @ ucr logo' src='acm-ucr-logo.png' />
			</Col>
		</Row>
	);
};

export default Introduction;
