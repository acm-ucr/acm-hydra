import React from "react";
import styles from "./Link.module.css";
import PropTypes from "prop-types";

const Link = ({ link, name, abbreviation }) => {
	return (
		<div className={styles.joinusLinkContainer}>
			<a
				className='joinus-link-link'
				href={link}
				target='_blank'
				rel='noreferrer'
			>
				<p className={styles.joinusLinkName}>{name}</p>
			</a>
			<p className={styles.joinusLinkAbbreviation}>{abbreviation}</p>
		</div>
	);
};

Link.propTypes = {
	link: PropTypes.string,
	name: PropTypes.string,
	abbreviation: PropTypes.string,
};

export default Link;
