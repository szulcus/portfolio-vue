<template>
	<div class="gallery">
		<div class="arrow" @click="indexDown">
			<fa-icon class="arrow__icon" icon="angle-left" />
		</div>
		<div class="arrow" @click="indexUp">
			<fa-icon class="arrow__icon" icon="angle-right" />
		</div>
		<div class="gallery-wrapper">
			<div :class="['exp', {'exp--hide': exchange}]">
				<a :href="experience[activeIndex].url" class="realization__logo" v-rel>
					<picture>
						<source type="image/webp" :srcset="experience[activeIndex].signet.webp">
						<source type="image/png" :srcset="experience[activeIndex].signet.png">
						<img class="logo__signet" :src="experience[activeIndex].signet.png" alt="signet" width="130" height="130">
					</picture>
					<picture>
						<source type="image/webp" :srcset="experience[activeIndex].logotype.webp" />
						<source type="image/png" :srcset="experience[activeIndex].logotype.png" />
						<img class="logo__logotype" :src="experience[activeIndex].logotype.png" alt="logotype" width="250" height="50" />
					</picture>
				</a>
				<div class="exp__nav">
					<div v-for="(technology, index) in experience[activeIndex].technologies" :key="index">
						<a class="nav__img" :href="technology.url" v-rel>
							<img
								:src="technology.img"
								:alt="technology.name"
								:title="technology.name"
								width="40"
								height="40"
							/>
						</a>
					</div>
				</div>
				<div class="exp__description">
					<div class="description__wrapper">
						<p class="wrapper__text">{{experience[activeIndex].content}}</p>
					</div>
					<div class="description__links">
						<Link content="Strona" :to="experience[activeIndex].url" />
						<Link content="Kod źródłowy" :to="experience[activeIndex].git" />
					</div>
				</div>
			</div>
		</div>
		<div class="carousel">
			<div :class="['carousel__indicator', {'carousel__indicator--active': activeIndex === index }]" v-for="(items, index) in experience" :key="index" @click="setIndex(index)" />
		</div>
	</div>
</template>

<script>
	import Link from '@/Components/Global/Link'

	export default {
		name: "ProjectsGallery",
		components: {
			Link
		},
		props: {
			experience: Array
		},
		data() {
			return {
				exchange: false,
				activeIndex: 0
			}
		},
		created() {
			// Get images
			const images = []
			this.experience.map(obj => {
				images.push(obj.signet)
				images.push(obj.logotype)
				obj.technologies.forEach(technology => images.push(technology.img))
			})
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
		methods: {
			indexUp() {
				this.exchange = true
				setTimeout(() => {
					this.activeIndex < this.experience.length - 1 ? this.activeIndex++ : this.activeIndex = 0
					this.exchange = false
				}, 200)
			},
			indexDown() {
				this.exchange = true
				setTimeout(() => {
					this.activeIndex > 0 ? this.activeIndex-- : this.activeIndex = this.experience.length - 1
					this.exchange = false
				}, 200)
			},
			setIndex(index) {
				this.exchange = true
				setTimeout(() => {
					this.activeIndex = index
					this.exchange = false
				}, 200)
			},
			goTo(url) {
				window.open(url, '_blank')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gallery {
		position: relative;
		width: 90%;
		/* height: 600px; */
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
				.realization__logo {
					display: flex;
					align-items: center;
					flex-direction: column;
					@include hover {
						.logo__signet {
							box-shadow: 0 0 30px rgb($secondary, 0.5);
						}
					}
					.logo__signet {
						transition: 0.3s ease;
						border-radius: 40px;
						height: 130px;
						width: 130px;
						margin: 10px;
						
					}
					.logo__logotype {
						display: block;
						width: 250px;
						height: 50px;
						margin: 10px;
					}
				}
				.exp__nav {
					display: flex;
					justify-content: center;
					margin-top: 20px;
					height: 60px;
					.nav__img {
						display: block;
						height: 40px;
						margin: 0 10px;
						opacity: 1;
						transition: 0.2s ease;
						@include hover {
							transform: scale(1.2);
						}
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
						margin-bottom: 10px;
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
					.description__links {
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
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
		.carousel {
			position: absolute;
			bottom: -30px;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			.carousel__indicator {
				width: 16px;
				height: 16px;
				margin: 5px;
				border-radius: 50%;
				border: 3px solid $decorative;
				transition: 0.2s ease;
				&:active {
					transform: scale(0.8);
				}
				@include hover {
					background-color: $decorative;
				}
			}
			.carousel__indicator--active {
				background-color: $decorative;
				transform: scale(1.2);
			}
		}
	}
</style>