<template>
	<div class="front-page-wrapper">
		<div v-if="isLoading" class="loading">
			<div class="loading__dott"></div>
			<div class="loading__dott"></div>
			<div class="loading__dott"></div>
		</div>
		<fragment v-else>
			<img class="avatar" width="100px" height="100px" :src="avatar" alt="avatar">
			<div class="logotype">
				<img class="s-letter" :src="letter" alt="s-letter">
				<div class="letters">
					<span class="letter">z</span>
					<span class="letter">u</span>
					<span class="letter">l</span>
					<span class="letter">c</span>
					<span class="letter">u</span>
					<span class="letter">ś</span>
				</div>
			</div>
			<div class="scroll-down" />
		</fragment>
	</div>
</template>

<script>
	import avatar from '@/Assets/avatar.jpg'
	import letter from '@/Assets/s-letter.svg'
	import overlay from '@/Assets/overlay.svg'
	export default {
		name: "FrontPage",
		created() {
			// Get images
			const images = [avatar, letter, overlay]
			// Load images
			let loadImages = 0
			images.forEach(url => {
				const img = new Image();
				img.src = url
				img.onload = () => {
					loadImages++
					if (loadImages === images.length) {
						this.isLoading = false
						console.log('Done!')
					}
				}
			})
		},
		data() {
			return {
				avatar,
				letter,
				overlay,
				isLoading: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.front-page-wrapper {
		width: 100%;
		height: var(--window-height);
		min-height: 550px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-direction: column;
		.loading {
			display: flex;
			.loading__dott {
				width: 20px;
				height: 20px;
				border-radius: 50%;
				margin: 5px;
				border: 3px solid $decorative;
				&:nth-child(1) {
					animation: loadingDott 2s both infinite;
				}
				&:nth-child(2) {
					animation: loadingDott 2s 0.2s both infinite;
				}
				&:nth-child(3) {
					animation: loadingDott 2s 0.4s both infinite;
				}
			}
		}
		.avatar {
			display: block;
			width: 250px;
			height: 250px;
			border-radius: 100px;
			/* opacity: 0; */
			/* animation: avatar 1s both; */
		}
		.logotype {
			position: relative;
			width: 260px;
			.s-letter {
				height: 110px;
				opacity: 0;
				animation: sLetter 0.5s 0.5s both;
			}
			.letters {
				position: absolute;
				bottom: 17px;
				left: 85px;
				display: flex;
				.letter {
					display: block;
					font-weight: bold;
					font-size: 57px;
					opacity: 0;
					&:nth-child(1) {
						animation: letter 0.5s 1s both;
					}
					&:nth-child(2) {
						animation: letter 0.5s 1.1s both;
					}
					&:nth-child(3) {
						animation: letter 0.5s 1.2s both;
					}
					&:nth-child(4) {
						animation: letter 0.5s 1.3s both;
					}
					&:nth-child(5) {
						animation: letter 0.5s 1.4s both;
					}
					&:nth-child(6) {
						animation: letter 0.5s 1.5s both;
					}
				}
			}
		}
		.scroll-down {
			width: 30px;
			height: 30px;
			background-color: $decorative;
			border-radius: 50%;
			opacity: 0;
			animation: scrollDown 1.5s 1.5s both infinite;
		}
	}
</style>