import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// {
// 		name: "Vinz Angelo Madrigal",
// 		pronoun: "He/Him",
// 		position: "President",
// 		image: "vinz.jpeg",
// 		email: "vmadr010@ucr.edu",
// 		linkedin: "https://www.linkedin.com/in/vinzmadrigal/",
// 		github: "https://github.com/mvinzangelo",
// 		bio: `Heyo I'm Vinz. I was born in the Philippines but swam to SoCal when I was a little boy. I like reading books that are way out of my comprehension level and singing songs that are way out of my range. Join ACM to help shape the future of CS at UCR, thank you :)`,
// 	},

const Profile = ({
	name,
	pronouns,
	position,
	image,
	email,
	linkedin,
	github,
}) => {
	return (
		<div className='h-full'>
			<Row className='bg-blue-500 w-full m-1 '>
				<Col
					xl={3}
					className='bg-red-500 flex justify-evenly items-center flex-col'
				>
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
				</Col>
				<Col xl={9} className='font-lexend'>
					<img src={image} />
					<p className='text-xl font-bold inline'>{name}</p>
					<br />
					<p className='text-xl inline'>{position}</p>
					<br />
					<p>{pronouns}</p>
				</Col>
			</Row>
		</div>
	);
};

export default Profile;
