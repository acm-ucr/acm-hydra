import React from "react";
import Landing from "../components/Landing";
import Introduction from "../components/Introduction";
import Stats from "../components/Stats";
import Upcoming from "../components/Upcoming";
import Learn from "../components/Learn";
import Inspire from "../components/Inspire";
import Filter from "../components/Filter";

const IndexPage = () => {
	return (
		<div className=''>
			<Landing />
			<Introduction />
			<Stats />
			<Upcoming />
			<Learn />
			<Inspire />
			<Filter topic='topic here' />
		</div>
	);
};

export default IndexPage;

// DO NOT EDIT
