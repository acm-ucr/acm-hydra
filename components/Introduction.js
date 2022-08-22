import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Introduction = () => {
	return (
		<Container>
			<Row className='font-lexend flex justify-start text-center items-center m-auto'>
				<Row
					sm={3}
					md={3}
					lg={3}
					className='text-7xl font-semibold flex justify-center w-75'
				>
					We are ACM @ UCR
				</Row>
				<Row
					sm={3}
					md={3}
					lg={3}
					className='text-5xl font-normal flex justify-center w-75'
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Arcu, amet ut orci, at sed parturient quis sagittis a.
				</Row>
				<Col sm={3} md={3} lg={3} className=''>
					<img
						className=''
						alt='acm @ ucr logo'
						src='./acm-ucr-logo.png'
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Introduction;
