import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

const Navigation = () => {
	return (
		<Navbar
			collapseOnSelect
			className=' py-0 font-lexend w-12/12 px-3 m-0 !bg-acm-white h-[10vh] border-acm-blue border-b-4'
			expand='md'
			fixed='top'
		>
			<Navbar.Brand className='p-0'>
				<Link eventkey='1' className='p-0' href='/'>
					<img
						src='acm-ucr-logo.webp'
						className='h-[10vh]'
						alt='ACM at UCR'
					/>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='navbar-nav' />
			<Navbar.Collapse id='navbar-nav'>
				<Nav className='mb-2 w-12/12 no-underline ml-auto text-2xl'>
					<Nav.Link
						eventkey='6'
						href='/'
						className='mb-0 py-1 px-2 no-underline ml-auto text-2xl whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'
					>
						home
					</Nav.Link>
					<Nav.Link
						eventkey='2'
						href='/about'
						className='mb-0 py-1 px-2 no-underline ml-auto text-2xl whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'
					>
						about
					</Nav.Link>
					<Nav.Link
						eventkey='3'
						href='/board'
						className='mb-0 py-1 px-2 no-underline ml-auto text-2xl whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'
					>
						board
					</Nav.Link>
					<Nav.Link
						eventkey='4'
						href='/events'
						className='mb-0 py-1 px-2 no-underline ml-auto text-2xl whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'
					>
						events
					</Nav.Link>
					<Nav.Link
						eventkey='5'
						href='/join'
						className='mb-0 py-1 px-2 no-underline ml-auto text-2xl whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'
					>
						join us
					</Nav.Link>
					<Nav.Link
						eventkey='7'
						href='https://membership-portal-prod-wyhkctdt6a-uw.a.run.app'
						className='mb-0 py-1 px-2 no-underline ml-2 text-2xl whitespace-nowrap bg-acm-blue w-full text-center !text-acm-black !font-medium hover:!text-acm-white hover:cursor-pointer rounded-xl'
					>
						login
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
