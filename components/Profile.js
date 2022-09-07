import React from "react";
import { Row, Col } from "react-bootstrap";
import {
	FaGithub,
	FaLinkedin,
	FaEnvelope,
	FaGlobe,
	FaInstagram,
} from "react-icons/fa";

const Profile = ({
	color,
	name,
	pronouns,
	position,
	image,
	email,
	linkedin,
	github,
	website,
	insta,
	description,
	shadowColor,
}) => {
	return (
		<Row className={`bg-${color} w-11/12 p-3 rounded-2xl h-[350px]`}>
			<Col
				xs={2}
				className='flex justify-start m-0 p-0 items-center flex-col'
			>
				<div className='h-4/6 flex justify-evenly items-center flex-col '>
					{github === undefined ? (
						<></>
					) : (
						<a
							href={github}
							className='text-acm-white hover:text-acm-black'
							target='_blank'
							rel='noreferrer'
						>
							<FaGithub className='text-4xl' />
						</a>
					)}

					{linkedin === undefined ? (
						<></>
					) : (
						<a
							href={linkedin}
							className='text-acm-white hover:text-acm-black'
							target='_blank'
							rel='noreferrer'
						>
							<FaLinkedin className='text-4xl' />
						</a>
					)}

					{email === undefined ? (
						<></>
					) : (
						<a
							href={`mailto:` + email}
							className='text-acm-white hover:text-acm-black'
							target='_blank'
							rel='noreferrer'
						>
							<FaEnvelope className='text-4xl' />
						</a>
					)}

					{website === undefined ? (
						<></>
					) : (
						<a
							href={website}
							className='text-acm-white hover:text-gray-300'
							target='_blank'
							rel='noreferrer'
						>
							<FaGlobe className='text-4xl text-acm-black' />
						</a>
					)}

					{insta === undefined ? (
						<></>
					) : (
						<a
							href={insta}
							className='text-acm-white hover:text-gray-300'
							target='_blank'
							rel='noreferrer'
						>
							<FaInstagram className='text-4xl text-acm-black ' />
						</a>
					)}
				</div>
			</Col>
			<Col xs={10} className='font-lexend text-acm-black m-0 pr-0'>
				<img
					className={`shadow-[10px_8px_0px_0px] ${shadowColor} mb-3`}
					src={image}
					alt='Profile Picture of Board Member'
				/>
				<p className='text-base inline fs-6'> {name}</p>
				<br />
				<p className='text-sm  inline'>{description}</p>
				<br />
				<p className='text-base  inline'>{position}</p>
				<br />
				<p>{pronouns}</p>
			</Col>
		</Row>
	);
};

export default Profile;
