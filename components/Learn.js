import React from "react";
import { Row, Col } from "react-bootstrap";
import Topic from "../components/Topic";

const Learn = () => {
	return (
		<div className='font-lexend flex justify-center items-center flex-col'>
			<div className='flex justify-center items-center font-bold text-6xl mb-4 mx-auto w-11/12'>
				Learn
			</div>
			<Row className='flex justify-center items-start text-4xl w-11/12'>
				<Col
					xl={4}
					md={6}
					xs={12}
					className='flex flex-col items-center justify-center'
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
					md={6}
					xs={12}
					className='flex flex-col items-center justify-centers'
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
					md={6}
					xs={12}
					className='flex flex-col items-center justify-center'
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
