import React, { useState } from "react";
import Error from "./Error";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAsterisk } from "react-icons/fa";

const Newsletter = () => {
	const [first, setFirst] = useState("");
	const [last, setLast] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState(0);
	const [visible, setVisible] = useState(false);

	const handleSubmit = () => {
		if (first === "") {
			setError(1);
		} else if (last === "") {
			setError(1);
		} else if (email === "") {
			setError(1);
		} else {
			setError(2);
		}
		setVisible(true);
	};

	return (
		<div className='w-full flex justify-center items-center'>
			{error == 1 ? (
				visible && (
					<Error
						title='Form Error!'
						description='Please fill out all the required form fields!'
						background='bg-acm-red'
						border='border-acm-red'
						setVisible={setVisible}
					/>
				)
			) : error == 2 ? (
				visible && (
					<Error
						title='Submission Successful!'
						description='Thank you for subscribing!'
						background='bg-acm-green'
						border='border-acm-green'
						setVisible={setVisible}
					/>
				)
			) : (
				<></>
			)}
			<div className='w-11/12 flex justify-center items-center flex-col mb-20'>
				<p className='font-lexend text-acm-black text-heading text-center flex justify-center pb-5 m-0'>
					Join our Newsletter
				</p>
				<Row className='flex justify-center items-center'>
					<Col
						className='flex justify-center items-top flex-col'
						xl={4}
					>
						<label
							className='font-lexend flex justify-start items-center text-lg'
							htmlFor='first'
						>
							<FaAsterisk className='text-acm-red mx-1 text-[.5rem]' />
							First Name
						</label>
						<input
							className='rounded-md focus:ring-0 border-acm-black focus:border-acm-blue border-2 placeholder:font-lexend placeholder:text-acm-gray'
							name='first'
							placeholder='First Name'
							type='text'
							value={first}
							onChange={e => setFirst(e.target.value)}
						/>
					</Col>
					<Col
						className='flex justify-center items-top flex-col'
						xl={4}
					>
						<label
							className='font-lexend flex justify-start items-center text-lg'
							htmlFor='first'
						>
							<FaAsterisk className='text-acm-red mx-1 text-[.5rem]' />{" "}
							Last Name
						</label>
						<input
							className='rounded-md focus:ring-0 border-acm-black focus:border-acm-blue border-2 placeholder:font-lexend placeholder:text-acm-gray'
							name='last'
							placeholder='Last Name'
							type='text'
							value={last}
							onChange={e => setLast(e.target.value)}
						/>
					</Col>
					<Col
						className='flex justify-center items-top flex-col'
						xl={4}
					>
						<label
							className='font-lexend flex justify-start items-center text-lg'
							htmlFor='first'
						>
							<FaAsterisk className='text-acm-red mx-1 text-[.5rem]' />{" "}
							Email Address
						</label>
						<input
							className='rounded-md focus:ring-0 border-acm-black focus:border-acm-blue border-2 placeholder:font-lexend placeholder:text-acm-gray'
							name='email'
							placeholder='Email Address'
							type='text'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</Col>
					<Col
						className=' h-full flex justify-center items-center m-5 text-xl'
						xl={12}
					>
						<button
							className=' rounded-md px-4 py-2 border-acm-green border-2 hover:bg-acm-green '
							onClick={handleSubmit}
						>
							Submit
						</button>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Newsletter;
