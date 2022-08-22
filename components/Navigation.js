import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// import About from "../pages/about.js";
// import Events from "../pages/events.js";
// import Board from "../pages/board.js";
// import Join from "../pages/join.js";
// import IndexPage from "../pages/index.js";
import Link from "next/link";

// const LinkPage = pages => {
// 	if (pages == "about") {
// 		return <About />;
// 	} else if (pages == "events") {
// 		return <Events />;
// 	} else if (pages == "board") {
// 		return <Board />;
// 	} else if (pages == "joinus") {
// 		return <Join />;
// 	} else if (pages == "home") {
// 		return <IndexPage />;
// 	}
// };

const Navigation = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Navbar.Brand>
				<Link href='/'>
					<img
						src='data:image/png;base64,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'
						alt=''
						width='70'
						height='70'
					></img>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<ul className='navbar-nav ml-auto float-rightmb-2 mb-lg-0'>
						<li className='nav-item active nav-link font-lexend text-black'>
							<Link align='right' href='/about'>
								<a className='text-black no-underline'>about</a>
							</Link>
						</li>
						<li className='nav-item active nav-link font-lexend font-color-black'>
							<Link align='right' href='/board'>
								<a className='text-black no-underline'>board</a>
							</Link>
						</li>
						<li className='nav-item active nav-link font-lexend font-color-black'>
							<Link align='right' href='/events'>
								<a className='text-black no-underline'>
									events
								</a>
							</Link>
						</li>
						<li className='nav-item active nav-link font-lexend font-color-black'>
							<Link align='right' href='/joinus'>
								<a className='text-black no-underline'>
									join us
								</a>
							</Link>
						</li>
					</ul>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

{
	/* <div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light fs-5 font-lexend'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/'>
						<LinkPage page='home' />
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='dropdown'
						data-bs-target='#navbarToggler'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='navbar-collapse collapse'
						id='navbarToggler'
					></div>
				</div>
			</nav>
		</div>
	);
}; */
}

export default Navigation;
