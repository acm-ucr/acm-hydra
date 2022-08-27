import React from "react";
import { Row, Col } from "react-bootstrap";

const Gallery = () => {
  return (
		<Row className='flex justify-center mx-auto'>
			<Row className='font-lexend text-7xl font-semibold flex justify-center mx-auto p-4'>
				Gallery
			</Row>
			<Row className='flex justify-center m-auto w-11/12'>
				<Row>
					<Col className='p-2'>
						<img alt='' src='image11.png' />
					</Col>
					<Col className='flex justify-center m-auto w-5/6'>
						<Col>
							<img className='p-1' alt='' src='image1.jpg' />
							<img className='p-1' alt='' src='image3.jpg' />
						</Col>
						<Col>
							<img className='p-1' alt='' src='image16.png' />
							<img className='p-1' alt='' src='image5.jpg' />
						</Col>
					</Col>
				</Row>
				<Row>
					<Col className='flex justify-center m-auto w-5/6'>
						<Col>
							<img className='p-1' alt='' src='image15.png' />
							<img className='p-1' alt='' src='image14.png' />
						</Col>
						<Col>
							<img className='p-1' alt='' src='image17.png' />
							<img className='p-1' alt='' src='image9.jpg' />
						</Col>
					</Col>
					<Col className='p-2'>
						<img alt='' src='image10.jpg' />
					</Col>
				</Row>
				<Row>
					<img className='p-2' alt='' src='image12.png' />
				</Row>
			</Row>
		</Row>
  );
};

export default Gallery;
