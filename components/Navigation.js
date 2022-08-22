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
	// const [expanded, setExpanded] = useState(false);
	return (
		<Navbar collapseOnSelect bg='light' expand='lg'>
			<Navbar.Brand>
				<Link href='/' passHref>
					<Nav.Link eventKey='1'>
						<img
							src='public/acmlogo.png'
							alt=''
							width='70'
							height='70'
						></img>
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
							<Link align='right' href='/joinus' passHref>
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
