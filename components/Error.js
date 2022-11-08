import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Error = ({ title, description, border, background, setVisible }) => {
	return (
		<div className='w-full h-full fixed top-[14vh] right-4 flex justify-end z-[10000]'>
			<div
				className={`lg:w-1/3 md:w-6/12 w-8/12 h-fit border-4 ${border} bg-white rounded-full p-1 px-2`}
			>
				<div className={`flex justify-between items-center`}>
					<p
						className={`text-acm-black ${background} rounded-full whitespace-nowrap m-0 font-bold py-2 md:py-3 px-3 md:px-4 text-lg md:text-xl`}
					>
						{title}
					</p>
					<div className='md:text-xl text-lg p-2  text-center'>
						{description}
					</div>
					<button
						className='p-0 m-2 text-5xl'
						onClick={() => setVisible(false)}
					>
						<AiOutlinePlus className='text-acm-black rotate-45 p-0 m-0 hover:text-acm-red' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Error;
