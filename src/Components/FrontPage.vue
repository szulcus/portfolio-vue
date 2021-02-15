<template>
	<div class="front-page-wrapper">
		<div v-if="isLoading" class="loading">
			<div class="loading__dott"></div>
			<div class="loading__dott"></div>
			<div class="loading__dott"></div>
		</div>
		<fragment v-else>
			<header>
				<picture>
					<source type="image/webp" :srcset="avatar_webp" />
					<!-- <source type="image/jpeg" :srcset="avatar_jpg" /> -->
					<img class="avatar" :src="avatar_jpg" alt="avatar" width="250" height="250" />
				</picture>
			</header>
			<div class="logotype">
				<img class="s-letter" :src="letter" alt="s-letter" width="140" height="110" />
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
	import avatar_jpg from '@/Assets/avatar/avatar.jpg'
	import avatar_webp from '@/Assets/avatar/avatar.webp'
	import letter from '@/Assets/s-letter.svg'
	import overlay from '@/Assets/overlay.svg'
	export default {
		name: "FrontPage",
		created() {
			// Get images
			const images = [avatar_jpg, avatar_webp , letter, overlay]
			// Load images
			let loadImages = 0
			images.forEach(url => {
				const img = new Image();
				img.src = url
				img.onload = () => {
					loadImages++
					if (loadImages === images.length) {
						this.isLoading = false
					}
				}
			})
		},
		data() {
			return {
				avatar_jpg,
				avatar_webp,
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
		height: 100vh;
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
			opacity: 0;
			animation: avatar 1s both;
		}
		.logotype {
			position: relative;
			width: 260px;
			.s-letter {
				width: 140px;
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