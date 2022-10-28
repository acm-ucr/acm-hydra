import React from "react";
import { FaCircle } from "react-icons/fa";

// <span className={`${color} rounded-full min-w-[1em] min-h-[1em] inline-block translate-y-[0.1em] top-[50%]`}></span>
const ListElement = ({ color, innerText }) => {
	return (
		<div>
			<FaCircle className={`${color}`} />
			<span> {innerText} </span>
		</div>
	);
};

const Modal = ({ event, setState }) => {
	if (!event) return null;
	return (
		<div className='font-lexend p-1 fixed m-auto inset-x-0 translate-y-[-50%] p-4 top-[50%] w-[50vw] min-h-[40vw] bg-acm-white border-2 rounded-lg border-acm-black!border-solid z-[42069]'>
			<p className='inline'>
				{console.log(event)}
				<p
					className={`text-acm-black ${event.color} w-auto inline-block rounded-full p-2 font-bold`}
				>
					{" "}
					{event.title}{" "}
				</p>
				<ListElement
					color={event.textColor}
					innerText={event.location}
				/>
				<br />
				&nbsp; - &nbsp;
				{event.start.toLocaleTimeString(navigator.language, {
					hour: "2-digit",
					minute: "2-digit",
				})}
				{event.description}
			</p>
			<button
				className='text-acm-red right-[0px] top-[0px] p-0 absolute w-[1em] text-5xl'
				onClick={() => setState(null)}
			>
				×
			</button>
		</div>
	);
};

export default Modal;
