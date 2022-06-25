import React from "react";

const Link = ({ name, img, link }) => {
	return (
		<div className='home-link-container'>
			<a href={link} target='_blank' rel='noopener noreferrer'>
				{img}
			</a>
		</div>
	);
};

Link.propTypes = {
	link: PropTypes.string,
	name: PropTypes.string,
	img: PropTypes.any,
};

export default Link;
