import React from "react";
import Filter from "./Filter";
import { Row, Col } from "react-bootstrap";

const Calendar = () => {
	return (
		<div>
			<Row className='w-3/6'>
				<Col>
					<Filter topic={"General Meeting"} color={"#82aaff"} />
				</Col>
				<Col>
					<Filter
						topic={"Professional Development"}
						color={"#c792ea"}
					/>
				</Col>
				<Col>
					<Filter topic={"Socials"} color={"#ff5370"} />
				</Col>
				<Col>
					<Filter topic={"Workshops"} color={"#ffd700"} />
				</Col>
			</Row>
		</div>
	);
};

export default Calendar;
