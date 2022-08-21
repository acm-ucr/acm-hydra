import React from "react";
import Card from "react-bootstrap/Card";

const Block = ({ month, day, year, type, time, place, description }) => {
	return (
		// have one shadow white and one black right behind it looking like a border

		<Card
			style={{
				width: "15rem",
				backgroundColor: "black",
				borderRadius: 25,
				boxShadow: "12px -13px white, 16px -17px black",
			}}
		>
			<Card.Body>
				<div className='flex justify-evenly '>
					<div className='columns-1 text-blue-500'>
						<Card.Title>{month}</Card.Title>
						<Card.Title>{day}</Card.Title>
						<Card.Title>{year}</Card.Title>
					</div>

					<div className='columns-1'>
						<div className='text-blue-500 text-xlg'>
							<Card.Title>{type}</Card.Title>
						</div>
						<div className='text-white'>
							<Card.Title>{time}</Card.Title>
							<Card.Subtitle>{place}</Card.Subtitle>
							<br />
							<Card.Text>{description}</Card.Text>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

{
}

export default Block;
