import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import Link from "next/link";
import Socials from "./data/Socials";

const Footer = () => {
	return (
		<footer className='bg-acm-black text-acm-white py-6'>
			<Container className='justify-center mx-auto'>
				<Row>
					<p className='text-4xl font-lexend font-bold text-center'>
						Let&#39;s connect!
					</p>
				</Row>
				<Row className='justify-center flex-nowrap mx-auto w-8/12'>
					{Socials.map((link, index) => {
						return (
							<Col
								key={index}
								xs='3'
								className='flex justify-center'
							>
								{/* <Link href={link.path}> */}
								<a
									href={link.path}
									rel='noopener noreferrer'
									target='_blank'
									title={link.title}
									className='fill-current text-acm-white hover:text-acm-blue'
								>
									{link.image}
								</a>
								{/* </Link> */}
							</Col>
						);
					})}
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
