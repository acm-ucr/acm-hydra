import React from "react";
import { Row, Col } from "react-bootstrap";
import Project from "./Project";

const projects = [
	{
		title: "ACM Official Website",
		timeline: "Summer 2022",
		description:
			"The current ACM @ UCR website hosted on UCR servers built using Next.js and Tailwind. Made for the students by students.",
		github: "https://github.com/acm-ucr/acm-dev",
		deployed: "https://acm.cs.ucr.edu",
	},
	{
		title: "ACM Membership Portal",
		timeline: "Fall 2022",
		description:
			"Upcoming project to establish a portal for all ACM members to access special resources and perks.",
		github: "",
		deployed: "",
	},
	{
		title: "ACM Discord Manager",
		timeline: "Winter 2023",
		description:
			"Upcoming project to build a Discord bot responsible for handling various common Discord tasks. ",
		github: "",
		deployed: "",
	},
];

const Inspire = () => {
	return (
		<div className='flex justify-content items-center flex-col'>
			<text className='flex justify-center text-5xl font-bold text-acm-black'>
				ACM @ UCR Projects
			</text>
			<br />
			<Row className='w-11/12'>
				{projects.map((project, index) => (
					<Col key={index} lg={4} md={6} className='p-3'>
						<Project
							title={project.title}
							timeline={project.timeline}
							description={project.description}
							github={project.github}
							deployed={project.deployed}
						/>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Inspire;
