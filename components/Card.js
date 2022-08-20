import React from "react";
import Card from "react-bootstrap/Card";

class Block extends React.Component {
	render() {
		return (
			// have one shadow white and one black right behind it looking like a border
			<div className='flex justify-center'>
				<Card
					style={{
						width: "15rem",
						backgroundColor: "black",
						borderRadius: 25,
						boxShadow: "12px -13px white, 14px -16px black",
					}}
				>
					<Card.Body>
						<br />
						<div className='flex justify-evenly '>
							<div className='columns-1 text-blue-500'>
								<Card.Title>09</Card.Title>
								<Card.Title>21</Card.Title>
								<Card.Title>22</Card.Title>
							</div>

							<div className='columns-1'>
								<div className='text-blue-500'>
									<Card.Title>General Meeting</Card.Title>
								</div>
								<div className='text-white'>
									<Card.Title>5-6 pm</Card.Title>
									<Card.Subtitle>WCH 127</Card.Subtitle>
									<br />
									<Card.Text>blah blah</Card.Text>
								</div>
							</div>
						</div>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

{
}

export default Block;
