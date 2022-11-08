import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Error = ({ title, description, border, background, setVisible }) => {
	return (
		<div className='w-full h-full fixed top-[5vh] left-0 flex justify-center z-[10000]'>
			<div
				className={`w-1/2 h-fit border-8 ${border} bg-white rounded-2xl p-3`}
			>
				<div className={`flex justify-between items-center`}>
					<p
						className={`text-acm-black ${background} rounded-full m-0 font-bold py-2 md:py-3 px-3 md:px-4 text-lg md:text-3xl`}
					>
						{title}
					</p>
					<button
						className='p-0 m-2 text-5xl'
						onClick={() => setVisible(false)}
					>
						<AiOutlinePlus className='text-acm-black rotate-45 p-0 m-0 hover:text-acm-red' />
					</button>
				</div>
				<div className='md:text-2xl text-lg p-2'>{description}</div>
			</div>
		</div>
	);
};

export default Error;
