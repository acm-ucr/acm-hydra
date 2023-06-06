import Landing from "../components/Landing";
import React, { Suspense } from "react";
import Introduction from "../components/Introduction";
import Stats from "../components/Stats";
import Upcoming from "../components/Upcoming";
import Learn from "../components/Learn";
import Inspire from "../components/Inspire";
import Head from "next/head";

const IndexPage = () => {
	return (
		<div className='overflow-y-auto overflow-x-auto'>
			<Head>
				<title>ACM at UCR</title>
				<meta
					name='google-site-verification'
					content='Dhlj3InpaVTeHOboDsi4NyEj6SbZSK7YhwNFzSUix8w'
				/>
			</Head>
			<Landing />
			<Suspense fallback={<div>Loading...</div>}>
				<section>
					<Introduction />
					<Stats />
					<Upcoming size={3} />
					<Learn />
					<Inspire />
				</section>
			</Suspense>
		</div>
	);
};

export default IndexPage;

// DO NOT EDIT
