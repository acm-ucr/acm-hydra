/* eslint-disable new-cap */
import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { Lexend } from "@next/font/google";
import EventsContext from "../components/EventContext";
import axios from "axios";

const lexend = Lexend({
	subsets: ["latin"],
	variable: "--font-lexend",
});

const colorMappings = {
	social: "!bg-acm-red",
	career: "!bg-acm-lightpurple",
	general: "!bg-acm-blue",
	technical: "!bg-acm-orange",
	academic: "!bg-acm-marine",
};

const colorMappingsText = {
	social: "text-acm-red",
	career: "text-acm-lightpurple",
	general: "text-acm-blue",
	technical: "text-acm-orange",
	academic: "text-acm-marine",
};

const colorMappingsBorder = {
	social: "border-acm-red",
	career: "border-acm-lightpurple",
	general: "border-acm-blue",
	technical: "border-acm-orange",
	academic: "border-acm-marine",
};

const colorMappingsShadow = {
	social: "shadow-acm-red",
	career: "shadow-acm-lightpurple",
	general: "shadow-acm-blue",
	technical: "shadow-acm-orange",
	academic: "shadow-acm-marine",
};

function MyApp({ Component, pageProps }) {
	const [events, setEvents] = useState([], {});

	useEffect(() => {
		axios
			.get(
				`https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
			)
			.then(response => {
				const calendarEvents = response.data.items
					.filter(a => {
						a.start = new Date(a.start.dateTime);
						a.end = new Date(a.end.dateTime);

						a.color =
							colorMappings[
								`${a.description
									.split(" ")[0]
									.toLowerCase()
									.replace(":", "")}`
							];

						a.textColor =
							colorMappingsText[
								`${a.description
									.split(" ")[0]
									.toLowerCase()
									.replace(":", "")}`
							];

						a.border =
							colorMappingsBorder[
								`${a.description
									.split(" ")[0]
									.toLowerCase()
									.replace(":", "")}`
							];

						a.shadow =
							colorMappingsShadow[
								`${a.description
									.split(" ")[0]
									.toLowerCase()
									.replace(":", "")}`
							];

						return (
							(a.description.startsWith("General:") ||
								a.description.startsWith("Technical:") ||
								a.description.startsWith("Social:") ||
								a.description.startsWith("Career:") ||
								a.description.startsWith("Academic:")) &&
							new Date(a.start) > new Date()
						);
					})
					.sort((a, b) => {
						return new Date(a.start) - new Date(b.start);
					});
				setEvents(calendarEvents);
			})
			.catch(error => {
				console.log("Error: ", error);
			});
	}, []);

	return (
		<EventsContext.Provider value={{ events, setEvents }}>
			<main className={`${lexend.variable}`}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</main>
		</EventsContext.Provider>
	);
}

export default MyApp;
