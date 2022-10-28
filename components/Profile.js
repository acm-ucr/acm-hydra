import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
	FaGithub,
	FaLinkedin,
	FaEnvelope,
	FaGlobe,
	FaInstagram,
} from "react-icons/fa";

const Profile = ({
	color,
	boxShadowColor,
	name,
	pronouns,
	position,
	image,
	email,
	linkedin,
	github,
	website,
	insta,
	board,
}) => {
	return (
		<Row
			className={`${color} w-full p-[0.67rem] m-1 rounded-2xl ${
				pronouns === undefined ? "h-[330px]" : ""
			}`}
		>
			<Col
				xs={2}
				className='flex justify-start m-0 p-0 items-center flex-col'
			>
				<div className='h-4/6 flex justify-evenly items-center flex-col '>
					{github && (
						<a
							href={github}
							className='text-acm-white hover:text-gray-200'
							target='_blank'
							rel='noreferrer'
						>
							<FaGithub className='text-4xl' />
						</a>
					)}

					{linkedin && (
						<a
							href={linkedin}
							className='text-acm-white hover:text-gray-200'
							target='_blank'
							rel='noreferrer'
						>
							<FaLinkedin className='text-4xl' />
						</a>
					)}

					{email && (
						<a
							href={`mailto:` + email}
							className='text-acm-white hover:text-gray-200'
							target='_blank'
							rel='noreferrer'
						>
							<FaEnvelope className='text-4xl' />
						</a>
					)}

					{website && (
						<a
							href={website}
							className='text-acm-white hover:text-gray-200'
							target='_blank'
							rel='noreferrer'
						>
							<FaGlobe className='text-4xl' />
						</a>
					)}

					{insta && (
						<a
							href={insta}
							className='text-acm-white hover:text-gray-200'
							target='_blank'
							rel='noreferrer'
						>
							<FaInstagram className='text-4xl' />
						</a>
					)}
				</div>
			</Col>
			<Col xs={10} className='font-lexend text-acm-black m-0 pr-0'>
				<img
					className={`shadow-[10px_8px_0px_0px] ${boxShadowColor} mb-3`}
					src={image}
					alt='Profile Picture of Board Member'
				/>
				<p
					className={`inline text-xl ${
						board ? "font-medium" : ""
					} m-0 `}
				>
					{name}
				</p>
				<br />
				<p className='inline text-[1.1rem]'>{position}</p>
				<br />
				<p className='text-[0.9rem]'>{pronouns}</p>
			</Col>
		</Row>
	);
};

export default Profile;
