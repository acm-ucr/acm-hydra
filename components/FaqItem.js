import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Colors from "./data/Colors";

const FaqItem = ({ index, element }) => {
	const color = Colors[index % Colors.length];

	return (
		<Accordion.Item
			className={`${color} font-lexend focus:!shadow-none m-0 p-0`}
			id={`element${index}`}
			eventKey={index}
		>
			<Accordion.Button
				className={`!bg-acm-black !text-acm-white !rounded-t-lg -mt-3.5 after:!bg-arrow focus:!shadow-none`}
			>
				<p className='!text-text'>{element.question}</p>
			</Accordion.Button>
			<Accordion.Body
				className={`${color} rounded-b-lg flex justify-left items-center`}
				eventKey={index}
			>
				<p className='!text-text inline p-2 m-0'>{element.answer}</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default FaqItem;
