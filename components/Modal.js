import React from "react";
import { FaCircle, FaTimes } from "react-icons/fa";

// <span className={`${color} rounded-full min-w-[1em] min-h-[1em] inline-block translate-y-[0.1em] top-[50%]`}></span>
const ListElement = ({ color, innerText }) => {
	return (
		<div className='flex items-center'>
			<FaCircle className={`${color} mr-2`} />
			<span> {innerText} </span>
		</div>
	);
};

const Modal = ({ event, setState }) => {
	if (!event) return null;
	const startTime = event.start.toLocaleTimeString(navigator.language, {
		hour: "2-digit",
		minute: "2-digit",
	});
	const endTime = event.end.toLocaleTimeString(navigator.language, {
		hour: "2-digit",
		minute: "2-digit",
	});
	return (
		<div className='font-lexend p-1 fixed m-auto inset-x-0 translate-y-[-50%] p-4 top-[50%] w-[75vw] md:w-[50vw] min-h-[40vw] bg-acm-white border-2 rounded-lg border-acm-black!border-solid z-[42069]'>
			<p className='inline'>
				{console.log(event)}
				<p
					className={`text-acm-black ${event.color} w-auto inline-block rounded-full p-2 font-bold`}
				>
					{event.title}
				</p>

				<>
					{[
						event.start.toLocaleDateString(),
						`${startTime} - ${endTime}`,
						event.location,
					].map((line, index) => (
						<ListElement
							key={index}
							color={event.textColor}
							innerText={line}
						/>
					))}
					<p> {event.description} </p>
				</>
			</p>
			<button
				className='right-[0px] top-[0px] p-0 m-2 absolute w-[1em] text-5xl'
				onClick={() => setState(null)}
			>
				<FaTimes className='text-acm-red' />
			</button>
		</div>
	);
};

export default Modal;
