import React from "react";
// import { useState } from "react"
import styles from "./Tile.module.css";
// import ReactCardFlip from "react-card-flip";

// make carousel

const Tile = props => {
	// const [toggle, setToggle] = useState(false);

	// const handleClick = () => {
	//     setToggle(!toggle);
	// };

	return (
		<div className={styles.aboutTileWrapper}>
			<div className={styles.aboutTileContainer}>
				{/* <ReactCardFlip isFlipped={toggle} flipDirection='horizontal'>
                    <div onClick={handleClick} className={styles.aboutTileFront}>
                        <span className={styles.aboutTileHeader}>
                         
                        </span>

                        <img
                           
                            className={styles.aboutTileImage}
                            alt=''
                        ></img>
                    </div>

                    <div onClick={handleClick} className={styles.aboutTileBack}>
                        <span className={styles.aboutTileDescription}>
                           
                        </span>
                    </div>
                </ReactCardFlip >  */}
			</div>
		</div>
	);
};

export default Tile;
