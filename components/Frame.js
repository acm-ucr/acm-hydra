import React from "react";
import Image from "./BlankSquare.png";

const Frame = () => {
	const frameStyle = {
		borderImage:
			"conic-gradient(from 10deg, marine 70deg, black 0deg, black 175deg, lightpurple 175deg, lightpurple 255deg, black 3deg)",
		borderImageSlice: 1,
	};

	return (
		<img
			className='ml-5 border-solid'
			src={Image}
			style={frameStyle}
			alt='Square image'
		/>
	);
};

export default Frame;
