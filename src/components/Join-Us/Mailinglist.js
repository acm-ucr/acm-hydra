import React from 'react'
import { useState } from 'react';

const Mailinglist = () => {

    const [email, setEmail] = useState("")
    const [submission, setSubmission] = useState(false)

    const handleTyping = (e) => {
        setEmail(e.target.value);
        console.log(email)
    }

    const click = () => {
        if (!email.includes("@") || !email.includes(".")) {
            alert("Invalid Email Address");
        }
        
        else {
            setSubmission(true)
        }

        console.log();
    }

    return (
        <div>
            <h1> Join Mailing List</h1>
            <input type="text" onChange={handleTyping} value={email} placeholder="Email" name=" " />
            <button onClick={click}>

            Join
            </button>
            <br/>
            {submission ? 'Thank you for joining!' : ''}
        </div>
    )
}


export default Mailinglist