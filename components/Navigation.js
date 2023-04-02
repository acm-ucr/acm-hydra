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
				<Link eventkey='1' className='p-0' href='/'>
					<img
						src='acm-ucr-logo.webp'
						className='h-[11vh]'
						alt='ACM at UCR'
					/>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='navbar-nav' />
			<Navbar.Collapse id='navbar-nav'>
				<Nav className='mb-2 w-12/12 no-underline ml-auto text-2xl'>
					<Link eventkey='6' href='/' className='no-underline'>
						<p className='mb-0 py-1 px-2 no-underline ml-auto text-2xl whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'>
							home
						</p>
					</Link>
					<Link
						eventkey='2'
						href='/about'
						className='no-underline p-0 m-0'
					>
						<p className='mb-0 py-1 px-2 no-underline ml-auto text-2xl whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'>
							about
						</p>
					</Link>
					<Link eventkey='3' href='/board' className='no-underline'>
						<p className='mb-0 py-1 px-2 no-underline ml-auto text-2xl whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'>
							board
						</p>
					</Link>
					<Link eventkey='4' href='/events' className='no-underline'>
						<p className='mb-0 py-1 px-2 no-underline ml-auto text-2xl whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'>
							events
						</p>
					</Link>
					<Link eventkey='5' href='/join' className='no-underline'>
						<p className='mb-0 py-1 px-2 no-underline ml-auto text-2xl whitespace-nowrap bg-acm-white w-full text-center !text-acm-black !font-medium hover:!text-acm-blue hover:cursor-pointer'>
							join us
						</p>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
