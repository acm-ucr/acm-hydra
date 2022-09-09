import React from "react";
import { Row, Col } from "react-bootstrap";

const Gallery = () => {
	return (
		<Row className='text-acm-black flex justify-center mx-auto w-11/12'>
			<Row className='font-lexend text-3xl font-semibold flex justify-center py-4'>
				Gallery
			</Row>
			<Row className='flex justify-center'>
				<Row>
					<Col className='gx-2'>
						<img
							alt='group of students gathering in front of rivera library'
							src='rivera-library.png'
						/>
					</Col>
					<Col className='flex justify-center gx-2'>
						<Col>
							<img
								className='pr-1 pb-1'
								alt='students in a classroom listening to a presentation'
								src='presentation1.jpg'
							/>
							<img
								className='pr-1 pt-0.5'
								alt='students in a classroom listening to a presentation'
								src='presentation4.jpg'
							/>
						</Col>
						<Col>
							<img
								className='pl-1 pb-1'
								alt='students in a classroom listening to a panel'
								src='panel.png'
							/>
							<img
								className='pl-1 pt-0.5'
								alt='groups of students in discussion sitting around tables'
								src='discussion.jpg'
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
								src='presentation6.png'
							/>
							<img
								className='pr-1 pt-0.5'
								alt='students in a large classroom watching a presentation'
								src='presentation7.png'
							/>
						</Col>
						<Col>
							<img
								className='pl-1 pb-1'
								alt='students watching a presentation on development workflow'
								src='presentation-workflow.png'
							/>
							<img
								className='pl-1 pt-0.5'
								alt='students following along on their laptops in an acm workshop'
								src='acm-workshop.jpg'
							/>
						</Col>
					</Col>
					<Col className='gx-2'>
						<img
							alt='students sitting at tables discussing their ideas with professors'
							src='discussion-professors.jpg'
						/>
					</Col>
				</Row>
				<Row>
					<img
						className='pt-2 pb-16 gx-2'
						alt='students paying attention during an acm meeting'
						src='meeting.png'
					/>
				</Row>
			</Row>
		</Row>
	);
};

export default Gallery;
