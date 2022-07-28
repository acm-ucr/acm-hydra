import React from "react";

const Profile = (props) => {
  const mailTo = "mailTo:" + props.person.email;
	return (
		<div className='profileCard flex w-3/6'>
			<div className='max-w-sm rounded-md shadow-md dark:dark:bg-gray-900 dark:dark:text-gray-100'>
				<h1 className='text-center text-3xl font-semibold tracking-wide'>
					{props.person.position}
				</h1>
				<img
					src={props.person.image}
					alt=''
					className='object-cover object-center w-full rounded-t-md h-72 dark:dark:bg-gray-500'
				></img>
				<div className='flex flex-col justify-between p-6 space-y-8'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-semibold tracking-wide'>
							{props.person.name} ({props.person.pronoun})
						</h2>
						<p className='dark:dark:text-gray-100'>
							{props.person.bio}
						</p>
					</div>
					<div className='flex gap-8'>
						<a
							type='button'
							href={props.person.linkedin}
							className='no-underline flex-auto items-center justify-evenly p-3 font-semibold tracking-wide rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900'
						>
							LinkedIn
						</a>
						<a
							type='button'
							href={mailTo}
							className='no-underline flex-auto items-center justify-evenly p-3 font-semibold tracking-wide rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900'
						>
							Email
						</a>
						<a
							type='button'
							href={props.person.github}
							className='no-underline flex-auto items-center justify-evenly p-3 font-semibold tracking-wide rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900'
						>
							Github
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;