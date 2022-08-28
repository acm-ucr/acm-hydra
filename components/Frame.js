import React from "react";

const Frame = ({ squareImage }) => {
	return (
		<img
			className='ml-5 border-solid'
			src={squareImage}
			alt='Square image'
		/>
	);
};

export default Frame;
