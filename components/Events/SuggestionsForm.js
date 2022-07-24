// import base from "daisyui/dist/base";
// import utilities from "daisyui/dist/utilities";
// import { loadComponents } from "next/dist/server/load-components";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
const SuggestionsForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [suggestion, setSuggestion] = useState("");
	const [submit, setSubmit] = useState(false);

	const handleSubmit = () => {
		if (name !== "" && email !== "" && suggestion !== "") {
			setSubmit(true);
			console.log("Name: " + name);
			console.log("Email: " + email);
			console.log("Suggestion: " + suggestion);
		} else {
			setSubmit(false);
		}
	};

	return (
		<div className='pt-5'>
			<Container fluid>
				<Row>
					<Col>
						<div>
							<label
								htmlFor='name'
								className='lg:align-top text-blue-500'
							>
								Name
							</label>
							<input
								type='text'
								className='md:col-span-1 rounded-md border-orange-300 ml-2.5 row-span-1'
								id='name'
								name='name'
								value={name}
								placeholder='name'
								onChange={e => setName(e.target.value)}
							/>
						</div>
					</Col>
					<Col>
						<div>
							<label
								htmlFor='email'
								className='lg:align-top text-blue-500'
							>
								Email
							</label>
							<input
								type='email'
								className='md:col-span-2 rounded-md border-orange-300 ml-2.5 row-span-2'
								id='email'
								email='email'
								value={email}
								placeholder='email'
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
					</Col>
					<Col>
						<div>
							<label
								htmlFor='suggestion'
								className='lg:align-top text-blue-500'
							>
								Suggestion
							</label>
							<textarea
								id='suggestion'
								className='md:col-span-3 rounded-md border-orange-300 resize-none ml-2.5 row-span-3'
								suggestion='suggestion'
								value={suggestion}
								placeholder='suggestion'
								onChange={e => setSuggestion(e.target.value)}
							/>
						</div>
					</Col>
					<Col>
						<div>
							<button
								onClick={handleSubmit}
								type='button'
								id='submit'
								className='md:col-span-4 rounded-md inline-flex text-right bg-yellow-400 p-2.5 row-span-4'
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
