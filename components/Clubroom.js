import React from "react";
import { Row, Col } from "react-bootstrap";

const Clubroom = () => {
	return (
		<Row className='flex justify-between items-center bg-acm-blue rounded-2xl mx-auto w-2/3 px-4 pt-5 pb-4 mt-4'>
			<Col sm={6} className='font-lexend text-acm-black font-medium'>
				<p className='text-3xl'>ACM Clubroom</p>
				<p className='text-xl'>
					{
						"The club room is the premier spot for members to work, socialize, or do a bit of both! We'll often hold workshops and socials in the same room, so it's a good place to know about. You'll also find members of other clubs hanging out here, so it's a great spot to expand your network. It's open almost 24/7, with times varying every quarter."
					}
				</p>
				<p className='text-xl'>
					Here are the perks:
					<>
						<li className='pl-5'>
							Full whiteboard walls and tables
						</li>
						<li className='pl-5'>Programming books</li>
						<li className='pl-5'>Lockers</li>
						<li className='pl-5'>Snacks</li>
						<li className='pl-5'>Drinks</li>
						<li className='pl-5'>
							A couch to nap on between classes
						</li>
					</>
				</p>
			</Col>
			<Col sm={6}>
				<img alt='' src='image3.jpg' />
			</Col>
		</Row>
	);
};

export default Clubroom;
