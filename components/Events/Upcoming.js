import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { HiCalendar } from "react-icons/hi";
// import styles from "./Upcoming.module.css";
// import { actb_action, atcb_init } from "add-to-calendar-button";

/* import "add-to-calendar-button/assets/css/atcb.min";*/

/* const atcb_action = () => {
	React.useEffect(atcb_init, []);
	return (
		<div className='atcb' style={{ display: "none" }}>
			{JSON.stringify({
				name: "Some event",
				startDate: "2022-01-14",
				endDate: "2022-01-18",
				options: ["Google"],
				timeZone: "Europe/Berlin",
				trigger: "click",
				iCalFileName: "Reminder-Event",
			})}
		</div>
	);
};*/

export const Upcoming = () => {
	return (
		<div className='flex justify-end py-10'>
			<label>
				<h4 className='text-center'>Upcoming Events</h4>
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
											{/* Tried using CDM */}
											{/* <link
												rel='stylesheet'
												href='https://cdn.jsdelivr.net/npm/add-to-calendar-button@1.9.0/assets/css/atcb.min.css'
											></link>
											<script
												src='https://cdn.jsdelivr.net/npm/add-to-calendar-button@1.9.0'
												defer
											></script> */}
											{/* <div class='atcb'>
												{"{"}
												"name":"Add the title of your
												event",
												"startDate":"2022-02-21",
												"endDate":"2022-03-24",
												"options":[ "Google" ]{"}"}
											</div> */}
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
									{/* <Button variant="primary">Add to your Google Calendar</Button> */}
									<a
										className='footer-link'
										href='https://google.com'
										target='_blank'
										rel='noreferrer'
									>
										<HiCalendar />
									</a>
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
									{/* <Button variant="primary">Add to your Google Calendar</Button> */}
									<a
										className='footer-link'
										href='https://google.com'
										target='_blank'
										rel='noreferrer'
									>
										<HiCalendar />
									</a>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</label>
		</div>
	);
};
