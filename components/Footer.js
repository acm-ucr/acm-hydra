import React from "react";
import {
	FaDiscord,
	FaInstagram,
	FaSlack,
	FaYoutube,
	FaMediumM,
	FaGithub,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className='bg-neutral-900 text-gray-50 py-6'>
			<div className='container mx-auto'>
				<div className='grid grid-rows-2 justify-center'>
					<div>
						<p className='text-4xl font-lexend font-bold text-center'>
							Let&#39;s connect!
						</p>
					</div>
					<div>
						<div className='grid grid-flow-col mx-auto gap-5'>
							<div>
								<a
									rel='noopener noreferrer'
									href='https://www.instagram.com/acm_ucr/'
									target='_blank'
									title='Instagram'
									className='mx-auto fill-current md:mx-12 lg:m-0 text-gray-50 hover:text-purple-500'
								>
									<FaInstagram size='56'></FaInstagram>
								</a>
							</div>
							<div>
								<a
									rel='noopener noreferrer'
									href='https://docs.google.com/forms/d/e/1FAIpQLSfImoSRQ7d5lQASl5OPxxEK_2iiZT0UKxVsMsn3BMVCkqC-WQ/viewform'
									target='_blank'
									title='Discord'
									className='m-auto fill-current md:mx-12 lg:m-0 text-gray-50 hover:text-indigo-500'
								>
									<FaDiscord size='56'></FaDiscord>
								</a>
							</div>
							<div>
								<a
									rel='noopener noreferrer'
									href='https://www.youtube.com/channel/UCSLoGcSzNfpHIzdT6QzsmnQ'
									target='_blank'
									title='Youtube'
									className='m-auto fill-current md:mx-12 lg:m-0 text-gray-50 hover:text-red-600'
								>
									<FaYoutube size='56'></FaYoutube>
								</a>
							</div>
							<div>
								<a
									rel='noopener noreferrer'
									href='https://github.com/acm-ucr'
									target='_blank'
									title='Github'
									className='m-auto fill-current md:mx-12 lg:m-0 text-gray-50 hover:text-gray-300'
								>
									<FaGithub size='56'></FaGithub>
								</a>
							</div>
							<div>
								<a
									rel='noopener noreferrer'
									href='https://join.slack.com/t/csatucr/shared_invite/zt-6fz8g1lu-oKHsfL1qx3wZMJ9k3j2sXw'
									target='_blank'
									title='Slack'
									className='m-auto fill-current md:mx-12 lg:m-0 text-gray-50 hover:text-gray-300'
								>
									<FaSlack size='56'></FaSlack>
								</a>
							</div>
							<div>
								<a
									rel='noopener noreferrer'
									href='https://medium.com/acm-at-ucr'
									target='_blank'
									title='Medium'
									className='m-auto fill-current md:mx-12 lg:m-0 text-gray-50 hover:text-gray-300'
								>
									<FaMediumM size='56'></FaMediumM>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
