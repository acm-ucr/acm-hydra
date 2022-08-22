import React from "react";
const Topic = ({ topic, backgroundColor, textColor }) => {
	return (
		<div
			className='flex min-w-fit w-11/12 justify-center items-center rounded-3xl border-2 border-black text-3xl font-bold font-lexend py-5 my-3'
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
