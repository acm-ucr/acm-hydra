import React, { useState } from 'react'
import "./ClubroomInfo.css"

const ClubroomInfo = () => {

    const [rcard, setRcard] = useState("")
    const [submission, setSubmission] = useState(false)

    const handleSubmit = () => {
        // if ()
            setSubmission(true)
    }

    return (
        // where the room is
        // what it provides (whiteboard tables, whiteboard walls, study places, group study, snacks, etc)
        // where it's located (bytes)
        // who, what, when, where, how, and why

        // Implement Google Map of Clubroom
        // Specify room number
        // List out features (snacks, whiteboards, tables, microwave, fridge, lockers, etc)

        // clubroom access
        // implement like mailing list: submit button, full name, r'card number

        <div>The ACM clubroom is located on the first floor of Winston Chung Hall, Room 127.
            The room provides whiteboard tables and whiteboard walls, making it a great place to study individually or in groups.
            It also has snacks, a microwave, a refridgerator, and lockers.
            <br />
            <iframe title="google-map" className="joinus-clubroominfo-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.6721601805466!2d-117.32812878475674!3d33.97526498062702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae5acf0fa1e7%3A0xa67be5dc0009c039!2sWinston%20Chung%20Hall%2C%20Riverside%2C%20CA%2092507!5e0!3m2!1sen!2sus!4v1651277816109!5m2!1sen!2sus" frameBorder="0" allowFullScreen="" loading="lazy"></iframe>
            <br />

            Want clubroom access? Just give us your full name and R'Card number, then click submit!<br />
            <label for="fname">Full Name:</label>
            <input type="text" id="fname" name="fname" />
            <label for="cardnum">R'Card Number:</label>
            <input type="text" id="cardnum" name="cardnum" />
            <button onClick={handleSubmit}>Submit</button>
            <br />
            {submission ? 'Thank you!' : ''}

        </div>

    )
}

export default ClubroomInfo