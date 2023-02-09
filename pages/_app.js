/* eslint-disable new-cap */
import "../styles/globals.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { Lexend } from "@next/font/google";

const lexend = Lexend({
	subsets: ["latin"],
	variable: "--font-lexend",
});

function MyApp({ Component, pageProps }) {
	return (
		<main className={`${lexend.variable}`}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</main>
	);
}

export default MyApp;
