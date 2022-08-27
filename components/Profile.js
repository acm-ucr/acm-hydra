import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Profile = ({ month, day, year, image, name, place }) => {
	return (
		<Card className='bg-blue-300 font-lexend'>
			<Card.Body className='flex justify-evenly'>
				<Card.Title className='w-1/6'>
					<p className='text-3xl inline text-white'>
						{month}
						<br />
						{day}
						<br />
						{year}
					</p>
				</Card.Title>
				<div className='w-4/6'>
					<Card.Title>
						<p className='text-3xl inline text-white'>{image}</p>
					</Card.Title>
					<div className='text-white'>
						<Card.Text>
							{name}
							<br />
							{place}
						</Card.Text>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Profile;
