import React from "react";

const Filter = ({ topic, color }) => {
	return (
		<div className='w-full h-full px-2 py-1 flex justify-between bg-acm-black rounded-full'>
			<div
				className={`w-5 h-5 self-center flex-none rounded-full`}
				style={{ backgroundColor: color }}
			></div>
			<div className='font-lexend text-xs min-w-fit text-white flex justify-center items-center '>
				{topic}
			</div>
		</div>
	);
};

export default Filter;
