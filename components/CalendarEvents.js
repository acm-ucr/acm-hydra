import React, { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.js";
import CustomEvent from "./CustomEvent.js";
import { useContext } from "react";

import Modal from "./Modal.js";
import EventsContext from "./EventContext.js";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
	const [modalEvent, setModalEvent] = useState(null);
	const { events } = useContext(EventsContext);

	return (
		events && (
			<section className='w-full flex justify-center items-center flex-col mt-[12vh]'>
				<p className='text-center font-lexend flex justify-center text-heading m-0 pt-4'>
					Calendar of Events
				</p>
				<div className='mb-5 w-11/12 flex justify-center items-center'>
					<div className='h-[110vh] w-full relative'>
						<Calendar
							className='font-lexend w-full m-0 p-0'
							events={events}
							localizer={mLocalizer}
							defaultView='month'
							views={["month"]}
							components={{
								event: CustomEvent,
								toolbar: CustomToolbar,
							}}
							eventPropGetter={event => {
								return { className: `${event.color}` };
							}}
							dayPropGetter={event => {
								const bg =
									new Date(event).toLocaleDateString() ==
									new Date().toLocaleDateString()
										? "!bg-acm-green"
										: "!bg-acm-white";
								return {
									className: `${bg}`,
									style: {
										margin: 0,
										padding: 0,
									},
								};
							}}
							onSelectEvent={event => {
								setModalEvent(event);
							}}
						/>
						<Modal event={modalEvent} setState={setModalEvent} />
					</div>
				</div>
			</section>
		)
	);
};

export default CalendarEvents;
