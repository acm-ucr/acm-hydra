import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

const Navigation = () => {
	return (
		<Navbar
			collapseOnSelect
			className=' py-0 font-lexend w-12/12 px-3  m-0 !bg-acm-white h-[12vh] border-acm-blue border-b-4'
			expand='md'
			fixed='top'
		>
			<Navbar.Brand className='p-0'>
				<Link href='/' passHref>
					<Nav.Link eventKey='1' className='p-0'>
						<img
							src='acm-ucr-logo.png'
							className='h-[11vh]'
							alt='ACM at UCR'
						/>
					</Nav.Link>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='navbar-nav' />
			<Navbar.Collapse id='navbar-nav' className='-mt-2'>
				<Nav className=' mb-2 w-12/12 no-underline ml-auto text-2xl'>
					<Link href='/' passHref>
						<Nav.Link
							className='m-2 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue'
							eventKey='6'
						>
							home
						</Nav.Link>
					</Link>
					<Link href='/about' passHref>
						<Nav.Link
							className='m-2 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue'
							eventKey='2'
						>
							about
						</Nav.Link>
					</Link>
					<Link href='/board' passHref>
						<Nav.Link
							className='m-2 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue'
							eventKey='3'
						>
							board
						</Nav.Link>
					</Link>
					<Link href='/events' passHref>
						<Nav.Link
							className='m-2 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue'
							eventKey='4'
						>
							events
						</Nav.Link>
					</Link>
					<Link href='/join' passHref>
						<Nav.Link
							className='m-2 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue'
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
