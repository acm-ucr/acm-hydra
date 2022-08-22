import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
	return (
		<Navbar collapseOnSelect bg='light' expand='lg'>
			<Navbar.Brand>
				<Link href='/' passHref>
					<Nav.Link eventKey='1'>
						<Image
							src='/../public/acmlogo.png'
							alt=''
							width='70%'
							height='70%'
						/>
					</Nav.Link>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<ul className='navbar-nav ml-auto float-rightmb-2 mb-lg-0'>
						<li
							className='nav-item active nav-link font-lexend text-black'
							eventKey='1'
						>
							<Link align='right' href='/about' passHref>
								<Nav.Link
									className='text-black no-underline'
									eventKey='2'
								>
									about
								</Nav.Link>
							</Link>
						</li>
						<li className='nav-item active nav-link font-lexend font-color-black'>
							<Link align='right' href='/board' passHref>
								<Nav.Link
									className='text-black no-underline'
									eventKey='3'
								>
									board
								</Nav.Link>
							</Link>
						</li>
						<li className='nav-item active nav-link font-lexend font-color-black'>
							<Link align='right' href='/events' passHref>
								<Nav.Link
									className='text-black no-underline'
									eventKey='4'
								>
									events
								</Nav.Link>
							</Link>
						</li>
						<li className='nav-item active nav-link font-lexend font-color-black'>
							<Link align='right' href='/join' passHref>
								<Nav.Link
									className='text-black no-underline'
									eventKey='5'
								>
									join us
								</Nav.Link>
							</Link>
						</li>
					</ul>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
