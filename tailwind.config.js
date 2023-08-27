/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"nav-bg": "#081236",
				"sidebar-bg": "#EDF1FF",
				"active-bg": "#D0DAFF",
			},
		},
		plugins: [],
	},
};
