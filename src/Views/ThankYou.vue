<template>
	<div class="ty-wrapper">
		<h1 class="ty__title">Dziękuję za wiadomość</h1>
		<img class="ty__img" :src="yay" alt="Yay!">
		<p class="ty__description">Twoja wiadomość właśnie do mnie dotarła. Postaram się szybko na nią odpisać. Jeśli jednak nie odzywałbym się przez dłuższą chwilę, proszę o kontakt na: <a class="description__link" href="https://m.me/szulcus" v-rel>https://m.me/szulcus</a>.</p>
		<Link to="/" content="Wróć" router />
	</div>
</template>

<script>
	import Link from '@/Components/Global/Link'
	import yay from '@/Assets/yay.svg'

	export default {
		name: "CV",
		components: {
			Link,
		},
		data() {
			return {
				yay
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ty-wrapper {
		width: 100%;
		height: var(--window-height);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px;
		text-align: center;
		@media (min-width: 600px) {
			padding: 30px 80px;
		}
		@include scroll;
		.ty__title {
			@include line;
		}
		.ty__img {
			width: 200px;
			margin: 50px 0;
		}
		.ty__description {
			width: min(100%, 1000px);
			.description__link {
				font-weight: bold;
				color: $decorative;
				transition: 0.2s ease;
				@include hover {
					opacity: 0.7;
				}
			}
		}
	}
</style>