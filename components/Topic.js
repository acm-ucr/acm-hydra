import React from "react";

const Topic = ({ Topic, BackgroundColor, TextColor }) => {
	return (
		<div className='flex w-full h-full'>
			<div
				className='self-center box-border h-24 w-52 border-2 border-black rounded-3xl py-3'
				style={{
					backgroundColor: BackgroundColor,
					color: TextColor,
				}}
			></div>
			<div className='flex font-lexend font-bold text-lg'>{Topic}</div>
		</div>
	);
};

export default Topic;
