<template>
	<div class="other-wrapper">
		<h1 class="title">Inne</h1>
		<!-- <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos asperiores, rem quos dolore autem cupiditate exercitationem accusamus velit rerum dolorem corrupti nostrum quae quasi officia architecto? Sit, iste nam.</p> -->
		<Gallery
			:experience="experience"
		/>
	</div>
</template>

<script>
	import Gallery from '@/Components/Gallery'
	// CONFIG
	import config from '@/Assets/experience/other/config/config.svg'
	import vsc from '@/Assets/experience/other/config/vsc.svg'
	import folder from '@/Assets/experience/other/config/folder.svg'
	import babel from '@/Assets/experience/other/config/babel.svg'
	// LANGUAGES
	import languages from '@/Assets/experience/other/languages/languages.svg'
	import cs from '@/Assets/experience/other/languages/cs.svg'
	import cpp from '@/Assets/experience/other/languages/cpp.svg'
	import md from '@/Assets/experience/other/languages/md.svg'
	import vba from '@/Assets/experience/other/languages/vba.svg'
	// TOOLS
	import tools from '@/Assets/experience/other/tools/tools.svg'
	import lighthouse from '@/Assets/experience/other/tools/lighthouse.svg'
	import github from '@/Assets/experience/other/tools/github.svg'
	import netlify from '@/Assets/experience/other/tools/netlify.svg'
	import postman from '@/Assets/experience/other/tools/postman.svg'
	import xd from '@/Assets/experience/other/tools/xd.svg'
	// OFFICE
	import office from '@/Assets/experience/other/office/office.svg'
	import excel from '@/Assets/experience/other/office/excel.svg'
	import powerpoint from '@/Assets/experience/other/office/powerpoint.svg'
	import word from '@/Assets/experience/other/office/word.svg'

	export default {
		name: "Other",
		components: {
			Gallery
		},
		data() {
			return {
				experience: [
					[
						{
							img: config,
							title: 'Konfiguracja'
						},
						{
							img: vsc,
							title: "VS Code",
							content: `
								Dużą wagę przykładam do wyglądu i konfiguracji mojego stanowiska pracy, którym na codzień jest Visual Studio Code.
								Staram się, aby moja praca była wydajna, dlatego korzystam z wielu paczek i skrótów.
								Potrafię również samemu tworzyć własne snippety, czy skróty klawiszowe.
							`
						},
						{
							img: folder,
							title: "Struktura plików",
							content: `
								Ważny jest dla mnie porządek.
								Odpowiednia struktura folderów i plików przy większych projektach jest koniecznością, dlatego staram się od początku przykładać do tego uwagę.
							`
						}
					],
					[
						{
							img: tools,
							title: 'Narzędzia'
						},
						{
							img: lighthouse,
							title: "Lighthouse",
							content: `
								Narzędziem które w ostatnim czasie dość intensywnie zacząłem wykorzystywać jest Google Lighthouse.
								To program, który pozwala na przeprowadzenie audytu strony internetowej, dzięki czemu mam pewność, że moje projekty spełniają wszystkie standardy oraz są szybkie i nowoczesne.
							`
						},
						{
							img: github,
							title: "GitHub",
							content: `
								Często korzystam z systemu kontroli wersji Git, aby mieć lepszą kontrolę nad projektem.
								Dodatkowo dla projektów open source GitHub udostepnia darmowy hosting wraz z customową domeną (o czym wspomniałem już w sekcji "Frontend").
							`
						},
						{
							img: netlify,
							title: "Netlify",
							content: `
								Często korzystam również z usług hostingowych platformy Netlify, która ma opcję publikacji stron automatycznie po zapisaniu zmian na GitHub.
								W tym wypadku również jest możliwość zmiany domeny na własną.
							`
						},
						{
							img: postman,
							title: "Postman",
							content: `
								Do wysyłania zapytań do API podczas pisania backendu najczęściej służy mi narzędzie Postman.
								Pozwala na szybkie testowanie i rozwiązywanie błędów.
							`
						},
						{
							img: babel,
							title: "Babel",
							content: `
								Aby każda przeglądarka mogła poradzić sobie z kompilacją nowości JavaScript ES6, korzystam z narzędzia Babel.
								Korzystam z tego również po stronie backendu (w Node.js), aby importować pliki za pomocą ES Mdules.
							`
						},
						{
							img: xd,
							title: "Adobe XD",
							content: `
								Nie jestem grafikiem ale uważam, że mam dobre poczucie gustu.
								Prawie wszystkie loga projektów przedstawionych w sekcji "Realizacje" zostały zaprojektowane i utworzone przeze mnie w programie Adobe Experience Design.
							`
						},
					],
					[
						{
							img: languages,
							title: 'Inne języki'
						},
						{
							img: cs,
							title: "C#",
							content: `
								Obecnie na studiach uczę się języka C#.
								Jest to poziom zdecydowanie początkujący, natomiast jako ciekawostka myślę, że warto o tym wspomnieć.
							`
						},
						{
							img: cpp,
							title: "C++",
							content: `
								W liceum, przez całą klasę trzecią uczyłem się języka C++.
								Szczerze mówiąc nie lubię zbytnio tego języka i idzie mi w nim jeszcze gorzej niż w C#, ale znam podstawową składnię.
							`
						},
						{
							img: md,
							title: "Markdown",
							content: `
								Potrafię posługiwać się językiem Markdown.
								Całą dokumentację opisującą moją paczkę na npm (więcej o niej w sekcji "Realizacje") napisałem właśnie w nim.
							`
						},
						{
							img: vba,
							title: "VBA",
							content: `
								W drugiej licueum wraz z obsługą Excela, uczyłem się o języka Visual Basic for Applications.
								Nauczyłem się w nim tworzyć proste funkcje i makra.
							`
						},
					],
					[
						{
							img: office,
							title: 'Office 365'
						},
						{
							img: excel,
							title: "Excel",
							content: `
								Jak już wcześniej wspomniałem, potrafię używać zaawansowanych funkcji Excela oraz z pomocą języka VBA tworzyć własne makra.
							`
						},
						{
							img: powerpoint,
							title: "Power Point",
							content: `
								Od dziecka fascynowało mnie tworzenie ładnie przedstawionej, wirtualnej treści.
								W szkole często brałem udział w konkursach i zawsze z niecierpliwością czekałem na zadania dodatkowe, by móc pochwalić sie swoją twórczością.
								Obecnie pasja ta przerodziła się u mnie w tworzenie stron internetowych.
							`
						},
						{
							img: word,
							title: "Word",
							content: `
								Potrafię również w podstawowym zakresie tworzyć dokumenty w programie Word.
							`
						},
					],
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.other-wrapper {
		width: 100%;
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