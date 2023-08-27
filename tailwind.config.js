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
			breakpoints: {
				xs: "320px",
				sm: "425px",
				md: "768px",
				lg: "1024px",
				xl: "1440px",
			},
		},
		plugins: [],
	},
};
