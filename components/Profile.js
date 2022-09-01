import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Profile = ({
	color,
	name,
	pronouns,
	position,
	image,
	email,
	linkedin,
	github,
}) => {
	return (
		<Row className={`bg-${color} w-11/12 p-3 rounded-2xl`}>
			<Col
				xs={2}
				className='flex justify-start m-0 p-0 items-center flex-col'
			>
				<div className='h-4/6 flex justify-evenly items-center flex-col '>
					{github === "" ? (
						<></>
					) : (
						<a
							href={github}
							className='text-acm-white hover:text-gray-300'
							target='_blank'
							rel='noreferrer'
						>
							<FaGithub className='text-4xl' />
						</a>
					)}

					{linkedin === "" ? (
						<></>
					) : (
						<a
							href={linkedin}
							className='text-acm-white hover:text-gray-300'
							target='_blank'
							rel='noreferrer'
						>
							<FaLinkedin className='text-4xl' />
						</a>
					)}

					{email === "" ? (
						<></>
					) : (
						<a
							href={`mailto:` + email}
							className='text-acm-white hover:text-gray-300'
							target='_blank'
							rel='noreferrer'
						>
							<FaEnvelope className='text-4xl' />
						</a>
					)}
				</div>
			</Col>
			<Col xs={10} className='font-lexend text-acm-black m-0 pr-0'>
				<img
					className='shadow-[10px_8px_0px_0px] shadow-acm-white mb-3'
					src={image}
					alt='Profile Picture of Board Member'
				/>
				<p className='text-base inline'>{name}</p>
				<br />
				<p className='text-base  inline'>{position}</p>
				<br />
				<p>{pronouns}</p>
			</Col>
		</Row>
	);
};

export default Profile;
