import Link from "next/link";

const Footer = () => {
	return (
		<footer className='py-6 dark:bg-gray-800 dark:text-gray-50'>
			<div className='container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50'>
				<div className='grid grid-cols-12'>
					<div className='pb-6 col-span-full md:pb-0 md:col-span-6'>
						<a
							rel='noopener noreferrer'
							href='\'
							className='flex justify-center space-x-3 md:justify-start'
						>
							<div className='flex items-center justify-center w-24 h-24'>
								<img
									src='https://acmucr.org/src/images/acm_ucr_logo.png'
									alt='ACM Logo'
								/>
							</div>
						</a>
					</div>
					<div className='col-span-6 text-center md:text-left md:col-span-3'>
						<p className='pb-1 text-lg font-medium'>ACM</p>
						<ul>
							<li>
								<Link href='about'>
									<a
										rel='noopener noreferrer'
										className='hover:text-blue-600'
									>
										About Us
									</a>
								</Link>
							</li>
							<li>
								<Link href='\'>
									<a
										rel='noopener noreferrer'
										className='hover:text-blue-600'
									>
										Board
									</a>
								</Link>
							</li>
							<li>
								<Link href='join'>
									<a
										rel='noopener noreferrer'
										className='hover:text-blue-600'
									>
										Join Us
									</a>
								</Link>
							</li>
							<li>
								<Link href='events'>
									<a
										rel='noopener noreferrer'
										className='hover:text-blue-600'
									>
										Events
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className='col-span-6 text-center md:text-left md:col-span-3'>
						<p className='pb-1 text-lg font-medium'>Resources</p>
						<ul>
							<li>
								<Link href='\'>
									<a
										rel='noopener noreferrer'
										className='hover:text-blue-600'
									>
										Resume Review
									</a>
								</Link>
							</li>
							<li>
								<Link href='\'>
									<a
										rel='noopener noreferrer'
										className='hover:text-blue-600'
									>
										Mock Interview
									</a>
								</Link>
							</li>
							<li>
								<Link href='\'>
									<a
										rel='noopener noreferrer'
										className='hover:text-blue-600'
									>
										Mentor & Mentee Forms
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='grid justify-center pt-6 lg:justify-between'>
					<div className='flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6'>
						<span>©2022 All rights reserved</span>
						<a rel='noopener noreferrer' href='#'>
							<span>Privacy policy</span>
						</a>
						<a rel='noopener noreferrer' href='#'>
							<span>Terms of service</span>
						</a>
					</div>
					<div className='flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13'>
						<a
							rel='noopener noreferrer'
							href='#'
							title='Discord'
							className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-gray-50'
						>
							<svg 
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor" 
								className='w-5 h-5'
							>
  								<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
							</svg>
						</a>
						<a
							rel='noopener noreferrer'
							href='#'
							title='Slack'
							className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-gray-50'
						>
							<svg 
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'  
								className='w-5 h-5'
							>
								<path d='M9.066 1a2.2 2.2 0 1 0 .001 4.4h2.2V3.2a2.202 2.202 0 0 0-2.2-2.2Zm0 5.867H3.2a2.2 2.2 0 0 0 0 4.4h5.866a2.2 2.2 0 1 0 0-4.4ZM23 9.066a2.2 2.2 0 0 0-4.4 0v2.2h2.2a2.2 2.2 0 0 0 2.2-2.2Zm-5.867 0V3.2a2.2 2.2 0 0 0-4.4 0v5.866a2.2 2.2 0 1 0 4.4 0ZM14.933 23a2.2 2.2 0 1 0 0-4.4h-2.2v2.2a2.201 2.201 0 0 0 2.2 2.2Zm0-5.868H20.8a2.2 2.2 0 0 0 0-4.4h-5.866a2.2 2.2 0 0 0-.001 4.4ZM1 14.933a2.2 2.2 0 0 0 4.4 0v-2.2H3.2a2.2 2.2 0 0 0-2.2 2.2Zm5.867 0v5.866a2.2 2.2 0 0 0 4.4.001v-5.866a2.2 2.2 0 0 0-4.4-.001Z'/>
							</svg>
						</a>
						<a
							rel='noopener noreferrer'
							href='#'
							title='Instagram'
							className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-gray-50'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 24 24'
								className='w-5 h-5'
							>
								<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
