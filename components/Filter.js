import React from "react";

const Filter = ({ topic, color }) => {
	return (
		<div className='w-full h-full px-2 py-1 flex justify-between bg-black rounded-full'>
			<div
				className={`w-5 h-5 self-center flex-none rounded-full bg-[${color}]`}
			></div>
			<div className='font-lexend text-xs ml-2 truncate max-w-min text-white self-center '>
				{topic}
			</div>
		</div>
	);
};

export default Filter;
