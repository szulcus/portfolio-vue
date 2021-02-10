<template>
	<div>
		<div class="home">
			<FrontPage />
			<Greetings />
			<Frontend />
			<Backend />
			<Realizations />
		</div>
		<Footer />
	</div>
</template>

<script>
	import FrontPage from '@/Components/FrontPage'
	import Greetings from '@/Components/Greetings'
	import Frontend from '@/Components/Frontend'
	import Backend from '@/Components/Backend'
	import Realizations from '@/Components/Realizations'
	import Footer from '@/Components/Footer'
	export default {
		name: 'Home',
		components: {
			FrontPage,
			Greetings,
			Frontend,
			Backend,
			Realizations,
			Footer
		},
		data() {
			return {
			}
		},
		mounted() {
			
		},
	}
</script>
<style lang="scss" scoped>
	.home {
		width: 100%;
		height: 100%;
		background-position: center top;
		background-size: cover;
		padding: 0 20px;
		@media (min-width: 600px) {
			padding: 0 80px;
		}
	}
</style>
