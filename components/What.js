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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Consequat vel ultrices neque odio egestas tempor id. Semper
					tortor, eget nisi vivamus. Cras aliquam, maecenas facilisis
					tempor massa dui tempus eget. Eros consequat nullam
					tristique tristique placerat cursus amet integer. Ac nunc,
					at lobortis phasellus eu dui. Vitae consectetur diam sed
					venenatis non. Eleifend varius volutpat sapien tellus tortor
					ultrices. Semper.
				</p>
			</Col>
		</Row>
	);
};

export default What;
