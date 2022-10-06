import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Project from "./Project";
import Projects from "./data/Projects";

const Inspire = () => {
	return (
		<div className='flex justify-content items-center flex-col mb-20'>
			<p className='text-center flex justify-center font-lexend text-heading text-acm-black m-0 p-0'>
				ACM @ UCR Projects
			</p>
			<br />
			<Row className='w-11/12'>
				{Projects.map((project, index) => (
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
