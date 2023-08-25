import React, { Suspense } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Profile from "./Profile.js";
import Organizations from "../data/Organizations";
import Colors from "../data/Colors";

const StudentOrgs = () => {
	return (
		<div className='container flex flex-col items-center justify-center md:p-1 sm:p-1 mx-auto mb-20 pt-5'>
			<Suspense fallback={<div>Loading...</div>}>
				<p className='font-lexend text-acm-black text-heading text-center flex justify-center pb-5 m-0'>
					Student Organizations
				</p>
				<Row className='w-full'>
					{Organizations.map((org, index) => (
						<Col
							key={index}
							xl={3}
							lg={4}
							sm={6}
							xs={12}
							className='h-full p-2 flex justify-center items-center w-full'
						>
							<Profile
								color={Colors[index % Colors.length]}
								name={org.name}
								website={org.website}
								insta={org.instagram}
								discord={org.discord}
								image={org.img}
								board={false}
							/>
						</Col>
					))}
				</Row>
			</Suspense>
		</div>
	);
};

export default StudentOrgs;
