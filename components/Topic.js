import React from "react";
const Topic = ({ topic, backgroundColor, textColor }) => {
	return (
		<div>
			<div
				className='flex justify-center items-center w-96 h-36 rounded-3xl border-2 border-black mb-8 shadow-black'
				style={{
					backgroundColor: backgroundColor,
					color: textColor,
					boxShadow: "10px -8px black",
				}}
			>
				<div className='flex justify-center items-center text-3xl font-bold font-lexend'>
					{topic}
				</div>
			</div>
		</div>
	);
};

export default Topic;
