import React from 'react'
import { useState } from 'react';

const Mailinglist = () => {

    const [email, setEmail] = useState("")

    const handleTyping = (e) => {
        setEmail(e.target.value);
        console.log(email)
    }

    const click =()=> {
        if ((email.contain != ".") || (email.contain != "@")) {
            alert("Invalid Email Address");
        }
        console.log();
    }
    return (
        <div> 
            <h1> Join Mailing List</h1>
            <input type="text" onChange = {handleTyping} value = {email} placeholder = "Email" name = " "/> 
            <button onClick = {click}> 
         
            Join
            </button>
        </div>
    )
}


export default Mailinglist