import React from "react";
import { Row, Col } from "react-bootstrap";
import Topic from "../components/Topic";

const Learn = () => {
	return (
		<div className='font-lexend text-4xl'>
			<div className='flex justify-center items-center font-lexend font-bold text-6xl mb-2'>
				Learn
			</div>
			<Row
				xl={4}
				className='flex justify-center items-center bg-lime-400'
			>
				<Col
					xl={4}
					className='flex flex-col items-center justify-center bg-red-400 px-4 '
				>
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

				<Col
					xl={4}
					className='flex flex-col justify-center bg-orange-400'
				>
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

				<Col
					xl={4}
					className='flex flex-col justify-center bg-teal-500'
				>
					academic
					<Topic
						topic='graduate studies'
						backgroundColor='#E37A45'
						textColor='black'
					/>
					<Topic
						topic='research'
						backgroundColor='#E37A45'
						textColor='black'
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
