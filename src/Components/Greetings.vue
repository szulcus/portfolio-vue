<template>
	<div class="greetings-wrapper">
		<h1 class="title">Kim jestem?</h1>
		<h2 class="subtitle">Cześć! Miło Cię tu widzieć!</h2>
		<p class="description">
			Nazywam się Jakub Schulz i od ponad 3 lat tworzę strony oraz aplikacje internetowe.
			Obecnie studiuję informatykę ze specjalizacją <a class="link" href="https://www.nafrontendzie.pl/frontend-developer-wlasciwie-znaczy" v-rel>Front-end Developer</a>, a programowanie jest moją największą pasją.
			Interesuję się również <a class="link" href="https://sdacademy.pl/blog/co-to-jest-back-end/" v-rel>backendem</a>.
			Określiłbym się zatem jako początkujący <a class="link" href="https://blog.edugrafia.pl/czym-rozni-sie-front-end-back-end-full-stack-developer/" v-rel>Full-stack Developer</a>.<br />
		</p>
		<p class="description">
			Do moich zainteresowań należą także: gotowanie, psychologia i rozwój osobisty.
		</p>
		<p class="description">
			Zapraszam do zapoznania sie z moimi umiejętnościami {{':)'}}
		</p>
	</div>
</template>

<script>
	export default {
		name: "Greetings",
		props: {
			title: String,
			description: String,
			experience: Object
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.greetings-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px 0;
		.title {
			font-size: 40px;
			margin: 30px 0;
			@include line;
		}
		.subtitle {
			font-size: 20px;
			margin: 20px 0 10px 0;
			text-align: center;
		}
		.description {
			font-size: 18px;
			width: 100%;
			text-align: center;
			max-width: 1000px;
			margin: 10px 0;
		}
	}
</style>