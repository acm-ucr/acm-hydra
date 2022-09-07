import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import { FooterSocialLinks } from "./FooterSocialLinks";

const Footer = () => {
	return (
		<footer className='bg-acm-black text-acm-white py-6'>
			<Container className='justify-center mx-auto'>
				<Row>
					<p className='text-4xl font-lexend font-bold text-center'>
						Let&#39;s connect!
					</p>
				</Row>
				<Row className='justify-center mx-auto'>
					{FooterSocialLinks.map((link, index) => {
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
										className='fill-current text-acm-white hover:text-acm-gray'
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
