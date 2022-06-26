import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./ClubroomInfo.module.css";

const ClubroomInfo = () => {
	const [rcard, setRcard] = useState("");
	const [submission, setSubmission] = useState(false);

	const handleSubmit = () => {
		if (rcard.length == 16 && !isNaN(rcard)) {
			console.log(rcard);
			setSubmission(true);
		} else {
			alert(
				"ERROR: ENTER USING THE FOLLOWING FORMAT XXXX-XXXX-XXXX-XXXX with no hyphens!"
			);
			return;
		}
	};

	const handleTyping = e => {
		setRcard(e.target.value);
	};

	return (
		<div className={styles.joinusClubroominfoContainer}>
			<div className={styles.joinusClubroominfoWrapper}>
				<p className={styles.joinusClubroominfoText}>
					The ACM clubroom is located on the first floor of Winston
					Chung Hall, Room 127. The room provides whiteboard tables
					and whiteboard walls, making it a great place to study
					individually or in groups. It also has snacks, a microwave,
					a refridgerator, and lockers.
				</p>
				<iframe
					title='google-map'
					className={styles.joinusClubroominfoMap}
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.6721601805466!2d-117.32812878475674!3d33.97526498062702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae5acf0fa1e7%3A0xa67be5dc0009c039!2sWinston%20Chung%20Hall%2C%20Riverside%2C%20CA%2092507!5e0!3m2!1sen!2sus!4v1651277816109!5m2!1sen!2sus'
					frameBorder='0'
					allowFullScreen=''
					loading='lazy'
				></iframe>
				<p className={styles.joinusClubroominfoText}>
					Want clubroom access?Just give us your full name and
					R&apos;Card number, then click submit!
					<br />
				</p>
				<Row
					className={styles.joinusClubroominfoInputWrapper}
					style={{ width: "80%" }}
				>
					<Col
						xl={6}
						sm={12}
						className={styles.joinusClubroominfoInputWrapper}
					>
						<input
							className={styles.joinusClubroominfoInput}
							type='text'
							placeholder='Full Name'
							id='fname'
							name='fname'
						/>
					</Col>
					<Col
						xl={6}
						sm={12}
						className={styles.joinusClubroominfoInputWrapper}
					>
						<input
							className={styles.joinusClubroominfoInput}
							type='text'
							placeholder='RCard Number'
							onChange={handleTyping}
							value={rcard}
						/>
					</Col>
				</Row>
				<button
					className={styles.joinusClubroominfoSubmit}
					onClick={handleSubmit}
				>
					Submit
				</button>

				{submission ? (
					<p className={styles.joinusClubroominfoText}>
						Thank you for submitting! You may expect your card
						access to be granted within 2 weeks
					</p>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default ClubroomInfo;
