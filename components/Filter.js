import React from "react";

const Filter = ({ topic }) => {
	return (
		<div className='w-[20%] h-[100%] flex justify-between bg-black rounded-full'>
			<div className='w-[14%] h-[65%] self-center ml-[7%] bg-[#ff5370] rounded-full'></div>
			<div className='font-lexend text-[40%] text-white self-center mr-[8%]'>
				{topic}
			</div>
		</div>
	);
};

export default Filter;
