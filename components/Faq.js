import React from "react";
import Accordion from "react-bootstrap/Accordion";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

let colorCount = 1;

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
	`bg-color1`,
	`bg-color2`,
	`bg-color3`,
	`bg-color4`,
	`bg-color5`,
	`bg-color6`,
	`bg-color7`,
	`bg-color8`,
	`bg-color9`,
	`bg-color10`,
];

const FaqItem = ({ index, element }) => {
	colorCount = index;
	if (colorCount == 10) {
		colorCount = 1;
		console.log("Color reset to 1!");
	}

	const bgClass =
		index == infoArray.length - 1
			? ""
			: index != 0
			? `bg-color${index}`
			: "bg-white";

	const lastColor = fullConfig.theme.colors[`color${infoArray.length - 1}`];
	console.log(lastColor);

	const bgStyle =
		index == infoArray.length - 1
			? { boxShadow: `0px -4.4vw ${lastColor}` }
			: {};

	return (
		<Accordion.Item
			className={`${bgClass} font-lexend m-0 p-0`}
			id={`element${index}`}
			eventKey={index}
		>
			<Accordion.Button
				className={`bg-black text-white rounded-t-lg -mt-2 after:bg-arrow focus:shadow-none`}
			>
				{element.question}
			</Accordion.Button>
			<Accordion.Body
				className={`${colorArray[colorCount]} rounded-b-lg pt-[1vw] pb-[1.5vw]`}
				eventKey={index}
				style={bgStyle}
			>
				{element.answer}
			</Accordion.Body>
		</Accordion.Item>
	);
};

const Faq = () => {
	return (
		<Accordion className='p-[10vw]' flush alwaysOpen>
			{infoArray.map((element, index) => (
				<FaqItem
					className='bg-black m-0 p-0'
					element={element}
					key={index}
					index={index}
				/>
			))}
		</Accordion>
	);
};

export default Faq;
