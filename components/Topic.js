import React from "react";
const Topic = ({ topic, backgroundColor, textColor }) => {
	return (
		<div
			className='flex min-w-fit w-11/12 justify-center items-center rounded-3xl border-2 border-acm-black text-3xl font-bold py-5 my-3'
			style={{
				backgroundColor: backgroundColor,
				color: textColor,
				boxShadow: "10px -8px acm-black",
			}}
		>
			{topic}
		</div>
	);
};

export default Topic;
