import React from "react";
import { Row, Col } from "react-bootstrap";

const Clubroom = () => {
	return (
		<Row className='flex justify-center bg-acm-blue rounded-2xl mx-auto w-2/3 px-4 py-5 mt-4'>
			<Col className='font-lexend text-acm-black font-medium'>
				<p className='text-3xl'>ACM Clubroom</p>
				<p className='text-xl'>blah</p>
				<p className='text-xl'>
					here are the perks:
					<>
						<li className='pl-5'></li>
					</>
				</p>
			</Col>
			<Col>
				<img alt='' src='image3.jpg' />
			</Col>
		</Row>
	);
};

export default Clubroom;
