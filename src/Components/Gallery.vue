<template>
	<div class="gallery">
		<div class="arrow" @click="itemsDown">
			<fa-icon class="arrow__icon" icon="angle-left" />
		</div>
		<div class="arrow" @click="itemsUp">
			<fa-icon class="arrow__icon" icon="angle-right" />
		</div>
		<div class="gallery-wrapper">
			<div :class="['exp', {'exp--hide': exchange}]">
				<h2 v-html="experience[activeItems][0].title" class="exp__title" />
				<img class="exp__img" :src="experience[activeItems][0].img" :alt="experience[activeItems][0].title">
				<div class="exp__nav">
					<div v-for="(item, index) in experience[activeItems].slice(1)" :key="index">
						<img
							:class="['nav__img', {'nav__img--active': activeIndex === index}]"
							:src="item.img"
							:alt="item.title"
							@click="setIndex(index)"
						/>
					</div>
				</div>
				<div class="exp__description">
					<div class="arrow arrow--description" @click="indexDown">
						<fa-icon class="arrow__icon" icon="angle-left" />
					</div>
					<div class="arrow arrow--description" @click="indexUp">
						<fa-icon class="arrow__icon" icon="angle-right" />
					</div>
					<div class="description__wrapper">
						<h3 class="wrapper__title">{{experience[activeItems].slice(1)[activeIndex].title}}</h3>
						<p class="wrapper__text">{{experience[activeItems].slice(1)[activeIndex].content}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Gallery",
		props: {
			experience: Array,
		},
		data() {
			return {
				isLoading: true,
				exchange: false,
				activeItems: 0,
				activeIndex: 0
			}
		},
		created() {
			// Get images
			const images = []
			this.experience.forEach(array => array.forEach(obj => {
				images.push(obj.img)
			}))
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
			console.log(loadImages)
			console.log(images)
		},
		methods: {
			itemsUp() {
				this.exchange = true
				setTimeout(() => {
					this.activeIndex = 0
					this.activeItems < this.experience.length - 1 ? this.activeItems++ : this.activeItems = 0
					this.exchange = false
				}, 200)
			},
			itemsDown() {
				this.exchange = true
				setTimeout(() => {
					this.activeIndex = 0
					this.activeItems > 0 ? this.activeItems-- : this.activeItems = this.experience.length - 1
					this.exchange = false
				}, 200)
			},
			indexUp() {
				this.activeIndex < this.experience[this.activeItems].length - 2 ? this.activeIndex++ : this.activeIndex = 0
				
			},
			indexDown() {
				this.activeIndex > 0 ? this.activeIndex-- : this.activeIndex = this.experience[this.activeItems].length - 2
			},
			setIndex(index) {
				this.activeIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
.gallery {
	position: relative;
	width: 90%;
	max-width: 1000px;
	.arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 30px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30px;
		background-color: $bg;
		z-index: 2;
		.arrow__icon {
			transition: 0.2s ease;
		}
		&:nth-child(1) {
			left: -15px;
			@include hover {
				.arrow__icon {
					transform: translateX(-3px);
				}
			}
		}
		&:nth-child(2) {
			right: -15px;
			@include hover {
				.arrow__icon {
					transform: translateX(3px);
				}
			}
		}
	}
	.gallery-wrapper {
		width: 100%;
		height: 100%;
		clip-path: polygon(0 3%, 100% 0, 100% 97%, 0 100%);
		border: 3px solid $decorative;
		padding: 20px;
		.exp {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			transition: 0.2s ease;
			.exp__title {
				display: block;
				margin: 0;
				font-size: 25px;
			}
			.exp__img {
				display: block;
				width: 100%;
				height: 100px;
				margin: 10px;
				object-fit: contain;
			}
			.exp__nav {
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				margin-top: 10px;
				.nav__img {
					width: 40px;
					height: 40px;
					margin: 10px;
					opacity: 0.5;
					transition: 0.2s ease;
					object-fit: contain;
					@include hover {
						opacity: 1;
					}
				}
				.nav__img--active {
					transform: scale(1.2);
					opacity: 1;
				}
			}
			.exp__description {
				position: relative;
				width: 90%;
				max-width: 600px;
				.description__wrapper {
					text-align: center;
					width: 100%;
					min-height: 250px;
					clip-path: polygon(0 3%, 100% 0, 100% 97%, 0 100%);
					border: 3px solid $decorative;
					padding: 10px;
					@media (min-width: 600px) {
						padding: 20px;
						min-height: 200px;
					}
					.wrapper__title {
						margin: 10px;
					}
					.wrapper__text {
						margin: 0;
						font-size: 16px;
					}
				}
				.arrow--description {
					height: 40px;
					.arrow__icon {
						font-size: 23px;
					}
				}
			}
		}
		.exp--hide {
			opacity: 0;
		}
	}
}
</style>