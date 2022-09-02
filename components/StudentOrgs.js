import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaGlobe, FaInstagram } from "react-icons/fa";

const Orgs = [
	{
		name: "TICS",
		website: "https://google.com/",
		instagram: "",
	},
	{
		name: "SWE",
		website: "https://ucrswe.org/",
		instagram: "https://www.instagram.com/swe.ucr/?hl=en",
	},
	{
		name: "WINC",
		website: "https://winc.cs.ucr.edu/",
		instagram: "https://www.instagram.com/wincucr/?hl=en",
	},
	{
		name: "GameSpawn",
		website: "https://gamespawn.github.io/",
		instagram: "https://www.instagram.com/gamespawn.ucr/?hl=en",
	},
	{
		name: "Cyber@UCR",
		website: "https://cyber.cs.ucr.edu/",
		instagram: "https://www.instagram.com/cyber_ucr/",
	},
	{
		name: "IEEE",
		website: "https://ieeeucr.github.io/",
		instagram: "https://www.instagram.com/ieeeucr/?hl=en",
	},
];

const ProfileOrg = ({ color, name, website, instagram }) => {
	return (
		<Row className={`bg-${color} w-11/12 p-3 rounded-2xl`}>
			<Col
				xs={2}
				className='flex justify-center m-0 p-0 items-center flex-col'
			>
				<Row className='font-lexend text-acm-black m-0 pr-0 fles-row justify-center'>
					<p className='text-base inline'>{name}</p>
					{/* <br /> */}
				</Row>
				<Row className='h-4/6 flex justify-evenly items-center flex-row'>
					<div>
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
					</div>
					<div>
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
				</Row>
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
				Meet our Fellow Organizations!
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
