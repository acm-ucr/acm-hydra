import React from "react";
import { Row, Col } from "react-bootstrap";
import { OfficersArray } from "./data/Officers";
import { Colors } from "./data/Colors";
import Profile from "./Profile";

const Officers = () => {
	return (
		<div className='container flex flex-col items-center justify-center sm:p-1 sm:pt-4 mt-[12vh] pt-4 mb-20'>
			<p className='font-lexend text-heading text-center'>
				Meet our Board!
			</p>
			<Row className='w-full'>
				{OfficersArray.map((officer, index) => (
					<Col
						key={index}
						xl={3}
						lg={4}
						sm={6}
						xs={12}
						className='h-full p-2 flex justify-center items-center'
					>
						<Profile
							color={Colors[index % Colors.length]}
							boxShadowColor='shadow-acm-white'
							name={officer.name}
							pronouns={officer.pronoun}
							position={officer.position}
							image={officer.image}
							email={officer.email}
							linkedin={officer.linkedin}
							github={officer.github}
							board={true}
						/>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Officers;
