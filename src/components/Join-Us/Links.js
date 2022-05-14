// import React from 'react'
import React from 'react'
import "./Links.css"

const Links = () => {

  return (
    <div>

      <div className="joinus-links-header" >
        <p>Join ACM@UCR</p>
      </div>
      <div className="joinus-links-image">
         <img src="https://i.imgur.com/1aKMX30.png" width="15%" height="15%" alt="ACM @ UCR Logo"></img> 
      </div>
      <br /><br />
      <div className="joinus-links-orgs">
        <p>Affiliated Organizations</p>
        <a className="joinus-links-cs-orgs" href="https://cyber.cs.ucr.edu/" target="_parent">Cyber @ UCR</a>
        <a className="joinus-links-cs-orgs" href="https://winc.cs.ucr.edu/" target="_parent">WINC</a>
        <a className="joinus-links-cs-orgs" href="https://gamespawn.github.io/" target="_parent">Gamespawn</a>
        <a className="joinus-links-cs-orgs" href="https://ieee.ucr.edu/" target="_parent">IEEE</a>
        <a className="joinus-links-cs-orgs" href="https://ucrsolarcar.com/" target="_parent">Solar Car</a>
        <a className="joinus-links-cs-orgs" href="https://ucrswe.org/" target="_parent">SWE</a>
      </div>
    </div>

  )
}

export default Links