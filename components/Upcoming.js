import React from "react";
import { Row, Col } from "react-bootstrap";
import Event from "./Event";

const Upcoming = () => {
	return (
		<div>
			<text className='flex justify-center text-5xl font-bold m-auto w-11/12'>
				Upcoming Events
			</text>
			<br />
			<Row className='w-11/12 m-auto'>
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
