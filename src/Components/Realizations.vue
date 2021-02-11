<template>
	<div class="projects-wrapper">
		<h1 class="title">Realizacje</h1>
		<!-- <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.</p> -->
		<RealizationsGallery
			:experience="experience"
		/>
	</div>
</template>

<script>
	import RealizationsGallery from '@/Components/RealizationsGallery'
	// Realizations
	import cichy_dworek_signet_png from '@/Assets/realizations/cichy-dworek/signet.png'
	import cichy_dworek_logotype_png from '@/Assets/realizations/cichy-dworek/logotype.png'
	import cichy_dworek_signet_webp from '@/Assets/realizations/cichy-dworek/signet.webp'
	import cichy_dworek_logotype_webp from '@/Assets/realizations/cichy-dworek/logotype.webp'

	import easy_word_signet_png from '@/Assets/realizations/easy-word/signet.png'
	import easy_word_logotype_png from '@/Assets/realizations/easy-word/logotype.png'
	import easy_word_signet_webp from '@/Assets/realizations/easy-word/signet.webp'
	import easy_word_logotype_webp from '@/Assets/realizations/easy-word/logotype.webp'

	import my_notes_signet_png from '@/Assets/realizations/my-notes/signet.png'
	import my_notes_logotype_png from '@/Assets/realizations/my-notes/logotype.png'
	import my_notes_signet_webp from '@/Assets/realizations/my-notes/signet.webp'
	import my_notes_logotype_webp from '@/Assets/realizations/my-notes/logotype.webp'

	import na_j_signet_png from '@/Assets/realizations/na-j/signet.png'
	import na_j_logotype_png from '@/Assets/realizations/na-j/logotype.png'
	import na_j_signet_webp from '@/Assets/realizations/na-j/signet.webp'
	import na_j_logotype_webp from '@/Assets/realizations/na-j/logotype.webp'

	import s_community_signet_png from '@/Assets/realizations/s-community/signet.png'
	import s_community_logotype_png from '@/Assets/realizations/s-community/logotype.png'
	import s_community_signet_webp from '@/Assets/realizations/s-community/signet.webp'
	import s_community_logotype_webp from '@/Assets/realizations/s-community/logotype.webp'

	import tofu_signet_png from '@/Assets/realizations/tofu/signet.png'
	import tofu_logotype_png from '@/Assets/realizations/tofu/logotype.png'
	import tofu_signet_webp from '@/Assets/realizations/tofu/signet.webp'
	import tofu_logotype_webp from '@/Assets/realizations/tofu/logotype.webp'

	import root_calculate_signet_png from '@/Assets/realizations/root-calculate/signet.png'
	import root_calculate_logotype_png from '@/Assets/realizations/root-calculate/logotype.png'
	import root_calculate_signet_webp from '@/Assets/realizations/root-calculate/signet.webp'
	import root_calculate_logotype_webp from '@/Assets/realizations/root-calculate/logotype.webp'

	// Technologies
	import vue from '@/Assets/experience/js/vue.svg'
	import react from '@/Assets/experience/js/react.svg'
	import sass from '@/Assets/experience/css/sass.svg'
	import sc from '@/Assets/experience/css/sc.svg'
	import firebase from '@/Assets/experience/firebase/firebase.svg'
	import nodejs from '@/Assets/experience/nodejs/nodejs.svg'
	import mongodb from '@/Assets/experience/nodejs/mongodb.svg'
	import npm from '@/Assets/experience/nodejs/npm.svg'

	export default {
		name: "Projects",
		components: {
			RealizationsGallery
		},
		data() {
			return {
				experience: [
					{
						signet: {
							png: tofu_signet_png,
							webp: tofu_signet_webp
						},
						logotype: {
							png: tofu_logotype_png,
							webp: tofu_logotype_webp
						},
						url: "https://szulcus.pl",
						git: "https://github.com/jakub104/tofu",
						technologies: [
							{
								img: vue,
								url: 'https://vuejs.org',
								name: "Vue"
							},
							{
								img: sass,
								url: 'https://sass-lang.com',
								name: "SCSS"
							},
							{
								img: firebase,
								url: 'https://firebase.google.com',
								name: "Firebase"
							},
						],
						content: `
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.
						`
					},
					{
						signet: {
							png: my_notes_signet_png,
							webp: my_notes_signet_webp
						},
						logotype: {
							png: my_notes_logotype_png,
							webp: my_notes_logotype_webp
						},
						title: "MyNotes",
						url: "https://mynotes-szulcus.netlify.app/#/pl",
						git: "https://github.com/jakub104/my-notes",
						technologies: [
							{
								img: vue,
								url: 'https://vuejs.org',
								name: "Vue"
							},
							{
								img: sass,
								url: 'https://sass-lang.com',
								name: "SCSS"
							},
							{
								img: firebase,
								url: 'https://firebase.google.com',
								name: "Firebase"
							}
						],
						content: `
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.
						`
					},
					{
						signet: {
							png: easy_word_signet_png,
							webp: easy_word_signet_webp
						},
						logotype: {
							png: easy_word_logotype_png,
							webp: easy_word_logotype_webp
						},
						title: "EasyWord",
						url: "https://szulcus.pl",
						git: "https://easyword123.pl",
						technologies: [
							{
								img: react,
								url: 'https://pl.reactjs.org',
								name: "React"
							},
							{
								img: sc,
								url: 'https://styled-components.com',
								name: "Styled Components"
							},
							{
								img: firebase,
								url: 'https://firebase.google.com',
								name: "Firebase"
							}
						],
						content: `
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.
						`
					},
					{
						signet: {
							png: na_j_signet_png,
							webp: na_j_signet_webp
						},
						logotype: {
							png: na_j_logotype_png,
							webp: na_j_logotype_webp
						},
						title: "Na-J",
						url: "https://na-j.pl",
						git: "https://github.com/jakub104/naj",
						technologies: [
							{
								img: vue,
								url: 'https://vuejs.org',
								name: "Vue"
							},
							{
								img: sass,
								url: 'https://sass-lang.com',
								name: "SCSS"
							},
							{
								img: firebase,
								url: 'https://firebase.google.com',
								name: "Firebase"
							}
						],
						content: `
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.
						`
					},
					{
						signet: {
							png: cichy_dworek_signet_png,
							webp: cichy_dworek_signet_webp
						},
						logotype: {
							png: cichy_dworek_logotype_png,
							webp: cichy_dworek_logotype_webp
						},
						url: "https://cichy-dworek.pl",
						git: "https://szulcus.pl",
						technologies: [
							{
								img: vue,
								url: 'https://vuejs.org',
								name: "Vue"
							},
							{
								img: sass,
								url: 'https://sass-lang.com',
								name: "SCSS"
							},
							{
								img: firebase,
								url: 'https://firebase.google.com',
								name: "Firebase"
							}
						],
						content: `
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.
						`
					},
					{
						signet: {
							png: s_community_signet_png,
							webp: s_community_signet_webp
						},
						logotype: {
							png: s_community_logotype_png,
							webp: s_community_logotype_webp
						},
						url: "https://scommunity.eu",
						git: "https://github.com/jakub104/scommunity",
						technologies: [
							{
								img: vue,
								url: 'https://vuejs.org',
								name: "Vue"
							},
							{
								img: sass,
								url: 'https://sass-lang.com',
								name: "SCSS"
							},
							{
								img: nodejs,
								url: 'https://nodejs.org/en',
								name: "Node.js"
							},
							{
								img: mongodb,
								url: 'https://www.mongodb.com',
								name: "MongoDB"
							}
						],
						content: `
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.
						`
					},
					{
						signet: {
							png: root_calculate_signet_png,
							webp: root_calculate_signet_webp
						},
						logotype: {
							png: root_calculate_logotype_png,
							webp: root_calculate_logotype_webp
						},
						url: "https://www.npmjs.com/package/root-calculate",
						git: "https://github.com/jakub104/root-calculate",
						technologies: [
							{
								img: nodejs,
								url: 'https://nodejs.org/en',
								name: "Node.js"
							},
							{
								img: npm,
								url: 'https://www.mongodb.com',
								name: "NPM"
							},
						],
						content: `
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.
						`
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.projects-wrapper {
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
	}
</style>