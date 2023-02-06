import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Gallery = () => {
	return (
		<div className='text-acm-black flex justify-center items-center flex-col w-12/12'>
			<div className='font-lexend text-heading flex justify-center py-4'>
				Gallery
			</div>
			<Row className='p-0 m-0 flex justify-center w-11/12'>
				<Col className='m-0 p-1' md={6} sm={12}>
					<img
						alt='group of students gathering in front of rivera library'
						src='rivera-library.webp'
					/>
				</Col>
				<Col className='flex justify-center m-0 p-0' md={6} xs={12}>
					<Row className='p-0 m-0'>
						<Col className='m-0 p-1' xs={6}>
							<img
								alt='students in a classroom listening to a presentation'
								src='presentation1.webp'
							/>
						</Col>
						<Col className='m-0 p-1' xs={6}>
							<img
								alt='students in a classroom listening to a presentation'
								src='presentation4.webp'
							/>
						</Col>

						<Col className='m-0 p-1' xs={6}>
							<img
								alt='students in a classroom listening to a panel'
								src='panel.webp'
							/>
						</Col>
						<Col className='m-0 p-1' xs={6}>
							<img
								alt='groups of students in discussion sitting around tables'
								src='discussion.webp'
							/>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className='p-0 m-0 flex justify-center w-11/12'>
				<Col className='flex justify-center m-0 p-0' md={6} xs={12}>
					<Row className='p-0 m-0'>
						<Col className='m-0 p-1' xs={6}>
							<img
								alt='students in a classroom listening to a presentation'
								src='presentation6.webp'
							/>
						</Col>
						<Col className='m-0 p-1' xs={6}>
							<img
								alt='students in a classroom listening to a presentation'
								src='presentation7.webp'
							/>
						</Col>

						<Col className='m-0 p-1' xs={6}>
							<img
								alt='students in a classroom listening to a panel'
								src='presentation-workflow.webp'
							/>
						</Col>
						<Col className='m-0 p-1' xs={6}>
							<img
								alt='groups of students in discussion sitting around tables'
								src='acm-workshop.webp'
							/>
						</Col>
					</Row>
				</Col>
				<Col className='m-0 p-1' md={6} xs={12}>
					<img
						alt='group of students gathering in front of rivera library'
						src='discussion-professors.webp'
					/>
				</Col>
			</Row>
			<Row className='w-11/12 mb-20'>
				<img
					className='m-0 p-1'
					alt='students paying attention during an acm meeting'
					src='meeting.webp'
				/>
			</Row>
		</div>
	);
};

export default Gallery;
