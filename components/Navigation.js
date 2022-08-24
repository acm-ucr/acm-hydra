import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

const Navigation = () => {
	return (
		<Navbar collapseOnSelect className='font-lexend fs-4' expand='sm'>
			<Navbar.Brand>
				<Link href='/' passHref>
					<Nav.Link eventKey='1'>
						<img
							src='acm-ucr-logo.png'
							className='w-2/5 h-2/5'
							alt='acm@ucr logo'
						/>
					</Nav.Link>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='navbar-nav' />
			<Navbar.Collapse id='navbar-nav'>
				<Nav className='ml-auto mb-2 mb-lg-0 no-underline'>
					<Link href='/about' passHref>
						<Nav.Link
							className='ml-auto text-acm-black'
							eventKey='2'
						>
							about
						</Nav.Link>
					</Link>
					<Link href='/board' passHref>
						<Nav.Link
							className='ml-auto text-acm-black'
							eventKey='3'
						>
							board
						</Nav.Link>
					</Link>
					<Link href='/events' passHref>
						<Nav.Link
							className='ml-auto text-acm-black'
							eventKey='4'
						>
							events
						</Nav.Link>
					</Link>
					<Link href='/join' passHref>
						<Nav.Link
							className='ml-auto text-acm-black'
							eventKey='5'
						>
							join us
						</Nav.Link>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
