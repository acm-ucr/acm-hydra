import React from "react";
import { useState } from "react";
import styles from "./Mailinglist.module.css";

const Mailinglist = () => {
	const [email, setEmail] = useState("");
	const [submission, setSubmission] = useState(false);

	const handleTyping = e => {
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
		<div className={styles.joinusMailinglistContainer}>
			<div className={styles.joinusMailinglistWrapper}>
				<p className={styles.joinusMailinglistHeader}>
					{" "}
					Join Mailing List
				</p>
				<input
					className={styles.joinusMailinglistInput}
					type='text'
					onChange={handleTyping}
					value={email}
					placeholder='Email'
					name=' '
				/>
				<button
					className={styles.joinusMailinglistSubmit}
					onClick={click}
				>
					Join
				</button>
				{submission ? (
					<p className={styles.joinusMailinglistText}>
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
