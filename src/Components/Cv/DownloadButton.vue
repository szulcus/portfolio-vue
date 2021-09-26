<template>
	<a class="download-button-wrapper" href="./cv.pdf" download="CV - Jakub Schulz">
		<fa-icon icon="file-download" />
	</a>
</template>

<script>
	export default {
		name: "DownloadButton"
	}
</script>

<style lang="scss" scoped>
	.download-button-wrapper {
		position: fixed;
		bottom: 30px;
		right: 30px;
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: none;
		font-size: 22px;
		color: $decorative;
		background-color: $bg;
		border: 3px solid $decorative;
		@media (min-width: 1300px) {
			bottom: 30px;
			right: 150px;
		}
		@media print {
			display: none;
		}
	}
</style>