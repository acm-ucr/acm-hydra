import React from "react";
import Accordion from "react-bootstrap/Accordion";

let colorCount = 0;

const infoArray = [
	{
		question: `What is ACM?`,
		answer: `ACM is UCR's largest computer science club. We focus on 
		professional and academic development, mentorship, and projects.`,
	},
	{
		question: `How do I join ACM @ UCR?`,
		answer: `Currently, there's no official way to join like a membership 
		fee, so all you have to do is come out to our events! `,
	},
	{
		question: `Who is able to join ACM @ UCR?`,
		answer: `All UCR students.`,
	},
	{
		question: `How can I participate in student led projects?`,
		answer: `By reaching out to project leads.`,
	},
	{
		question: `When are general meetings/workshops/events/socials?`,
		answer: `Times change during every quarter. Be sure to check our socials for the most up to date time and events.`,
	},
]; // dummy data

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
		index == infoArray.length - 1 ? "" : `${colorArray[colorCount]}`;

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
			<p className='font-lexend text-acm-black text-3xl font-semibold flex justify-center pb-4'>
				Frequently Asked Questions
			</p>
			<Accordion
				className='flex flex-col justify-center mx-auto w-2/3 height-1/3'
				flush
				alwaysOpen
			>
				{infoArray.map((element, index) => (
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
