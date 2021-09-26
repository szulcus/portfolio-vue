<template>
	<div class="contact-wrapper">
		<h1 class="title">Kontakt</h1>
		<h2 class="subtitle">Zainteresowany? Zapraszam do zapoznania się z moim <router-link class="subtitle__link" to="/cv">CV</router-link> oraz kontaktu poprzez formularz {{':)'}}</h2>
		<Form />
	</div>
</template>

<script>
	import Form from '@/Components/Form'
	export default {
		name: "Contact",
		components: {
			Form
		}
	}
</script>

<style lang="scss" scoped>
	.contact-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px 0 60px 0;
		.title {
			font-size: 40px;
			margin: 30px 0;
			@include line;
		}
		.subtitle {
			font-size: 20px;
			margin: 20px 0;
			text-align: center;
			.subtitle__link {
				color: $decorative;
				transition: 0.2s ease;
				@include hover {
					opacity: 0.7;
				}
			}
		}
	}
</style>