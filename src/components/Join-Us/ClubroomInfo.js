import React, { useState } from 'react'
import "./ClubroomInfo.css"

const ClubroomInfo = () => {

    return (
        // where the room is
        // what it provides (whiteboard tables, whiteboard walls, study places, group study, snacks, etc)
        // where it's located (bytes)
        // who, what, when, where, how, and why
        <div>Join Us<br></br> 
            <iframe title="google-map" className="joinus-clubroominfo-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.6721601805466!2d-117.32812878475674!3d33.97526498062702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae5acf0fa1e7%3A0xa67be5dc0009c039!2sWinston%20Chung%20Hall%2C%20Riverside%2C%20CA%2092507!5e0!3m2!1sen!2sus!4v1651277816109!5m2!1sen!2sus" frameBorder="0" allowFullScreen="" loading="lazy"></iframe>
        </div>
        
    )
}

export default ClubroomInfo