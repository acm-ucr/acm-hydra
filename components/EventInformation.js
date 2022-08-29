import React from "react";
import Card from "react-bootstrap/Card";

const EventInformation = ({ event }) => {
	return (
		<div className='bg-black rounded-3xl'>
			<Card className='border-none border-white bg-transparent font-lexend py-12 px-8'>
				<Card.Body className='flex justify-evenly'>
					<Card.Title className='w-1/6'>
						<p
							className='text-4xl inline'
							style={{ color: event.textColor }}
						>
							{event.month}
							<br />
							{event.day}
							<br />
							{event.year}
						</p>
					</Card.Title>
					<div className='w-5/6'>
						<Card.Title>
							<p
								className='text-4xl inline'
								style={{ color: event.textColor }}
							>
								{event.type}
							</p>
						</Card.Title>
						<div className='text-white text-xl'>
							<Card.Text>
								{event.time}
								<br />
								{event.place}
								<br />
								{event.ledBy}
								<br />
								<br />
								{event.description}
							</Card.Text>
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

{
}

export default EventInformation;
