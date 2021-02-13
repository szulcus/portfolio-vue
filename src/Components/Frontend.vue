<template>
	<div class="frontend-wrapper">
		<h1 class="title">Frontend</h1>
		<Gallery
			:experience="experience"
		/>
	</div>
</template>

<script>
	import Gallery from '@/Components/Gallery'
	// HTML
	import html from '@/Assets/experience/frontend/html/html.svg'
	import modern from '@/Assets/experience/frontend/html/modern.svg'
	import search from '@/Assets/experience/frontend/html/search.svg'
	import components from '@/Assets/experience/frontend/html/components.svg'
	// CSS
	import css from '@/Assets/experience/frontend/css/css.svg'
	import noBootstrap from '@/Assets/experience/frontend/css/noBootstrap.svg'
	import rwd from '@/Assets/experience/frontend/css/rwd.svg'
	import sass from '@/Assets/experience/frontend/css/sass.svg'
	import sc from '@/Assets/experience/frontend/css/sc.svg'
	// JS
	import js from '@/Assets/experience/frontend/js/js.svg'
	import react from '@/Assets/experience/frontend/js/react.svg'
	import vue from '@/Assets/experience/frontend/js/vue.svg'
	import es6 from '@/Assets/experience/frontend/js/es6.svg'
	import nojq from '@/Assets/experience/frontend/js/nojq.svg'

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
							title: '<span style="color: #E44D26">H</span>TML'
						},
						{
							img: modern,
							title: "Najnowszy standard",
							content: `
								Strony i aplikacje tworzę zgodne z najnowszym standardem HTML5.
								Tworzone przeze mnie projekty są w pełni semantyczne, a co za tym idzie nowoczesne i lepiej współpracują z innymi urządzeniami.
							`
						},
						{
							img: search,
							title: "Szczegóły",
							content: `
								Diabeł tkwi w szczegółach. Dlatego zawsze zwracam uwagę na faviconkę, grafikę reprezentującą link, zachecający opis, maskowalne ikony, oraz inne metatagi.
								Wszystko zgodnie ze sdandardem PWA (Progressive Web App).
							`
						},
						{
							img: components,
							title: "Podział kodu",
							content: `
								Staram się jak najczęściej dzielić kod na komponenty.
								Potrafię również posługiwać się silnikami szablonów, takimi jak Pug.js, EJS, czy Szablonami Django, co pozwala mi na tworzenie układów często występujących na stronie.
								Umożliwia mi to zachowanie porządku, oraz szybkie wdrażanie ewentualnych poprawek.
							`
						},
					],
					[
						{
							img: css,
							title: '<span style="color: #2062AF">C</span>SS'
						},
						{
							img: rwd,
							title: "Responsywność",
							content: `
								Wszystkie moje projekty są w pełni responsywne, tak aby urzytkownicy urządzeń mobilnych, czy nawet zegarków mogli cieszyć się dobrze przeststawionymi treściami.
								Unikam starego podejścia floatów i korzystam z nowych narzędzi takich jak flexbox, czy grid.
							`,
						},
						{
							img: sass,
							title: "Czystość kodu",
							content: `
								Aby utrzymać czystość kodu, często korzystam z możliwości, które oferuje preprocesor SASS.
								Podział plików na osobne style globalne, zmienne, animacje, czy mixiny bardzo ułatwia późniejsze zarządzanie projektem.
							`
						},
						{
							img: sc,
							title: "CSS in JS",
							content: `
								Jeśli natomiast pracuję we frameworku takim jak React, do stylowania najczęściej korzystam ze Styled Components.
								Jestem zaznajomiony z takimi pojęciami jak rozszerzanie komponentów, props, czy theme provider
							`
						},
						{
							img: noBootstrap,
							title: "Dokładność",
							content: `
								Do każdego klienta podchodzę indywidualnie.
								Jestem przeciwnikiem korzystania z gotowych frameworków CSS takich jak Bootstrap czy Foundation.
								Uważam, że dopracowany na stronie powinien być każdy szczegół, a zainwestowany czas zwróci się nam z nawiązką.
							`
						}
					],
					[
						{
							img: js,
							title: '<span style="color: #ffcc33">J</span>ava<span style="color: #ffcc33">S</span>cript'
						},
						{
							img: vue,
							title: "Vue.js",
							content: `
								Z frameworkiem Vue mam styczność już ponad pół roku.
								Odkąd poznałem ten framework, zakochałem się w nim.
								Bardzo podoba mi się jego prostota i elastyczność.
								Stworzyłem w nim już 4 większe projekty, o których więcej w sekcji "Realizacje".
							`
						},
						{
							img: react,
							title: "React.js",
							content: `
								React był pierwszym frameworkiem JavaScriptu, z którym miałem styczność.
								Pozwolił mi na napisanie wielu ciekawych aplikacji, w tym platwormy EasyWord, którą rozwijałem około 1,5 roku (więcej o niej piszę w sekcji "Realizacje")
							`
						},
						{
							img: es6,
							title: "ECMAScript 6",
							content: `
								Korzystam z najnowszych funkcji języka JavaScript w standardzie ES6+, co przekłada sie na jakość kodu.
								Aby jednak wszystkie te nowości były zrozumiałe dla większości przeglądarek, korzystam z narzędzia Babel (o czym dokładniej piszę w sekcji "Inne").
							`
						},
						{
							img: nojq,
							title: "Nie dla JQuery",
							content: `
								Nie używam przestarzałych technologii, takich jak JQuery, co przekłada sie na szybkość moich stron.
								Jednocześnie jestem powierzchownie zaznajomiony z tą biblioteką, dzięki czemu potrafię odnaleść się w starych projektach.
							`
						}
					],
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.frontend-wrapper {
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