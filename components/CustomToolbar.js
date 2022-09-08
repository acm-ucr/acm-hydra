import React from "react";
import Filter from "./Filter.js";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { CustomToolbarFilters } from "./data/CustomToolbarFilters.js";

const CustomToolbar = event => {
	return (
		<div className=''>
			<Row className=''>
				<Col
					xs={3}
					className=' w-full flex justify-start items-center text-3xl font-lexend font-bold'
				>
					<FaArrowLeft
						onClick={() => event.onNavigate("PREV")}
						className='hover:text-acm-darkgray hover:cursor-pointer'
					/>
					<div className='text-center text-5xl p-1'>
						{event.date.getMonth() + 1 < 10
							? `0${event.date.getMonth() + 1}`
							: event.date.getMonth() + 1}
						<br />
						{event.date.getFullYear() % 100}
					</div>
					<FaArrowRight
						onClick={() => event.onNavigate("NEXT")}
						className='hover:text-acm-darkgray hover:cursor-pointer'
					/>
				</Col>
				<Col
					xs={9}
					className=' w-full flex justify-end items-center m-0 p-0'
				>
					<Row className=' w-full m-0 p-0 flex justify-end items-center '>
						{CustomToolbarFilters.map((filter, index) => {
							return (
								<Col
									key={index}
									xs={4}
									sm={4}
									lg={2}
									className='m-1 p-0'
								>
									<Filter
										topic={filter.topic}
										color={filter.color}
									/>
								</Col>
							);
						})}
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default CustomToolbar;
