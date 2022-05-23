import React, {useState} from 'react'
import './Tile.css'
import ReactCardFlip from 'react-card-flip'



// make carousel

const Tile = (props) => {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }
  return (

    <div className="about-tile-wrapper">
      <div class="about-tile-container">
        <ReactCardFlip isFlipped={toggle} flipDirection="horizontal">

          <div onClick={handleClick} className="about-tile-front">
            <span className="about-tile-header">{props.header}</span>

            <img src={props.image} class="about-tile-image" alt=""></img>

          </div>

          <div onClick={handleClick} className="about-tile-back">
            <span class="about-tile-description">{props.description}</span>
          </div>
        </ReactCardFlip>  
      </div>
    </div>
  )
}

export default Tile