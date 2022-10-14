import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const Project = ({
	title,
	timeline,
	description,
	github,
	deployed,
	shadowcolor,
	titlecolor,
}) => {
	return (
		<div
			className={`${shadowcolor} font-lexend p-3 flex justify-start items-center flex-col h-full bg-acm-black rounded shadow-[10px_-8px_0px_0px]`}
		>
			<></>
			<div className={`${titlecolor} text-center inline text-3xl`}>
				{title}
				<br />
				<p className='text-acm-white  inline text-xl'>{timeline}</p>
			</div>

			<br />
			<p className='text-acm-white text-xl text-center'>{description}</p>

			<div className='flex justify-evenly  w-3/6 text-5xl items-center flex-row '>
				{github && (
					<a
						href={github}
						className='text-acm-white hover:text-gray-300 '
						target='_blank'
						rel='noreferrer'
					>
						<FaGithub />
					</a>
				)}

				{deployed && (
					<a
						href={deployed}
						className='text-acm-white hover:text-gray-300'
						target='_blank'
						rel='noreferrer'
					>
						<BsGlobe />
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;
