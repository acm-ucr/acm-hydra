import React from "react";

const Topic = ({ topic, backgroundcolor, textcolor }) => {
	return (
		<div className='flex w-full h-full'>
			<div
				style={{
					justifySelf: "center",
					borderRadius: "1.5rem",
					borderWidth: "2px",
					borderColor: "black",
					paddingTop: "0.75rem",
					paddingBottom: "0.75rem",
					backgroundColor: backgroundcolor,
					color: textcolor,
					boxShadow: "8px -6px black",
				}}
			>
				<div className='flex justify-center items-center py-3 font-lexend font-bold text-lg'>
					{topic}
				</div>
			</div>
		</div>
	);
};

export default Topic;
