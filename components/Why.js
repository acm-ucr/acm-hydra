import React from "react";
import { Row, Col } from "react-bootstrap";

const Why = () => {
	return (
		<Row className='font-lexend flex justify-between items-center w-5/6 mx-auto'>
			<Col sm={6} className='text-center'>
				<p className='text-6xl font-medium flex justify-center mx-auto'>
					Why we do it!
				</p>
				<p className='text-4xl font-normal flex justify-center mx-auto w-11/12 pt-3'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Pharetra cursus mauris dictum euismod amet in enim
					adipiscing aenean. Sagittis aenean leo praesent ut vulputate
					duis dolor. Commodo ut odio dignissim tellus convallis magna
					ac auctor. Cursus urna pellentesque convallis tristique.
					Risus dictum feugiat fusce habitasse. Imperdiet risus dui,
					nunc tortor nisl id aliquet urna rhoncus. Tellus nunc
					curabitur mi.
				</p>
			</Col>
			<Col sm={6}>
				<img alt='picture frame component' src='' />
			</Col>
		</Row>
	);
};

export default Why;
