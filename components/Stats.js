import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Stats = () => {
	return (
		<Container>
			<Row className='font-lexend text-5xl decoration-black font-semibold flex justify-between items-center whitespace-nowrap'>
				<Col
					sm={12}
					md={6}
					lg={3}
					className='flex justify-center whitespace-nowrap'
				>
					10+ members
				</Col>
				<Col
					sm={12}
					md={6}
					lg={3}
					className='flex justify-center whitespace-nowrap'
				>
					10+ alumni
				</Col>
				<Col
					sm={12}
					md={6}
					lg={3}
					className='flex justify-center whitespace-nowrap'
				>
					10+ socials
				</Col>
				<Col
					sm={12}
					md={6}
					lg={3}
					className='flex justify-center whitespace-nowrap'
				>
					10+ workshops
				</Col>
			</Row>
		</Container>
	);
};

export default Stats;
