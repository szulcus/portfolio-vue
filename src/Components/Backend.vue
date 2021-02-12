<template>
	<div class="backend-wrapper">
		<h1 class="title">Backend</h1>
		<!-- <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.</p> -->
		<Gallery
			:experience="experience"
		/>
	</div>
</template>

<script>
	import Gallery from '@/Components/Gallery'
	// FIREBASE
	import firebase from '@/Assets/experience/backend/firebase/firebase.svg'
	import au from '@/Assets/experience/backend/firebase/au.svg'
	import cf from '@/Assets/experience/backend/firebase/cf.svg'
	import db from '@/Assets/experience/backend/firebase/db.svg'
	import fh from '@/Assets/experience/backend/firebase/fh.svg'
	import st from '@/Assets/experience/backend/firebase/st.svg'
	import ga from '@/Assets/experience/backend/firebase/ga.svg'
	// NODEJS
	import nodejs from '@/Assets/experience/backend/nodejs/nodejs.svg'
	import express from '@/Assets/experience/backend/nodejs/express.svg'
	import mongodb from '@/Assets/experience/backend/nodejs/mongodb.svg'
	import npm from '@/Assets/experience/backend/nodejs/npm.svg'
	// PYTHON
	import python from '@/Assets/experience/backend/python/python.svg'
	import terminal from '@/Assets/experience/backend/python/terminal.svg'

	export default {
		name: "Backend",
		components: {
			Gallery
		},
		data() {
			return {
				experience: [
					[
						{
							img: firebase,
							title: '<span style="color: #ffcb2b">F</span>irebase'
						},
						{
							img: au,
							title: "Firebase Authentication",
							content: `
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.
							`
						},
						{
							img: cf,
							title: "Cloud Functions",
							content: `
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.
							`
						},
						{
							img: db,
							title: "Firestore",
							content: `
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.
							`
						},
						{
							img: fh,
							title: "Firebase Hosting",
							content: `
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.
							`
						},
						{
							img: st,
							title: "Firebase Storage",
							content: `
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.
							`
						},
						{
							img: ga,
							title: "Google Analytics",
							content: `
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.
							`
						}
					],
					[
						{
							img: nodejs,
							title: '<span style="color: #6cc24a">N</span>ode.js'
						},
						{
							img: express,
							content: "express Lorem ipsum dolor",
						},
						{
							img: mongodb,
							content: "mongodb Lorem ipsum dolor",
						},
						{
							img: npm,
							content: "npm Lorem ipsum dolor",
						}
					],
					[
						{
							img: python,
							title: '<span style="color: #387eb8">P</span><span style="color: #ffe052">y</span>thon'
						},
						{
							img: terminal,
							content: "Django lorem ipsum dolor"
						},
						{
							img: terminal,
							content: "Terminal lorem ipsum dolor"
						}
					],
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.backend-wrapper {
		width: 100%;
		/* height: var(--window-height); */
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px 0 60px 0;
		.title {
			font-size: 40px;
			margin: 30px 0;
			@include line;
		}
		.description {
			font-size: 20px;
			width: 100%;
			text-align: center;
			max-width: 1000px;
			/* @media (min-width: 600px) {
				width: 70%;
			} */
		}
	}
</style>