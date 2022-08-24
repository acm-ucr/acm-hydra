import React from "react";
import { Row, Col } from "react-bootstrap";

const Why = () => {
	return (
		<Row className='font-lexend flex justify-between items-center w-11/12 mx-auto'>
			<Col sm={6} className='text-center'>
				<p className='text-6xl font-medium flex justify-center mx-auto'>
					Why we do it!
				</p>
				<p className='text-4xl font-normal flex justify-center mx-auto w-11/12 pt-3'>
					We want UCR to become a premier institution for Computer
					Science and Engineering. University courses provide a good
					foundation, but we strive to build upon that. So we
					supplement the curriculum with workshops tailored to our
					members and their goals. We do this through an amazing 1:1
					Mentor program, and constant feedback from our members. But
					more importantly, we want our members to make a positive
					difference in the world through software. The success of ACM
					at UCR can only be measured by the success of our members.
				</p>
			</Col>
			<Col sm={6}>
				<img alt='picture frame component' src='' />
			</Col>
		</Row>
	);
};

export default Why;
