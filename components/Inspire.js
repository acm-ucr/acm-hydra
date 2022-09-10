import React from "react";
import { Row, Col } from "react-bootstrap";
import Project from "./Project";
import { InspireProjects } from "./InspireProjects";

const Inspire = () => {
	return (
		<div className='flex justify-content items-center flex-col'>
			<text className='flex justify-center text-5xl font-bold text-acm-black'>
				ACM @ UCR Projects
			</text>
			<br />
			<Row className='w-11/12'>
				{InspireProjects.map((project, index) => (
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
