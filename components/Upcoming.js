import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { HiCalendar } from "react-icons/hi";
import Card from "./Card";

export const Upcoming = () => {
	return (
		<>
			<Card />
			<div className='flex justify-end py-10'>
				Card
				<label>
					<h4 className='text-center'>Past Events</h4>
					<Container>
						<Row>
							<Col sm={6}>
								<Card style={{ width: "15rem" }}>
									<Card.Body>
										<Card.Title>Event Name</Card.Title>
										<Card.Text>
											<p>
												Date:
												<br />
												Time:
												<br />
												Location:
											</p>
										</Card.Text>
									</Card.Body>
								</Card>
								<Card style={{ width: "15rem" }}>
									<Card.Body>
										<Card.Title>Event Name</Card.Title>
										<Card.Text>
											<p>
												Date:
												<br />
												Time:
												<br />
												Location:
											</p>
										</Card.Text>

										<HiCalendar />
									</Card.Body>
								</Card>
								<Card style={{ width: "15rem" }}>
									<Card.Body>
										<Card.Title>Event Name</Card.Title>
										<Card.Text>
											<p>
												Date:
												<br />
												Time:
												<br />
												Location:
											</p>
										</Card.Text>

										<HiCalendar />
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</label>
			</div>
		</>
	);
};

export default Upcoming;
