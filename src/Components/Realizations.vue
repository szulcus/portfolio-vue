<template>
	<div class="projects-wrapper">
		<h1 class="title">Realizacje</h1>
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
	import vue from '@/Assets/experience/frontend/js/vue.svg'
	import react from '@/Assets/experience/frontend/js/react.svg'
	import sass from '@/Assets/experience/frontend/css/sass.svg'
	import sc from '@/Assets/experience/frontend/css/sc.svg'
	import firebase from '@/Assets/experience/backend/firebase/firebase.svg'
	import nodejs from '@/Assets/experience/backend/nodejs/nodejs.svg'
	import mongodb from '@/Assets/experience/backend/nodejs/mongodb.svg'
	import npm from '@/Assets/experience/backend/nodejs/npm.svg'

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
						url: "https://jakub104.github.io/tofu",
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
							Aplikacja ToFu (True or False, uh?) służy głównie do zabawy ze znajomymi.
							Użytkownicy mogą odpowiadać na quizy innych, lub tworzyć własne i rywalizować w rankingu.
							Aby rozwiązać quiz zależy odpowiedzieć (twierdząco lub przecząco) na pytania.
							Na koniec pojawia się tabela z wynikami i procenten dobrych odpowiedzi.
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
							Nowoczesna strona internetowa dla firmy budowlanej Na-J.
							Zawiera galerię z podglądem i opisem wybranych projektów.
							W zakładce "Kontakt" widnieje mapka z siedzibą firmy, adres i formularz kontaktowy.
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
							Platforma do nauki słówek EasyWord umożliwia korzystanie bez konta, jednak nie zapisujemy w tym trybie swoich postępów.
							Po rejestracji mamy dostęp swojego profilu, gdzie możemy edytować zdjęcie, nick oraz biogram.
							Możliwa jest rywalizacja z innymi użytkownikami na czacie, oraz pisanie z nimi na czacie.
							Aplikacja zawiera wiele mini gier i innych funkcjonalności, dzięki czemu nauka słówek jest dużo ciekawcza.
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
							Strona internetowa domu opieki Cichy Dworek.
							Posiada galerię w formie wirtualnego spaceru po budynku.
							W zakładce "Kontakt" znajdziemy mapkę, adres, linki do social mediów, oraz formularz kontaktowy.
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
							Aplikacja do tworzenia notatek.
							Aby zapisać swoje notatki, należy zalogować sie do aplikacji.
							Możliwe jest tworzenie notatek w formie tekstu (edycja nagłówka i treści) lub listy (edycja nagłówka, oraz edycja, dodawanie i usuwanie elementów).
							Notatki możemy trzymać w trzech folderach (głównym, archiwum i usuniętych).
							Aplikacja działa w 8 językach.
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
							RootCalculate jest paczką na npm, która służy do liczenia pierwiastków.
							Umożliwia również rozkład liczb na czynniki pierwsze.
							Dokumentacja została utworzona w języku Markdown.
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
							Scommunity jest projektem nad którym wciąż pracuję.
							W zamyśle ma być uproszczona wercją Facebooka
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