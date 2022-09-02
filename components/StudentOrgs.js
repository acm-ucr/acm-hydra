import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaGlobe, FaInstagram } from "react-icons/fa";

const Orgs = [
	{
		name: "TICS",
		website: "https://google.com/",
		instagram: "https://www.instagram.com/tics_ucr/?hl=en",
		img: "",
	},
	{
		name: "SWE",
		website: "https://ucrswe.org/",
		instagram: "https://www.instagram.com/swe.ucr/?hl=en",
		img: "",
	},
	{
		name: "WINC",
		website: "https://winc.cs.ucr.edu/",
		instagram: "https://www.instagram.com/wincucr/?hl=en",
		img: "",
	},
	{
		name: "GameSpawn",
		website: "https://gamespawn.github.io/",
		instagram: "https://www.instagram.com/gamespawn.ucr/?hl=en",
		img: "",
	},
	{
		name: "Cyber@UCR",
		website: "https://cyber.cs.ucr.edu/",
		instagram: "https://www.instagram.com/cyber_ucr/",
		img: "",
	},
	{
		name: "IEEE",
		website: "https://ieeeucr.github.io/",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "",
	},
	{
		name: "Design@UCR",
		website: "https://ieeeucr.github.io/",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "",
	},
	{
		name: "Rose Hack",
		website: "https://ieeeucr.github.io/",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "",
	},
	{
		name: "Citrus Hack",
		website: "https://ieeeucr.github.io/",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "",
	},
	{
		name: "Cutie Hack",
		website: "https://ieeeucr.github.io/",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "",
	},
	{
		name: "Competitive Coding Club",
		website: "https://ieeeucr.github.io/",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "",
	},
	{
		name: "Solar Car",
		website: "https://ieeeucr.github.io/",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
		img: "",
	},
];

const ProfileOrg = ({ color, name, website, instagram }) => {
	return (
		<Row className={`bg-${color} w-11/12 p-3 rounded-2xl`}>
			<Col
				xs={2}
				className='flex justify-start m-0 p-0 items-center flex-col'
			>
				<div className='h-full flex justify-evenly items-center flex-col'>
					{website === "" ? (
						<></>
					) : (
						<a
							href={website}
							className='text-acm-black hover:text-gray-300'
							target='_blank'
							rel='noreferrer'
						>
							<FaGlobe className='text-4xl' />
						</a>
					)}

					{instagram === "" ? (
						<></>
					) : (
						<a
							href={instagram}
							className='text-acm-black hover:text-gray-300'
							target='_blank'
							rel='noreferrer'
						>
							<FaInstagram className='text-4xl' />
						</a>
					)}
				</div>
			</Col>
			<Col xs={10} className='font-lexend text-acm-black m-0 pr-0'>
				<p className='text-2xl inline'>{name}</p>
				<br />
			</Col>
		</Row>
	);
};

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
				Something goes here
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
						<ProfileOrg
							color={colors[index % colors.length]}
							name={org.name}
							website={org.website}
							instagram={org.instagram}
						/>
					</Col>
				))}
			</Row>
		</div>
	);
};

// const StudentOrgs = () => {
// 	return (
// 		<div>
// 			<ProfileOrg
// 				color='acm-gray'
// 				name='WINC'
// 				link='https://google.com/'
// 			/>
// 			<ProfileOrg
// 				color='acm-gray'
// 				name='WINC'
// 				link='https://google.com/'
// 			/>
// 			<ProfileOrg
// 				color='acm-gray'
// 				name='WINC'
// 				link='https://google.com/'
// 			/>
// 			<ProfileOrg
// 				color='acm-gray'
// 				name='WINC'
// 				link='https://google.com/'
// 			/>
// 			<ProfileOrg
// 				color='acm-gray'
// 				name='WINC'
// 				link='https://google.com/'
// 			/>
// 			<ProfileOrg
// 				color='acm-gray'
// 				name='WINC'
// 				link='https://google.com/'
// 			/>
// 		</div>
// 	);
// };

export default StudentOrgs;
