import React from "react";
import styles from "./ProjectTile.module.css";
import PropTypes from "prop-types";

const ProjectTile = props => {
	return (
		<div className={styles.homeProjectTileWrapper}>
			<a href={props.link} target='_blank' rel='noopener noreferrer'>
				<img
					src={props.image}
					style={{ width: "100%" }}
					// className={styles.homeProjectTileProjectImage}
					alt=''
				/>
			</a>
		</div>
	);
};

ProjectTile.propTypes = {
	link: PropTypes.string,
	image: PropTypes.string,
};

export default ProjectTile;
