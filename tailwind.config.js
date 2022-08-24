/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				lexend: ["Lexend"],
			},
			colors: {
				color1: "#82aaff",
				color2: "#c792ea",
				color3: "#ffd700",
				color4: "#c3e88d",
				color5: "#ff5370",
				color6: "#f07178",
				color7: "#89ddff",
				color8: "#f78c6c",
				color9: "#80cbc4",
				color10: "#da70d6",
			},
			backgroundImage: {
				'arrow': "url('/chevron.png')",
				acm: {
					blue: "#82aaff",
					lightpurple: "#c792ea",
					yellow: "#ffd700",
					green: "#c3e88d",
					red: "#ff5370",
					gray: "#8f93a2",
					pink: "#f07178",
					lightblue: "#89ddff",
					darkgray: "#525975",
					orange: "#f78c6c",
					marine: "#80cbc4",
					purple: "#da70d6",
					white: "#ffffff",
					black: "#000000",
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
	],
};
