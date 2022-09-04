import React from "react";
import { Row, Col } from "react-bootstrap";
import Profile from "./Profile.js";

const Orgs = [
	{
		name: "Technical Interview & Coding Support",
		website: "https://google.com/",
		instagram: "https://www.instagram.com/tics_ucr/?hl=en",
		img: "ticsucr.png",
		pronouns: "",
		position: "",
		email: "",
		linkedin: "",
		github: "",
	},
	{
		name: "Society of Women Engineers",
		website: "https://ucrswe.org/",
		instagram: "https://www.instagram.com/swe.ucr/?hl=en",
		img: "swe.png",
		pronouns: "",
		position: "",
		email: "",
		linkedin: "",
		github: "",
	},
	{
		name: "Women In Computing",
		website: "https://winc.cs.ucr.edu/",
		instagram: "https://www.instagram.com/wincucr/?hl=en",
		img: "winc.png",
		pronouns: "",
		position: "",
		email: "",
		linkedin: "",
		github: "",
	},
	{
		name: "GameSpawn",
		website: "https://gamespawn.github.io/",
		instagram: "https://www.instagram.com/gamespawn.ucr/?hl=en",
		img: "gamespawn.png",
		pronouns: "",
		position: "",
		email: "",
		linkedin: "",
		github: "",
	},
	{
		name: "Cyber@UCR",
		website: "https://cyber.cs.ucr.edu/",
		instagram: "https://www.instagram.com/cyber_ucr/",
		img: "cyberucr.png",
		pronouns: "",
		position: "",
		email: "",
		linkedin: "",
		github: "",
	},
	{
		name: "Institute of Electrical and Electronics Engineers",
		website: "https://ieeeucr.github.io/",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "ieee.png",
		pronouns: "",
		position: "",
		email: "",
		linkedin: "",
		github: "",
	},
	{
		name: "Design@UCR",
		website: "",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "designucr.png",
		pronouns: "",
		position: "",
		email: "",
		linkedin: "",
		github: "",
	},
	{
		name: "Rose Hack",
		website: "",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "rosehack.png",
		pronouns: "",
		position: "",
		email: "",
		linkedin: "",
		github: "",
	},
	{
		name: "Citrus Hack",
		website: "",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "citrushack.png",
		pronouns: "",
		position: "",
		email: "",
		linkedin: "",
		github: "",
	},
	{
		name: "Cutie Hack",
		website: "",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "cutiehack.png",
		pronouns: "",
		position: "",
		email: "",
		linkedin: "",
		github: "",
	},
	{
		name: "Competitive Coding Club",
		website: "",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "ccc.png",
		pronouns: "",
		position: "",
		email: "",
		linkedin: "",
		github: "",
	},
	{
		name: "Solar Car",
		website: "https://ucrsolarcar.com/",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "solarcar.png",
		pronouns: "",
		position: "",
		email: "",
		linkedin: "",
		github: "",
	},
];

// const ProfileOrg = ({ color, name, website, instagram }) => {
// 	return (
// 		<Row className={`bg-${color} w-11/12 p-3 rounded-2xl`}>
// 			<Col
// 				xs={2}
// 				className='flex justify-start m-0 p-0 items-center flex-col'
// 			>
// 				<div className='h-full flex justify-evenly items-center flex-col'>
// 					{website === "" ? (
// 						<></>
// 					) : (
// 						<a
// 							href={website}
// 							className='text-acm-black hover:text-gray-300'
// 							target='_blank'
// 							rel='noreferrer'
// 						>
// 							<FaGlobe className='text-4xl' />
// 						</a>
// 					)}

// 					{instagram === "" ? (
// 						<></>
// 					) : (
// 						<a
// 							href={instagram}
// 							className='text-acm-black hover:text-gray-300'
// 							target='_blank'
// 							rel='noreferrer'
// 						>
// 							<FaInstagram className='text-4xl' />
// 						</a>
// 					)}
// 				</div>
// 			</Col>
// 			<Col xs={10} className='font-lexend text-acm-black m-0 pr-0'>
// 				<p className='text-2xl inline'>{name}</p>
// 				<br />
// 			</Col>
// 		</Row>
// 	);
// };

const colors = [
	"acm-blue",
	"acm-lightpurple",
	"acm-yellow",
	"acm-green",
	"acm-pink",
	"acm-orange",
	"acm-marine",
];

const StudentOrgs = () => {
	return (
		<div className='container flex flex-col items-center justify-center md:p-1 sm:p-1 mx-auto'>
			<h1 className='font-lexend text-3xl font-medium text-center'>
				Check out our fellow organizations!
			</h1>
			<Row className='w-full'>
				{Orgs.map((org, index) => (
					<Col
						key={index}
						xl={3}
						lg={4}
						sm={6}
						xs={12}
						className='h-full p-2 flex justify-center items-center'
					>
						<Profile
							color={colors[index % colors.length]}
							name={org.name}
							website={org.website}
							insta={org.instagram}
							image={org.img}
							email={org.email}
							github={org.github}
							linkedin={org.linkedin}
						/>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default StudentOrgs;
