import React from "react";
import { Row, Col } from "react-bootstrap";
import { OfficersArray } from "./data/Officers";
import { Colors } from "./data/Colors";
import Profile from "./Profile";

const Officers = () => {
	return (
		<div className='container flex flex-col items-center justify-center md:p-1 sm:p-1 mx-auto mt-32'>
			<h1 className='font-lexend text-3xl font-medium text-center'>
				Meet our Board!
			</h1>
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
							name={officer.name}
							pronouns={officer.pronoun}
							position={officer.position}
							image={officer.image}
							email={officer.email}
							linkedin={officer.linkedin}
							github={officer.github}
						/>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Officers;
