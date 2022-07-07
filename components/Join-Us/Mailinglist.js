import React from "react";
import { useState } from "react";
import Snackbar from "../Snackbar";

const Mailinglist = () => {
	const SnackbarType = {
		SUCCESS: "success",
		ERROR: "error",
	};

	const [email, setEmail] = useState("");
	const [submission, setSubmission] = useState(false);
	const [snackbarType, setSnackbarType] = useState(SnackbarType.SUCCESS);

	const handleTyping = e => {
		setEmail(e.target.value);
	};

	const click = async () => {
		if (!email.includes("@") || !email.includes(".")) {
			setSnackbarType(SnackbarType.ERROR);
			setSubmission(true);
			setTimeout(() => {
				setSubmission(false);
			}, 2000);
		} else {
			setSnackbarType(SnackbarType.SUCCESS);
			setSubmission(true);
			setTimeout(() => {
				setSubmission(false);
			}, 2000);
		}
	};

	return (
		<>
			{submission ? (
				<Snackbar
					snackbarType={snackbarType}
					message={
						snackbarType === "error"
							? "Invalid email! Please enter a properly formatted email!"
							: "Thank you for joining our mailing list! Stay tuned to hear about new events and opporuntites!"
					}
				/>
			) : (
				<></>
			)}
			<section className='py-6 dark:bg-gray-800 dark:text-gray-50'>
				<div className='container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row'>
					<div className='flex flex-col space-y-4 text-center lg:text-left'>
						<h1 className='text-5xl font-bold leading-none'>
							Stay in the loop
						</h1>
						<p className='text-lg'>
							Doloribus consectetur quasi ipsa quo neque culpa
							blanditiis ducimus recusandae a veritatis optio
							cumque, in harum ad nam!
						</p>
					</div>
					<div className='flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end'>
						<div className='flex flex-row'>
							<input
								onChange={handleTyping}
								type='text'
								placeholder='example@email.com'
								className='w-3/5 p-3 rounded-l-lg sm:w-2/3 text-black'
							/>
							<button
								onClick={click}
								type='button'
								className='w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900'
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Mailinglist;
