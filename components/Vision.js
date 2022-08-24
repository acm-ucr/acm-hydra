import React from "react";
import { Row, Col } from "react-bootstrap";

const Vision = () => {
	return (
		<Row className='font-lexend flex justify-between items-center w-11/12 mx-auto'>
			<Col className='text-center'>
				<p className='text-6xl font-semibold flex justify-center mx-auto'>Our Vision</p>
				<p className='text-3xl font-normal flex justify-center mx-auto w-9/12 pt-3'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vestibulum ut sit viverra dignissim leo, commodo. Posuere
					habitant nibh hac et cras nibh vitae tempus. Tortor neque,
					volutpat nibh elementum. Odio eget pellentesque a, lobortis
					sed cursus ut sed. Tortor, elementum odio odio euismod a
					commodo. Ac mollis magna pellentesque arcu sed a rhoncus.
					Egestas malesuada sed amet, commodo neque massa. Nisl.
				</p>
			</Col>
			<Col>
				<img alt='picture frame component' src='' />
			</Col>
		</Row>
	);
};

export default Vision;
