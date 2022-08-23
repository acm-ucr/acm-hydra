import React from "react";
import { Row, Col } from "react-bootstrap";
import Event from "./Event";

const Upcoming = () => {
	return (
		<div>
			<text className='flex justify-center text-4xl font-bold'>
				Upcoming Events
			</text>
			<br />
			<Row>
				<Col>
					<Event
						month='01'
						day='02'
						year='03'
						type='general'
						time='3'
						place='WCH'
						description='blash'
					/>
				</Col>
				<Col>
					<Event
						month='01'
						day='02'
						year='03'
						type='general'
						time='3'
						place='WCH'
						description='blash'
					/>
				</Col>
				<Col>
					<Event
						month='01'
						day='02'
						year='03'
						type='general'
						time='3'
						place='WCH'
						description='blash'
					/>
				</Col>
				<Col>
					<Event
						month='01'
						day='02'
						year='03'
						type='general'
						time='3'
						place='WCH'
						description='blash'
					/>
				</Col>
			</Row>
		</div>
	);
};

export default Upcoming;
