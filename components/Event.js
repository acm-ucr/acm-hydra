import React from "react";
import Card from "react-bootstrap/Card";

const Event = ({ month, day, year, type, time, place, description }) => {
	return (
		<Card className='bg-black font-lexend shadow-[10px_-8px_0px_0px_black'>
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
						<p className='text-3xl inline text-white'>{type}</p>
					</Card.Title>
					<div className='text-white'>
						<Card.Text>
							{time}
							<br />
							{place}
							<br />
							<br />
							{description}
						</Card.Text>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

{
}

export default Event;
