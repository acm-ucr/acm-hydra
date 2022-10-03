import React from "react";
import Accordion from "react-bootstrap/Accordion";

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
	const color = colorArray[index % colorArray.length];

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
