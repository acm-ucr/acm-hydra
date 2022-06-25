import React from "react";
import { useState } from "react";
import "./Mailinglist.css";

const Mailinglist = () => {
    const [email, setEmail] = useState("");
    const [submission, setSubmission] = useState(false);

    const handleTyping = (e) => {
        setEmail(e.target.value);
    };

    const click = () => {
        if (!email.includes("@") || !email.includes(".")) {
            alert("Invalid Email Address");
        } else {
            setSubmission(true);
        }
    };

    return (
        <div className="joinus-mailinglist-container">
            <div className="joinus-mailinglist-wrapper">
                <p className="joinus-mailinglist-header"> Join Mailing List</p>
                <input
                    className="joinus-mailinglist-input"
                    type="text"
                    onChange={handleTyping}
                    value={email}
                    placeholder="Email"
                    name=" "
                />
                <button className="joinus-mailinglist-submit" onClick={click}>
                    Join
                </button>
                {submission ? (
                    <p className="joinus-mailinglist-text">
                        Thank you for joining!
                    </p>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Mailinglist;
