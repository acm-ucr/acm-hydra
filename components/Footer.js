import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import {
	FaDiscord,
	FaInstagram,
	FaSlack,
	FaYoutube,
	FaMediumM,
	FaGithub,
} from "react-icons/fa";

const SocialLinks = [
	{
		path: "https://www.instagram.com/acm_ucr/",
		title: "Instagram",
		image: <FaInstagram size='56'></FaInstagram>,
	},
	{
		path: "https://docs.google.com/forms/d/e/1FAIpQLSfImoSRQ7d5lQASl5OPxxEK_2iiZT0UKxVsMsn3BMVCkqC-WQ/viewform",
		title: " Discord",
		image: <FaDiscord size='56'></FaDiscord>,
	},
	{
		path: "https://www.youtube.com/channel/UCSLoGcSzNfpHIzdT6QzsmnQ",
		title: "Youtube",
		image: <FaYoutube size='56'></FaYoutube>,
	},
	{
		path: "https://github.com/acm-ucr",
		title: "Github",
		image: <FaGithub size='56'></FaGithub>,
	},
	{
		path: "https://join.slack.com/t/csatucr/shared_invite/zt-6fz8g1lu-oKHsfL1qx3wZMJ9k3j2sXw",
		title: "Slack",
		image: <FaSlack size='56'></FaSlack>,
	},
	{
		path: "https://medium.com/acm-at-ucr",
		title: "Medium",
		image: <FaMediumM size='56'></FaMediumM>,
	},
];

const Footer = () => {
	return (
		<footer className='bg-neutral-900 text-gray-50 py-6'>
			<Container className='justify-center mx-auto'>
				<Row>
					<p className='text-4xl font-lexend font-bold text-center'>
						Let&#39;s connect!
					</p>
				</Row>
				<Row className='justify-center mx-auto'>
					{SocialLinks.map((link, index) => {
						return (
							<Col
								key={index}
								xs={4}
								md={2}
								className='flex justify-center'
							>
								<Link href={link.path}>
									<a
										rel='noopener noreferrer'
										target='_blank'
										title={link.title}
										className='fill-current text-gray-50 hover:text-gray-300'
									>
										{link.image}
									</a>
								</Link>
							</Col>
						);
					})}
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
