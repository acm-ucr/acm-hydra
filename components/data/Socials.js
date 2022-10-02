import {
	FaDiscord,
	FaInstagram,
	FaSlack,
	FaYoutube,
	FaMediumM,
	FaGithub,
} from "react-icons/fa";

const Socials = [
	{
		path: "https://www.instagram.com/acm_ucr/",
		title: "Instagram",
		image: <FaInstagram className='text-5xl'></FaInstagram>,
	},
	{
		path: "https://docs.google.com/forms/d/e/1FAIpQLSfImoSRQ7d5lQASl5OPxxEK_2iiZT0UKxVsMsn3BMVCkqC-WQ/viewform",
		title: " Discord",
		image: <FaDiscord className='text-5xl'></FaDiscord>,
	},
	{
		path: "https://www.youtube.com/channel/UCSLoGcSzNfpHIzdT6QzsmnQ",
		title: "Youtube",
		image: <FaYoutube className='text-5xl'></FaYoutube>,
	},
	{
		path: "https://github.com/acm-ucr",
		title: "Github",
		image: <FaGithub className='text-5xl'></FaGithub>,
	},
	{
		path: "https://join.slack.com/t/csatucr/shared_invite/zt-6fz8g1lu-oKHsfL1qx3wZMJ9k3j2sXw",
		title: "Slack",
		image: <FaSlack className='text-5xl'></FaSlack>,
	},
	{
		path: "https://medium.com/acm-at-ucr",
		title: "Medium",
		image: <FaMediumM className='text-5xl'></FaMediumM>,
	},
];

export default Socials;
