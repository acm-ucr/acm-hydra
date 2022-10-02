import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaqInfoArray } from "./data/FaqInfoArray";

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
			className={`${bgClass} font-lexend focus:!shadow-none m-0 p-0`}
			id={`element${index}`}
			eventKey={index}
		>
			<Accordion.Button
				className={`!bg-acm-black !text-acm-white !rounded-t-lg -mt-3.5 after:!bg-arrow focus:!shadow-none`}
			>
				<p className='!text-text'>{element.question}</p>
			</Accordion.Button>
			<Accordion.Body
				className={`${colorArray[colorCount]} rounded-b-lg flex justify-left items-center`}
				eventKey={index}
			>
				<p className='!text-text inline p-2 m-0'>{element.answer}</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

const Faq = () => {
	return (
		<div className='mb-5 pt-5'>
			<p className='font-lexend text-acm-black text-heading text-center flex justify-center pb-5 mt-[12vh]'>
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
