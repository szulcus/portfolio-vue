<template>
	<div class="frontend-wrapper">
		<h1 class="title">Frontend</h1>
		<!-- <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.</p> -->
		<Gallery
			:experience="experience"
		/>
	</div>
</template>

<script>
	import Gallery from '@/Components/Gallery'
	// HTML
	import html from '@/Assets/experience/html/html.svg'
	// CSS
	import css from '@/Assets/experience/css/css.svg'
	import noBootstrap from '@/Assets/experience/css/noBootstrap.svg'
	import rwd from '@/Assets/experience/css/rwd.svg'
	import sass from '@/Assets/experience/css/sass.svg'
	import sc from '@/Assets/experience/css/sc.svg'
	// JS
	import js from '@/Assets/experience/js/js.svg'
	import es6 from '@/Assets/experience/js/es6.svg'
	import nojq from '@/Assets/experience/js/nojq.svg'
	import react from '@/Assets/experience/js/react.svg'

	export default {
		name: "Frontend",
		components: {
			Gallery
		},
		data() {
			return {
				experience: [
					[
						{
							img: html,
							title: '<span style="color: #E44D26">H</span>TML 5'
						},
						{
							img: html,
							title: "Najnowszy standard",
							content: `
								Strony i aplikacje tworzę zgodne z najnowszym standardem HTML5.
								Tworzone przeze mnie projekty są w pełni semantyczne, a co za tym idzie nowoczesne i lepiej współpracują z innymi urządzeniami.
							`
						},
						{
							img: html,
							title: "Diabeł tkwi w szczegółach",
							content: `
								Dlatego zawsze zwracam uwagę na faviconkę, grafikę reprezentującą link, zachecający opis podczas wyszukiwania, maskowalne ikony, oraz inne metatagi.
								Wszystko zgodnie ze sdandardem PWA (Progressive Web App).
							`
						},
						{
							img: html,
							title: "Podział kodu jest bardzo ważny",
							content: `
								Staram się jak najczęściej dzielić kod na komponenty.
								Potrafię również posługiwać się silnikami szablonów, takim jak Pug.js, EJS, czy Szablonami Django, co pozwala mi na tworzenie układów często występujących na stronie.
								Umożliwia mi to zachowanie porządku, oraz szybkie wdrażanie ewentualnych poprawek.
							`
						},
					],
					[
						{
							img: css,
							title: '<span style="color: #2062AF">C</span>SS 3'
						},
						{
							img: noBootstrap,
							content: "noBootstrap Lorem ipsum dolor",
						},
						{
							img: rwd,
							content: "rwd Lorem ipsum dolor",
						},
						{
							img: sass,
							content: "sass Lorem ipsum dolor",
						},
						{
							img: sc,
							content: "sc Lorem ipsum dolor",
						}
					],
					[
						{
							img: js,
							title: '<span style="color: #ffcc33">J</span>ava<span style="color: #ffcc33">S</span>cript ES6'
						},
						{
							img: es6,
							content: "lorem ipsum dolor"
						},
						{
							img: nojq,
							content: "lorem ipsum dolor"
						},
						{
							img: react,
							content: "lorem ipsum dolor"
						},
					],
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.frontend-wrapper {
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