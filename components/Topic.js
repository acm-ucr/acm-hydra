import React from "react";
const Topic = ({ topic, backgroundColor, textColor }) => {
	return (
		<div
			className={`flex min-w-fit w-11/12 justify-center items-center rounded-3xl border-2 border-black text-3xl font-bold py-5 my-3 shadow-[10px_-8px_0px_0px_black] text-${textColor} ${backgroundColor}`}
		>
			{topic}
		</div>
	);
};

export default Topic;
