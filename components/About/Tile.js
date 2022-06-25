import React, { useState } from "react";
import "./Tile.css";
import ReactCardFlip from "react-card-flip";

// make carousel

const Tile = props => {
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		setToggle(!toggle);
	};
	return (
		<div className='about-tile-wrapper'>
			<div className='about-tile-container'>
				<ReactCardFlip isFlipped={toggle} flipDirection='horizontal'>
					<div onClick={handleClick} className='about-tile-front'>
						<span className='about-tile-header'>
							{/* {props.header} */}
						</span>

						<img
							// src={props.image}
							className='about-tile-image'
							alt=''
						></img>
					</div>

					<div onClick={handleClick} className='about-tile-back'>
						<span className='about-tile-description'>
							{/* {props.description} */}
						</span>
					</div>
				</ReactCardFlip>
			</div>
		</div>
	);
};

export default Tile;
