import React from "react";
import { Row, Col } from "react-bootstrap";
import Topic from "../components/Topic";

const Learn = () => {
	return (
		<div className='font-lexend text-4xl'>
			<div className='flex justify-center items-center font-lexend font-bold text-6xl mb-2'>
				Learn
			</div>
			<Row>
				<Col className='flex flex-col justify-center items-center'>
					professional
					<Topic
						topic='resume'
						backgroundColor='#43B9AD'
						textColor='black'
					/>
					<Topic
						topic='interviews'
						backgroundColor='#43B9AD'
						textColor='black'
					/>
				</Col>
				<Col className='flex flex-col justify-center items-center'>
					technical
					<Topic
						topic='web dev'
						backgroundColor='#243B5A'
						textColor='white'
					/>
					<Topic
						topic='version control'
						backgroundColor='#243B5A'
						textColor='white'
					/>
					<Topic
						topic='data science'
						backgroundColor='#243B5A'
						textColor='white'
					/>
				</Col>
				<Col className='flex flex-col justify-center items-center'>
					academic
					<Topic
						topic='graduate studies'
						backgroundColor='#E37A45'
						textColor='black'
					/>
					<Topic
						topic='research'
						backgroundColor='#E37A45'
						textColor='white'
					/>
					<Topic
						topic='course planning'
						backgroundColor='#E37A45'
						textColor='black'
					/>
				</Col>
			</Row>
		</div>
	);
};

export default Learn;
