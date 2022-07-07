import React from "react";
import Faq from "../components/Join-Us/Faq";
import Mailinglist from "../components/Join-Us/Mailinglist";
import ClubroomInfo from "../components/Join-Us/ClubroomInfo";
import Links from "../components/Join-Us/Links";
import ClubroomRequest from "../components/Join-Us/ClubroomRequest";

const JoinUs = () => {
	return (
		<div>
			<Links />
			<ClubroomInfo />
			<ClubroomRequest />
			<Faq />
			<Mailinglist />
		</div>
	);
};

export default JoinUs;
