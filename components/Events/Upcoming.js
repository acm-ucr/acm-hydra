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
	);
};
