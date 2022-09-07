import React from "react";
import { Row, Col } from "react-bootstrap";
import Profile from "./Profile.js";

const Orgs = [
	{
		name: "Technical Interview & Coding Support (TICS)",
		website: "https://google.com/",
		instagram: "https://www.instagram.com/tics_ucr/?hl=en",
		img: "ticsucr.png",
		description: "club",
	},
	{
		name: "Society of Women Engineers (SWE)",
		website: "https://ucrswe.org/",
		instagram: "https://www.instagram.com/swe.ucr/?hl=en",
		img: "swe.png",
		description: "club",
	},
	{
		name: "Women In Computing (WINC)",
		website: "https://winc.cs.ucr.edu/",
		instagram: "https://www.instagram.com/wincucr/?hl=en",
		img: "winc.png",
		description: "club",
	},
	{
		name: "GameSpawn",
		website: "https://gamespawn.github.io/",
		instagram: "https://www.instagram.com/gamespawn.ucr/?hl=en",
		img: "gamespawnwhite.jpg",
		description: "club",
	},
	{
		name: "Cyber@UCR",
		website: "https://cyber.cs.ucr.edu/",
		instagram: "https://www.instagram.com/cyber_ucr/",
		img: "cyberucr.png",
		description: "club",
	},
	{
		name: "Institute of Electrical and Electronics Engineers (IEEE)",
		website: "https://ieeeucr.github.io/",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "ieee.png",
		description: "club",
	},
	{
		name: "Design@UCR",
		website: "https://www.designatucr.com/",
		instagram: "https://www.instagram.com/designatucr/?hl=en",
		img: "designucr.png",
		description: "club",
	},
	{
		name: "Rose Hack",
		website: "https://rosehack.com/",
		instagram: "https://www.instagram.com/rosehackucr/?hl=en",
		img: "rosehack.png",
		description: "club",
	},
	{
		name: "Citrus Hack",
		website: "https://www.citrushack.com/",
		instagram: "https://www.instagram.com/citrushack_ucr/?hl=en",
		img: "citrushack.png",
		description: "club",
	},
	{
		name: "Cutie Hack",
		website: "https://www.cutiehack.io/",
		instagram: "https://www.instagram.com/cutiehack_ucr/?hl=en",
		img: "cutiehack.png",
		description: "club",
	},
	{
		name: "Competitive Coding Club",
		website: "",
		instagram: "",
		img: "ccc.png",
		description: "club",
	},
	{
		name: "Solar Car",
		website: "https://ucrsolarcar.com/",
		instagram: "https://www.instagram.com/ucrsolarcar/?hl=en",
		img: "solarcar.png",
		description: "club",
	},
	{
		name: "Robo Sub",
		website: "https://robosubucr.weebly.com/",
		instagram: "https://www.instagram.com/robosubucr/?hl=en",
		img: "robosub.jpg",
		description: "club",
	},
	{
		name: "Unmanned Aerial Systems",
		website: "https://ucr-uas.weebly.com/",
		instagram: "https://www.instagram.com/ucruas/",
		img: "uas.png",
		description: "club",
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
							description={org.description}
						/>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default StudentOrgs;
