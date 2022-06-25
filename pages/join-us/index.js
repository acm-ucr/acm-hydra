import React from "react";
import Faq from "../../components/Join-Us/Faq";
import Mailinglist from "../../components/Join-Us/Mailinglist";
import ClubroomInfo from "../../components/Join-Us/ClubroomInfo";
import Links from "../../components/Join-Us/Links";

const JoinUs = () => {
	return (
		<div>
			<Links />
			<ClubroomInfo />
			<Faq />
			<Mailinglist />
		</div>
	);
};

export default JoinUs;
