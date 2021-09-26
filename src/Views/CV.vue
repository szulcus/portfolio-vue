<template>
	<div class="cv-wrapper">
		<div class="cv" id="cv">
			<Aside />
			<Main />
		</div>
		<DownloadButton />
	</div>
</template>

<script>
	import Aside from '@/Components/Cv/Aside'
	import Main from '@/Components/Cv/Main'
	import DownloadButton from '@/Components/Cv/DownloadButton'
	export default {
		name: "CV",
		components: {
			Aside,
			Main,
			DownloadButton
		}
	}
</script>

<style lang="scss" scoped>
	.cv-wrapper {
		width: calc(100% - 40px);
		height: calc(var(--window-height) - 40px);
		margin: 20px;
		overflow: scroll;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			width: 0px;
			height: 0px;
		}
		&::-webkit-scrollbar-track {
			background: transparent; 
		}
		&::-webkit-scrollbar-thumb {
			background-color: $decorative;
		}
			border-radius: 20px;
		.cv {
			width: 794px;
			min-width: 794px;
			height: 1122px;
			display: flex;
			margin: 0px auto;
			padding: 0px;
			border-radius: 20px;
			overflow: hidden;
			@media (min-width: 1100px) {
				box-shadow: 0 0 20px rgb($secondary, 0.5);
				margin: 20px auto;
			}
		}
		@media print {
			width: 794px;
			height: 1122px;
			margin: 0;
			border-radius: 0;
			-webkit-print-color-adjust: exact;
			.cv {
				box-shadow: 0 0 0;
				border-radius: 0;
			}
		}
	}
</style>