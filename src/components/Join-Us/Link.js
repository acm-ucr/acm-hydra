import React from 'react'
import "./Link.css"

const Link = (props) => {
    return (
        <div className="link-card">
            <img src={props.img} style={{ objectFit: "cover", objectPosition: props.offset }} alt="Link"/>
            <p className="link-name">{props.name}</p>
            <p className='link-position'>{props.position}</p>
        </div>
    )
}

Link.defaultProps = {
    offset: "50% 50%"
}

export default Link
