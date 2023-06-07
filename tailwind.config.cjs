/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				"bright-red": "#FF3D3D",
				"dark-red": "#BE0000"
			},
			height: {
				"screen": "100svh"
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
