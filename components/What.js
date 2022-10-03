import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Frame from "./Frame";

const What = () => {
	return (
		<Row className='font-lexend flex text-acm-black justify-between items-center w-11/12 mx-auto'>
			<Col
				sm={6}
				className='d-none d-lg-inline flex justify-center items-center p-3'
			>
				<Frame
					image='presentation7.png'
					topRight={"#ffd700"}
					bottomLeft={"#ff5370"}
					corners={"#82aaff"}
				/>
			</Col>
			<Col sm={6} className='text-center p-3'>
				<p className='text-heading flex justify-center mx-auto'>
					What we do!
				</p>
				<p className='text-text flex justify-center mx-auto w-11/12 pt-3'>
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
			<Col
				sm={6}
				className='d-lg-none flex justify-center items-center p-3'
			>
				<Frame
					image='presentation7.png'
					topRight={"#ffd700"}
					bottomLeft={"#ff5370"}
					corners={"#82aaff"}
				/>
			</Col>
		</Row>
	);
};

export default What;
