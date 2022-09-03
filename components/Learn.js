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
						backgroundColor='acm-marine'
						textColor='acm-black'
					/>
					<Topic
						topic='interviews'
						backgroundColor='acm-marine'
						textColor='acm-black'
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
						backgroundColor='acm-darkgray'
						textColor='acm-white'
					/>
					<Topic
						topic='version control'
						backgroundColor='acm-darkgray'
						textColor='acm-white'
					/>
					<Topic
						topic='data science'
						backgroundColor='acm-darkgray'
						textColor='acm-white'
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
						backgroundColor='acm-orange'
						textColor='acm-black'
					/>
					<Topic
						topic='research'
						backgroundColor='acm-orange'
						textColor='acm-black'
					/>
					<Topic
						topic='course planning'
						backgroundColor='acm-orange'
						textColor='acm-black'
					/>
				</Col>
			</Row>
		</div>
	);
};

export default Learn;
