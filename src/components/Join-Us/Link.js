import React from 'react'
import "./Link.css"

const Link = ({ img, link, name, abbreviation }) => {
    return (
        <div className="joinus-link-container">
            <a className = "joinus-link-link" href={link} target="_blank">
                <p className = "joinus-link-name">{name}</p> 
            </a>
            <p className = "joinus-link-abbreviation">{abbreviation}</p>
        </div>
    )
}

Link.defaultProps = {
    offset: "50% 50%"
}

export default Link
