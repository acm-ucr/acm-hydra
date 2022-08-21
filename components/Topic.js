import React from "react";
const Topic = ({ topic, backgroundColor, textColor }) => {
	return (
		<div>
			<div
				className={`flex justify-center items-center rounded-3xl border-2 border-black mb-8 shadow-black bg-${backgroundColor} text-${textColor}`}
				style={{
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
