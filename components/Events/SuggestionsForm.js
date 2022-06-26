import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./SuggestionsForm.module.css";

const SuggestionsForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [suggestion, setSuggestion] = useState("");
	const [submit, setSubmit] = useState(false);

	const handleSubmit = () => {
		console.log("Name: " + name);
		console.log("Email: " + email);
		console.log("Suggestion: " + suggestion);
		if (name !== "" && email !== "" && suggestion !== "") {
			setSubmit(true);
		} else {
			setSubmit(false);
		}
	};

	return (
		<div className={styles.eventsSuggestionsformWrapper}>
			<Container
				className={styles.eventsSuggestionsformBoostrapwrapper}
				fluid
			>
				<Row>
					<Col>
						<div className={styles.eventsSuggestionsformName}>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								id='name'
								name='name'
								value={name}
								placeholder='name'
								onChange={e => setName(e.target.value)}
							/>
						</div>
					</Col>
					<Col>
						<div className={styles.eventsSuggestionsformEmail}>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								id='email'
								email='email'
								value={email}
								placeholder='email'
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
					</Col>
					<Col>
						<div className={styles.eventsSuggestionsformSuggestion}>
							<label htmlFor='suggestion'>Suggestion</label>
							<textarea
								id='suggestion'
								className={styles.eventsSuggesstionsTextArea}
								suggestion='suggestion'
								value={suggestion}
								placeholder='suggestion'
								onChange={e => setSuggestion(e.target.value)}
							/>
						</div>
					</Col>
					<Col>
						<div className={styles.eventsSuggestionsformSubmit}>
							<button
								onClick={handleSubmit}
								type='button'
								id='submit'
							>
								Submit
							</button>
						</div>
					</Col>
				</Row>
			</Container>
			{submit ? (
				<h3>
					{" "}
					Thank you for your suggestion! An officer will get back to
					you shortly!{" "}
				</h3>
			) : (
				<h3> Please complete all fields before submitting! </h3>
			)}
		</div>
	);
};
export default SuggestionsForm;
