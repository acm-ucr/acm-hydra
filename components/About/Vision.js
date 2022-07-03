import React from "react";
import styles from "./Vision.module.css";
import "./Tile.js";

const Vision = () => {
	return (
		<div className={styles.aboutVisionWrapper}>
			<div className={styles.aboutVisionContainer}>
				<div className={styles.aboutVisionHeader}>
					<p>Our Vision</p>
					<p>
						Our Vision is simple: To improve our members
						professionally, technically, and personally. We want to
						help our members grow throughout their college careers.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Vision;
