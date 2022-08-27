import React from "react";
import { Row, Col } from "react-bootstrap";
import Topic from "../components/Topic";

const Learn = () => {
	return (
		<div className='font-lexend flex justify-center items-center flex-col'>
			<div className='flex justify-center items-center font-bold text-6xl mb-4'>
				Learn
			</div>
			<Row className='flex justify-center items-start text-4xl w-10/12'>
				<Col
					xl={4}
					md={6}
					xs={12}
					className='flex flex-col items-center justify-center'
				>
					professional
					<Topic
						topic='resume'
						textColor='black'
						backgroundColor='#80cbc4'
					/>
					<Topic
						topic='interviews'
						backgroundColor='#80cbc4'
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
						backgroundColor='#525975'
						textColor='white'
					/>
					<Topic
						topic='version control'
						backgroundColor='#525975'
						textColor='white'
					/>
					<Topic
						topic='data science'
						backgroundColor='#525975'
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
						backgroundColor='#f78c6c'
						textColor='black'
					/>
					<Topic
						topic='research'
						backgroundColor='#f78c6c'
						textColor='black'
					/>
					<Topic
						topic='course planning'
						backgroundColor='#f78c6c'
						textColor='black'
					/>
				</Col>
			</Row>
		</div>
	);
};

export default Learn;
