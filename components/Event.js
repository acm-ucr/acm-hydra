import React from "react";
import Card from "react-bootstrap/Card";

const Event = props => {
	if (props.isCalendarEvent) {
		return (
			<div className='bg-black rounded-3xl'>
				<Card className='border-none border-white bg-transparent font-lexend lg:py-12 lg:p-8'>
					<Card.Body className='flex justify-evenly'>
						<Card.Title className='w-1/6'>
							<p
								className='text-4xl inline'
								style={{ color: props.event.textColor }}
							>
								{props.event.month}
								<br />
								{props.event.day}
								<br />
								{props.event.year}
							</p>
						</Card.Title>
						<div className='w-4/6'>
							<Card.Title>
								<p
									className='text-4xl inline break-normal'
									style={{ color: props.event.textColor }}
								>
									{props.event.type}
								</p>
							</Card.Title>
							<div className='text-white text-xl'>
								<Card.Text>
									{props.event.time}
									<br />
									{props.event.place}
									<br />
									{props.event.ledBy}
									<br />
									<br />
									{props.event.description}
								</Card.Text>
							</div>
						</div>
					</Card.Body>
				</Card>
			</div>
		);
	} else {
		return (
			<Card className='bg-black font-lexend shadow-[10px_-8px_0px_0px_black'>
				<Card.Body className='flex justify-evenly'>
					<Card.Title className='w-1/6'>
						<p className='text-3xl inline text-white'>
							{props.month}
							<br />
							{props.day}
							<br />
							{props.year}
						</p>
					</Card.Title>
					<div className='w-4/6'>
						<Card.Title>
							<p className='text-3xl inline text-white'>
								{props.type}
							</p>
						</Card.Title>
						<div className='text-white'>
							<Card.Text>
								{props.time}
								<br />
								{props.place}
								<br />
								<br />
								{props.description}
							</Card.Text>
						</div>
					</div>
				</Card.Body>
			</Card>
		);
	}
};

{
}

export default Event;
