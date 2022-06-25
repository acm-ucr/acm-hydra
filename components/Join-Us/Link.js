import React from "react";
import "./Link.css";

const Link = ({ link, name, abbreviation }) => {
	return (
		<div className='joinus-link-container'>
			<a
				className='joinus-link-link'
				href={link}
				target='_blank'
				rel='noreferrer'
			>
				<p className='joinus-link-name'>{name}</p>
			</a>
			<p className='joinus-link-abbreviation'>{abbreviation}</p>
		</div>
	);
};

Link.propTypes = {
	link: PropTypes.string,
	name: PropTypes.string,
	abbreviation: PropTypes.string,
};

export default Link;
