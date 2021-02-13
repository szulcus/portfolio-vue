<template>
	<div class="backend-wrapper">
		<h1 class="title">Backend</h1>
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
	import django from '@/Assets/experience/backend/python/django.svg'
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
							img: ga,
							title: "Google Analytics",
							content: `
								Firebase udostepnia Google Analytics.
								Narzędzie, dzięki któremu właściciel strony jest w stanie monitorować akcje wykonywane na stronie.
								W tym między innymi ilość odwiedzin.
							`
						},
						{
							img: db,
							title: "Firestore",
							content: `
								Z pomocą usługi Firebase Firestore potrafię stworzyć strony z edytowalną zawartością.
								Dzięki temu jestem w stanie szybko stworzyć stronę, którą w prosty sposób i w każdej chwili można dostosować wedle uznania.
							`
						},
						{
							img: st,
							title: "Firebase Storage",
							content: `
								Usługa Firebase Storage pozwala mi na przechowywanie nie tylko tekstu, lecz również zdjęć i filmów.
								Dzięki temu na stronie można również "przechowywać" pliki multimedialne.
							`
						},
						{
							img: au,
							title: "Authentication",
							content: `
								Z użyciem Firebase Authentication jestem w stanie zrobić system logowania na stronie.
								Rejestracja może być dostępna standardowo z poziomu strony, jak również za pomocą najpopularniejszych Social Media takich jak: Google+, Facebook, Twitter, czy GitHub.
							`
						},
						{
							img: fh,
							title: "Firebase Hosting",
							content: `
								Firebase (choć nie tylko, o czym piszę w sekcji "Inne") udostepnia darmowy Hosting, wraz z cutomową domeną.
								Dzięki temu dla prostych stron jestem w stanie ograniczyć coroczne opłaty jedynie do domeny.
							`
						},
						{
							img: cf,
							title: "Cloud Functions",
							content: `
								Usługa Cloud Functions pozwala mi na wykonywanie określonych funkcji po stronie backendu (na przykład podczas zmian z bazie danych).
								Wspomniane wcześniej funkcje są darmowe, lecz z pewnymi ograniczeniami.
								Ta funkcja jest płatna, jednak są to jedynie drobne koszty.
							`
						},
					],
					[
						{
							img: nodejs,
							title: '<span style="color: #6cc24a">N</span>ode.js'
						},
						{
							img: express,
							title: "Express.js",
							content: `
								Potrafię korzystać z frameworka Express.js, oraz stworzyć w nim proste REST API.
								Obecnie jestem na etapie tworzenia API do jednego z moich większych projektów nad którym pracuję (więcej o nim piszę w zakładce "Realizacje").
							`,
						},
						{
							img: mongodb,
							title: "MongoDB",
							content: `
								Przy korzystaniu z nierelacyjnej bazy danych MongoDB najczęściej posługuję się platformą modelowania Mongoose.
								Potrafię korzystać z MongoDB Atlas, dzięki czemu mam dostęp do danych w przeglądarce.
							`,
						},
						{
							img: npm,
							title: "NPM",
							content: `
								Często korzystam z managera pakietów NPM.
								Potrafię także tworzyć własne paczki (o czym więcej piszę w sekcji "Realizacje").
								Umiem również posługiwać się podobnym managerem pakietów jakim jest yarn.
							`,
						}
					],
					[
						{
							img: python,
							title: '<span style="color: #387eb8">P</span><span style="color: #ffe052">y</span>thon'
						},
						{
							img: terminal,
							title: "Aplikacje konsolowe",
							content: `
								W pythonie potrafię tworzyć przeróżne aplikacje konsolowe, oraz korzystać z instalatora pakietów pip.
								W nauce tego języka pomogłem juz kilku moim znajomym, w tym siostrze na studiach.
							`
						},
						{
							img: django,
							title: "Django",
							content: `
								Umiem w podstawowym zakresie posługiwać się frameworkiem Django.
								Potrafię stworzyć proste API, oraz posługiwać się Szablonami Django.
							`
						},
					],
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.backend-wrapper {
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