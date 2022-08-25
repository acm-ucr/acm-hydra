import React from "react";
import Accordion from "react-bootstrap/Accordion";

let colorCount = 0;

const infoArray = [
	{
		question: `quam quisque id diam vel quam elementum 
		pulvinar etiam non quam lacus suspendisse faucibus interdum`,
		answer: `Lorem ipsum dolor sit amet, consectetur 
		adipiscing elit, sed do eiusmod tempor incididunt 
		ut labore et dolore magna aliqua. Ullamcorper sit 
		amet risus nullam eget felis eget nunc lobortis. 
		Ultrices dui sapien eget mi. Etiam tempor orci eu lobortis 
		elementum. Tincidunt nunc pulvinar sapien et ligula ullamcorper.`,
	},
	{
		question: `quam quisque id diam vel quam elementum 
		pulvinar etiam non quam lacus suspendisse faucibus interdum`,
		answer: `Lorem ipsum dolor sit amet, consectetur 
		adipiscing elit, sed do eiusmod tempor incididunt 
		ut labore et dolore magna aliqua. Ullamcorper sit 
		amet risus nullam eget felis eget nunc lobortis. 
		Ultrices dui sapien eget mi. Etiam tempor orci eu lobortis 
		elementum. Tincidunt nunc pulvinar sapien et ligula ullamcorper.`,
	},
	{
		question: `quam quisque id diam vel quam elementum 
		pulvinar etiam non quam lacus suspendisse faucibus interdum`,
		answer: `Lorem ipsum dolor sit amet, consectetur 
		adipiscing elit, sed do eiusmod tempor incididunt 
		ut labore et dolore magna aliqua. Ullamcorper sit 
		amet risus nullam eget felis eget nunc lobortis. 
		Ultrices dui sapien eget mi. Etiam tempor orci eu lobortis 
		elementum. Tincidunt nunc pulvinar sapien et ligula ullamcorper.`,
	},
	{
		question: `quam quisque id diam vel quam elementum 
		pulvinar etiam non quam lacus suspendisse faucibus interdum`,
		answer: `Lorem ipsum dolor sit amet, consectetur 
		adipiscing elit, sed do eiusmod tempor incididunt 
		ut labore et dolore magna aliqua. Ullamcorper sit 
		amet risus nullam eget felis eget nunc lobortis. 
		Ultrices dui sapien eget mi. Etiam tempor orci eu lobortis 
		elementum. Tincidunt nunc pulvinar sapien et ligula ullamcorper.`,
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
			className={`${bgClass} font-lexend m-0 p-0`}
			id={`element${index}`}
			eventKey={index}
		>
			<Accordion.Button
				className={`bg-acm-black text-acm-white rounded-t-lg -mt-2 after:bg-arrow focus:shadow-none`}
			>
				{element.question}
			</Accordion.Button>
			<Accordion.Body
				className={`${colorArray[colorCount]} rounded-b-lg pt-[1vw] pb-[1.5vw]`}
				eventKey={index}
			>
				{element.answer}
			</Accordion.Body>
		</Accordion.Item>
	);
};

const Faq = () => {
	return (
		<Accordion
			className='flex flex-col justify-center mx-auto w-2/3 height-1/3'
			flush
			alwaysOpen
		>
			{infoArray.map((element, index) => (
				<FaqItem
					key={index}
					className='bg-acm-black m-0 p-0'
					element={element}
					index={index}
				/>
			))}
		</Accordion>
	);
};

export default Faq;
