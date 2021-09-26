<template>
	<a v-if="!router" class="link-component" :href="to" v-rel>
		{{content}}
	</a>
	<router-link v-else :to="to" class="link-component">
		{{content}}
	</router-link>
</template>

<script>
	export default {
		name: "Link",
		props: {
			content: String,
			to: String,
			router: Boolean
		}
	}
</script>

<style lang="scss" scoped>
	.link-component {
		min-height: 41px;
		display: block;
		position: relative;
		font-size: 18px;
		padding: 7px 10px;
		margin: 5px;
		background-color: transparent;
		border-radius: 15px;
		border: 3px solid $decorative;
		color: $primary;
		letter-spacing: 1px;
		transition: background-color 0.5s ease, transform 0.2s ease;
		overflow: hidden;
		outline: none;
		font-weight: bold;
		&::before {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: $decorative;
			opacity: 0.5;
			filter: blur(5px);
			transform: translateX(-130%) skewX(-15deg);
			transition: all 0.7s ease;
			z-index: 2;
		}
		@include hover {
			background-color: $decorative;
			color: $bg;
			&::before {
				transform: translateX(130%) skewX(-15deg);
				opacity: 0.6;
				transition: all 0.7s ease;
			}
			&:active{
				transform: scale(0.97);
			}
		}
	}
</style>