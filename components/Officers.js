import React from "react";
import Profile from "./Profile";
import { Row, Col } from "react-bootstrap";

const Officers = () => {
	return (
		<div>
			<text className='flex justify-center text-5xl font-bold'>
				Upcoming Events
			</text>
			<br />
			<Row>
				<Col>
					<Profile
						month='01'
						day='02'
						year='03'
						image='general'
						name='3'
						place='WCH'
					/>
				</Col>
				<Col>
					<Profile
						month='01'
						day='02'
						year='03'
						image='general'
						name='3'
						place='WCH'
					/>
				</Col>
				<Col>
					<Profile
						month='01'
						day='02'
						year='03'
						image='general'
						name='3'
						place='WCH'
					/>
				</Col>
				<Col>
					<Profile
						month='01'
						day='02'
						year='03'
						image='general'
						name='3'
						place='WCH'
					/>
				</Col>
			</Row>
		</div>
	);
};

export default Officers;
