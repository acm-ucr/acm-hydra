import React, { useState } from 'react'
import "./Faq.css"

const Faq = () => {

  const [toggle1, setToggle1] = useState(false);

  const handleToggle1 = () => {
    console.log(toggle1);
    setToggle1(!toggle1)
  }

  const [toggle2, setToggle2] = useState(false);

  const handleToggle2 = () => {
    console.log(toggle2);
    setToggle2(!toggle2)
  }

  return (

    <div className="faq-wrapper">
      <center><h1>Frequently Asked Questions</h1></center>
      <div className="dropdown">
        <center><button className="dropbtn" onClick={handleToggle1} >What is your name?</button></center>

        {
          toggle1 ? <center><div
           className="dropdown-content"
           >
           please be quiet
          </div></center> : <></>
        }
        
        <center><button className="dropbtn" onClick={handleToggle2} >Want a break</button></center>

        {
          toggle2 ? <center><div
          className="dropdown-content"
          >
          from the ads?
          </div></center> : <></>
        }

        

      </div>
    </div>

  )
}

export default Faq