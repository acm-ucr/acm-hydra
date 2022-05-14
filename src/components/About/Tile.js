import React from 'react'
import './Tile.css'
 
// make carousel

const Tile = (props) => {
  return (
    <div class="about-tile-wrapper">
      <div class="about-tile-container">
        <div class="about-tile-header">
          <h6>{props.header}</h6>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Tile