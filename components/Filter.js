import React from "react";

const Filter = ({ topic }) => {
	return (
		<div className='w-[270px] h-[55px] flex justify-between bg-black rounded-full'>
			<div className='text-white w-9 h-9 self-center ml-5 bg-[#ff5370] rounded-full'></div>
			<div className='font-lexend text-white self-center mr-5'>
				{topic}
			</div>
		</div>
	);
};

export default Filter;
