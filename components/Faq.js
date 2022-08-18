import React from "react";
import Accordion from "react-bootstrap/Accordion";

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
	"bg-color1",
	"bg-color2",
	"bg-color3",
	"bg-color4",
	"bg-color5",
	"bg-color6",
	"bg-color7",
	"bg-color8",
	"bg-color9",
	"bg-color10",
];

const FaqItem = props => {
	colorCount = props.index;
	if (colorCount == 10) {
		colorCount = 1;
		console.log("Color reset to 1!");
	}

	return (
		<Accordion.Item eventKey={props.index}>
			<Accordion.Button className={`bg-black text-white`}>
				Accordion Item #{props.index + 1}
			</Accordion.Button>
			<Accordion.Body
				className={`${colorArray[colorCount]}`}
				eventKey={props.index}
			>
				{props.element.answer}
			</Accordion.Body>
		</Accordion.Item>
	);
};

const Faq = () => {
	return (
		<>
			<Accordion className='p-[5vw]' flush alwaysOpen>
				{infoArray.map((element, index) => (
					<FaqItem
						className='m-0 p-0'
						element={element}
						key={index}
						index={index}
					/>
				))}
			</Accordion>
		</>
	);
};

export default Faq;
