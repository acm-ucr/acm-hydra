import Landing from "../components/Landing";
import React, { Suspense } from "react";
const Introduction = React.lazy(() => import("../components/Introduction"));
const Stats = React.lazy(() => import("../components/Stats"));
const Upcoming = React.lazy(() => import("../components/Upcoming"));
const Learn = React.lazy(() => import("../components/Learn"));
const Inspire = React.lazy(() => import("../components/Inspire"));
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
					<Upcoming />
					<Learn />
					<Inspire />
				</section>
			</Suspense>
		</div>
	);
};

export default IndexPage;

// DO NOT EDIT
