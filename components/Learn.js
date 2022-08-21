import React from "react";
import { Row, Col } from "react-bootstrap";
import Topic from "../components/Topic";

const Learn = () => {
	return (
		<div className='w-full font-lexend text-4xl'>
			<div className='flex justify-center items-center font-lexend font-bold text-6xl mb-2'>
				Learn
			</div>
			<div className='py-10'>
				<Row>
					<Col className='flex justify-center items-center'>
						professional
					</Col>
					<Col className='flex justify-center items-center'>
						technical
					</Col>
					<Col className='flex justify-center items-center'>
						academic
					</Col>
				</Row>
			</div>
			<Row>
				<Col className='flex justify-center items-center'>
					<Topic
						topic='resume'
						backgroundColor='#43B9AD'
						textColor='black'
					/>
				</Col>
				<Col className='flex justify-center items-center'>
					<Topic
						topic='web dev'
						backgroundColor='#243B5A'
						textColor='white'
					/>
				</Col>
				<Col className='flex justify-center items-center'>
					<Topic
						topic='graduate studies'
						backgroundColor='#E37A45'
						textColor='black'
					/>
				</Col>
			</Row>
			<Row>
				<Col className='flex justify-center items-center'>
					<Topic
						topic='interviews'
						backgroundColor='#43B9AD'
						textColor='black'
					/>
				</Col>
				<Col className='flex justify-center items-center'>
					<Topic
						topic='version control'
						backgroundColor='#243B5A'
						textColor='white'
					/>
				</Col>
				<Col className='flex justify-center items-center'>
					<Topic
						topic='research'
						backgroundColor='#E37A45'
						textColor='black'
					/>
				</Col>
			</Row>
			<Row>
				<Col></Col>
				<Col className='flex justify-center items-center'>
					<Topic
						topic='data science'
						backgroundColor='#243B5A'
						textColor='white'
					/>
				</Col>
				<Col className='flex justify-center items-center'>
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
