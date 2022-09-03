import React from "react";
import Card from "react-bootstrap/Card";

const Event = ({ title, location, color, start, end, description }) => {
	return (
		<div
			className={
				"h-full bg-acm-black rounded shadow-[10px_-8px_0px_0px] shadow-acm-green"
			}
		>
			<Card className='!bg-acm-black font-lexend  !border-none'>
				<Card.Body className='flex justify-evenly'>
					<Card.Title className='w-1/6'>
						<p className='text-4xl inline text-acm-white'>
							{start.getMonth() + 1}
							<br />
							{start.getDate() < 10
								? `0` + start.getDate()
								: start.getDate()}
							<br />
							{start.getFullYear() % 100}
						</p>
					</Card.Title>
					<div className='pl-3'>
						<Card.Title>
							<p className='text-2xl text-acm-white inline'>
								{title}
							</p>
						</Card.Title>
						<div className='text-acm-white text-md'>
							<Card.Text>
								<div className='text-acm-white'>
									{location}
									<nbsp /> - <nbsp />
									{start.toLocaleTimeString("en", {
										hour: "2-digit",
										minute: "2-digit",
									})}
									<br />
								</div>
								{description}
							</Card.Text>
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Event;
