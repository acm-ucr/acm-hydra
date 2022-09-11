import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaqInfoArray } from "./FaqInfoArray";

let colorCount = 0;

const colorArray = [
	`bg-acm-blue`,
	`bg-acm-lightpurple`,
	`bg-acm-yellow`,
	`bg-acm-green`,
	`bg-acm-red`,
	`bg-acm-gray`,
	`bg-acm-pink`,
	`bg-acm-lightblue`,
	`bg-acm-darkgray`,
	`bg-acm-orange`,
	`bg-acm-marine`,
	`bg-acm-purple`,
	`bg-acm-white`,
	`bg-acm-black`,
];

const FaqItem = ({ index, element }) => {
	colorCount = index;
	if (colorCount == 14) {
		colorCount = 0;
	}

	const bgClass =
		index == FaqInfoArray.length - 1 ? "" : `${colorArray[colorCount]}`;

	return (
		<Accordion.Item
			className={`${bgClass} focus:!shadow-none font-lexend m-0 p-0`}
			id={`element${index}`}
			eventKey={index}
		>
			<Accordion.Button
				className={`!bg-acm-black !text-acm-white !rounded-t-lg -mt-3.5 after:!bg-arrow focus:!shadow-none`}
			>
				{element.question}
			</Accordion.Button>
			<Accordion.Body
				className={`${colorArray[colorCount]} rounded-b-lg !pt-6 !pb-8`}
				eventKey={index}
			>
				{element.answer}
			</Accordion.Body>
		</Accordion.Item>
	);
};

const Faq = () => {
	return (
		<div className='mb-20'>
			<p className='font-lexend text-acm-black text-3xl text-center font-semibold flex justify-center pb-4 mt-32'>
				Frequently Asked Questions
			</p>
			<Accordion
				className='flex flex-col justify-center mx-auto w-11/12 height-1/3'
				flush
				alwaysOpen
			>
				{FaqInfoArray.map((element, index) => (
					<FaqItem
						key={index}
						className='!bg-acm-black focus:!shadow-none m-0 p-0'
						element={element}
						index={index}
					/>
				))}
			</Accordion>
		</div>
	);
};

export default Faq;
