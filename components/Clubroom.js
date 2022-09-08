import React from "react";
import { Row, Col } from "react-bootstrap";

const Clubroom = () => {
	return (
		<Row className='flex justify-between font-lexend text-acm-black mx-auto w-2/3'>
			<Row className='text-3xl font-semibold flex justify-center'>
				ACM Clubroom
			</Row>
			<Row className='bg-acm-blue rounded-2xl items-center px-4 pt-5 pb-4 mt-4'>
				<Col sm={6} className='text-xl font-base'>
					<p>
						We will often hold academic, professional, and technical
						workshops and events in this room! Located in Wingston
						Chung Hall 127, behind Bytes, you can expect a lively
						environment to study, socialize, and learn new things!
					</p>
					<p>
						Here are the perks:
						<>
							<li className='pl-5'>Whiteboard walls</li>
							<li className='pl-5'>Programming books</li>
							<li className='pl-5'>Lockers</li>
							<li className='pl-5'>Snacks</li>
							<li className='pl-5'>Drinks</li>
						</>
					</p>
				</Col>
				<Col sm={6}>
					<img alt='' src='image3.jpg' />
				</Col>
			</Row>
		</Row>
	);
};

export default Clubroom;
