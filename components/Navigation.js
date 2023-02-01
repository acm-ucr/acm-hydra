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
				<Link eventKey='1' className='p-0' href='/'>
					<img
						src='acm-ucr-logo.png'
						className='h-[11vh]'
						alt='ACM at UCR'
					/>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='navbar-nav' />
			<Navbar.Collapse id='navbar-nav' className='-mt-2'>
				<Nav className='mb-2 w-12/12 no-underline ml-auto text-2xl'>
					<Link eventKey='6' href='/'>
						<p className='mb-2 w-12/12 no-underline ml-auto text-2xl width-25 m-2 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'>
							home
						</p>
					</Link>
					<Link eventKey='2' href='/about' classname='no-underline'>
						<p className='mb-2 w-12/12 no-underline ml-auto text-2xl width-25 m-2 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'>
							about
						</p>
					</Link>
					<Link eventKey='3' href='/board' classname='no-underline'>
						<p className='mb-2 w-12/12 no-underline ml-auto text-2xl width-25 m-2 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'>
							board
						</p>
					</Link>
					<Link eventKey='4' href='/events' classname='no-underline'>
						<p className='mb-2 w-12/12 no-underline ml-auto text-2xl width-25 m-2 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'>
							events
						</p>
					</Link>
					<Link eventKey='5' href='/join' classname='no-underline'>
						<p className='mb-2 w-12/12 no-underline ml-auto text-2xl width-25 m-2 whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'>
							join us
						</p>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
