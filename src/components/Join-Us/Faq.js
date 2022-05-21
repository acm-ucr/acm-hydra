import React, { useState } from 'react'
import "./Faq.css"

const Faq = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    console.log(toggle);
    setToggle(!toggle)
  }

  return (

    <div className="faq-wrapper">
      <h1>Frequently Asked Questions</h1>
      <div className="dropdown">
        <button className="dropbtn" onClick={handleToggle} >Dropdown</button>

        {
          toggle ? <div
           className="dropdown-content"
           >
           hello
          </div> : <></>
        }

      </div>
    </div>

  )
}

export default Faq