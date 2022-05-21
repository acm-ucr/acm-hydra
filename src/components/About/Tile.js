import React, {useState} from 'react'
import './Tile.css'
import ReactCardFlip from 'react-card-flip'



// make carousel

const Tile = (props) => {
  // constructor() {
  //   super();
  //     this.state = {
  //     isFlipped: false
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }
  return (

    <ReactCardFlip isFlipped={toggle} flipDirection="vertical">
      <div className="about-tile-front">
        <span className="about-tile-header">{props.header}</span>

        <img src={props.image} class="about-tile-image"></img>

        <button onClick={handleClick}>Click to flip</button>
      </div>

      <div className="about-tile-back">
        <span>{props.description}</span>
        <button onClick={handleClick}>Click to flip</button>
      </div>
    </ReactCardFlip>
  )
}

export default Tile