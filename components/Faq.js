import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Questions from "../data/Questions";
import FaqItem from "./FaqItem";

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
				{Questions.map((element, index) => (
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
