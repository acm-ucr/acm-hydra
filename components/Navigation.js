import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
	return (
		<Navbar
			collapseOnSelect
			className=' py-0 font-lexend w-12/12 px-3  m-0 !bg-acm-white h-[12vh] border-acm-blue border-b-4'
			expand='md'
			fixed='top'
		>
			<Navbar.Brand className='p-0'>
				<Nav.Link eventKey='1' className='p-0' href='/'>
					<img
						src='acm-ucr-logo.png'
						className='h-[11vh]'
						alt='ACM at UCR'
					/>
				</Nav.Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='navbar-nav' />
			<Navbar.Collapse id='navbar-nav' className='-mt-2'>
				<Nav className='mb-2 w-12/12 no-underline ml-auto text-2xl'>
					<Nav.Link
						className='m-0 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue'
						eventKey='6'
						href='/'
					>
						home
					</Nav.Link>
					<Nav.Link
						className='m-0 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue'
						eventKey='2'
						href='/about'
					>
						about
					</Nav.Link>
					<Nav.Link
						className='m-0 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue'
						eventKey='3'
						href='/board'
					>
						board
					</Nav.Link>
					<Nav.Link
						className='m-0 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue'
						eventKey='4'
						href='/events'
					>
						events
					</Nav.Link>
					<Nav.Link
						className='m-0 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue'
						eventKey='5'
						href='/join'
					>
						join us
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
