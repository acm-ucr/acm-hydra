import React from "react";

const Resume = () => {
	return (
		<section className='p-6 dark:bg-gray-800 dark:text-gray-50'>
			<div className='container mx-auto flex flex-col items-center px-4 py-5 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl'>
				<h1 className='text-4xl font-bold leading-none sm:text-5xl'>
					2022-2023
					<span className='dark:text-violet-400'>
						{" "}
						Resume Review{" "}
					</span>
					Request
				</h1>
				<p className='px-8 mt-8 mb-12 text-lg'>
					Your resume will never be shared. Only officers will have
					access to your resume.
				</p>
			</div>
			<form
				noValidate=''
				action=''
				className='container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid'
			>
				<fieldset className='grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900'>
					<div className='space-y-2 col-span-full lg:col-span-1'>
						<p className='font-medium'>Personal Information</p>
						<p className='text-xs'>
							Please enter the following details
						</p>
					</div>
					<div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-3'>
						<div className='col-span-full sm:col-span-3'>
							<label htmlFor='firstname' className='text-sm'>
								First name
							</label>
							<input
								id='firstname'
								type='text'
								placeholder='First name'
								className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
							/>
						</div>
						<div className='col-span-full sm:col-span-3'>
							<label htmlFor='lastname' className='text-sm'>
								Last name
							</label>
							<input
								id='lastname'
								type='text'
								placeholder='Last name'
								className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
							/>
						</div>
						<div className='col-span-full'>
							<label htmlFor='email' className='text-sm'>
								Email
							</label>
							<input
								id='email'
								type='text'
								placeholder='Email'
								className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
							/>
						</div>
						<div className='col-span-full sm:col-span-3'>
							<label htmlFor='major' className='text-sm'>
								Major
							</label>
							<input
								id='major'
								type='text'
								placeholder='Major'
								className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
							/>
						</div>
						<div className='col-span-full sm:col-span-3'>
							<label htmlFor='lastname' className='text-sm'>
								Year
							</label>
							<input
								id='year'
								type='text'
								placeholder='Year'
								className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
							/>
						</div>
					</div>
				</fieldset>
				<fieldset className='grid grid-cols-4 gap-5 p-6 rounded-md shadow-sm dark:bg-gray-900'>
					<div className='space-y-2 col-span-full lg:col-span-1'>
						<p className='font-medium'>
							Resume-Specific Information
						</p>
						<p className='text-xs'>Enter resume information </p>
					</div>
					<div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-3'>
						<div className='col-span-full'>
							<label htmlFor='email' className='text-sm'>
								What type of role are you using this resume to
								apply for?
							</label>
							<input
								id='role'
								type='text'
								placeholder='Intern, FTE, etc...'
								className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
							/>
						</div>
						<div className='col-span-full'>
							<label
								htmlFor='Toggle1'
								className='inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100'
							>
								<span className='relative'>
									<input
										id='Toggle1'
										type='checkbox'
										className='hidden peer'
									></input>
									<div className='w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400'></div>
									<div className='absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800'></div>
								</span>
								<span>
									Upload resume and await emailed
									feedback/annotations
								</span>
							</label>
						</div>
						<div className='col-span-full'>
							<label
								htmlFor='Toggle2'
								className='inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100'
							> 
								<span className='relative'>
									<input
										id='Toggle2'
										type='checkbox'
										className='hidden peer'
									></input>
									<div className='w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400'></div>
									<div className='absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800'></div>
								</span>
								<span>
									Meet over Zoom (we will reach out to
									schedule a meeting)
								</span>
							</label>
						</div>
					</div>
				</fieldset>
			</form>
		</section>
	);
};

export default Resume;
