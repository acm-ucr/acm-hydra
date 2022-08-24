import React from "react";
import { Row, Col } from "react-bootstrap";

const What = () => {
	return (
		<Row className='font-lexend flex justify-between items-center w-5/6 mx-auto'>
			<Col sm={6}>
				<img alt='picture frame component' src='' />
			</Col>
			<Col sm={6} className='text-center'>
				<p className='text-6xl font-medium flex justify-center mx-auto'>
					What we do!
				</p>
				<p className='text-4xl font-normal flex justify-center mx-auto w-11/12 pt-3'>
					Every quarter, we focus on improving specific aspects of our
					members. In the Fall, we develop professional resumes, build
					all-star LinkedIns, and offer workshops on Applying
					Effectively at companies from the Big 4 to startups. In the
					Winter, we introduce technical pathways ranging from web/app
					development to security to cloud computing. In the Spring,
					we focus on all the small engineering cruft that is expected
					knowledge for CS students that classes don&apos;t cover:
					Offline Editing, Source Control, Using APIs, and more.
				</p>
			</Col>
		</Row>
	);
};

export default What;
