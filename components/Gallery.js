import React from "react";
import { Row, Col } from "react-bootstrap";

const Gallery = () => {
	return (
		<Row className='text-acm-black flex justify-center mx-auto'>
			<Row className='font-lexend text-3xl font-semibold flex justify-center py-4'>
				Gallery
			</Row>
			<Row className='flex justify-center'>
				<Row>
					<Col className='gx-2'>
						<img
							alt='group of students gathering in front of rivera library'
							src='image11.png'
						/>
					</Col>
					<Col className='flex justify-center gx-2'>
						<Col>
							<img
								className='pr-1 pb-1'
								alt='students in a classroom listening to a presentation'
								src='image1.jpg'
							/>
							<img
								className='pr-1 pt-0.5'
								alt='students in a classroom listening to a presentation'
								src='image3.jpg'
							/>
						</Col>
						<Col>
							<img
								className='pl-1 pb-1'
								alt='students in a classroom listening to a panel'
								src='image16.png'
							/>
							<img
								className='pl-1 pt-0.5'
								alt='groups of students in discussion sitting around tables'
								src='image5.jpg'
							/>
						</Col>
					</Col>
				</Row>
				<Row className='pt-2'>
					<Col className='flex justify-center m-auto gx-2'>
						<Col>
							<img
								className='pr-1 pb-1'
								alt='students sitting at tables listening to a presentation'
								src='image15.png'
							/>
							<img
								className='pr-1 pt-0.5'
								alt='students in a large classroom watching a presentation'
								src='image14.png'
							/>
						</Col>
						<Col>
							<img
								className='pl-1 pb-1'
								alt='students watching a presentation on development workflow'
								src='image17.png'
							/>
							<img
								className='pl-1 pt-0.5'
								alt='students following along on their laptops in an acm workshop'
								src='image9.jpg'
							/>
						</Col>
					</Col>
					<Col className='gx-2'>
						<img
							alt='students sitting at tables discussing their ideas with professors'
							src='image10.jpg'
						/>
					</Col>
				</Row>
				<Row>
					<img
						className='pt-2 pb-16 gx-2'
						alt='students paying attention during an acm meeting'
						src='image12.png'
					/>
				</Row>
			</Row>
		</Row>
	);
};

export default Gallery;
