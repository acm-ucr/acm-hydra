import React from "react";
import "./Links.css";
import { Row, Col, Container } from "react-bootstrap";
import Link from "./Link";

const Links = () => {
	const links = [
		["https://cyber.cs.ucr.edu/", "Cyber @ UCR", "Cyber"],
		["https://winc.cs.ucr.edu/", "WINC", "Women in Computing"],
		["https://gamespawn.github.io/", "Gamespawn", "Gamespawn"],
		["https://ieee.ucr.edu/", "IEEE", "Institute of Electrical Engineers"],
		["https://ucrswe.org/", "SWE", "Society of Women Engineers"],
	];

	return (
		<div>
			<div className='joinus-links-orgs'>
				<p className='joinus-links-header'>Affiliated Organizations</p>
				<Container
					fluid
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Row
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{links.map((link, index) => (
							<Col
								key={index}
								xl={4}
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Link
									link={link[0]}
									abbreviation={link[1]}
									name={link[2]}
								/>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Links;
