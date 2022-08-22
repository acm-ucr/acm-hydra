import React from "react";
const Topic = ({ topic, backgroundColor, textColor }) => {
	return (
		<div
			className='flex w-11/12 justify-center items-center rounded-3xl border-2 border-black my-4 text-3xl font-bold font-lexend'
			style={{
				backgroundColor: backgroundColor,
				color: textColor,
				boxShadow: "10px -8px black",
			}}
		>
			{topic}
		</div>
	);
};

export default Topic;
