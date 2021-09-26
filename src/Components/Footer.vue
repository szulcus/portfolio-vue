<template>
	<footer class="footer-wrapper">
		<div class="contact">
			<fragment v-if="!infoActive">
				<div class="contact-items">
					<a class="contact__item" href="https://m.me/szulcus" aria-label="Messenger" v-rel>
						<fa-icon class="item__icon" :icon="{ prefix: 'fab', iconName: 'facebook-messenger' }" />
					</a>
					<a class="contact__item" href="https://www.linkedin.com/in/szulcus/" aria-label="LinkedIn" v-rel>
						<fa-icon class="item__icon" :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
					</a>
					<a class="contact__item" href="https://github.com/jakub104" aria-label="GitHub" v-rel>
						<fa-icon class="item__icon" :icon="{ prefix: 'fab', iconName: 'github' }" />
					</a>
					<a class="contact__item" href="https://www.npmjs.com/~szulcus" aria-label="NPM" v-rel>
						<fa-icon class="item__icon" :icon="{ prefix: 'fab', iconName: 'npm' }" />
					</a>
				</div>
				<hr class="contact-separator" />
				<div class="phone-number">
					<a class="contact__item" href="tel:+48575744285" v-rel>
						<fa-icon class="item__icon" icon="phone" />
						57 57 44 285
					</a>
				</div>
			</fragment>
			<fragment v-else>
				<div class="info-wrapper">
					Icons made by
					<a class="flaticon-link" href="https://www.freepik.com" title="Freepik" v-rel>Freepik</a>,
					<a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a>,
					<a class="flaticon-link" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect" v-rel>Pixel perfect</a> and
					<a class="flaticon-link" href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs" v-rel>DinosoftLabs</a> from
					<a class="flaticon-link" href="https://www.flaticon.com/" title="Flaticon" v-rel>www.flaticon.com</a>
				</div>
			</fragment>
		</div>
		<div class="copyright">
			<span class="wrapper__letter">S</span>zulcuś 2020 &copy;
			<div :class="['info-icon', {'info-icon--active': infoActive}]" @click="infoActive = !infoActive">
				<fa-icon icon="info-circle" />
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "Footer",
		data() {
			return {
				infoActive: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footer-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: $bg-dark;
		padding: 10px;
		margin-top: 50px;
		align-items: center;
		text-align: center;
		font-size: 16px;
		border-top: 3px solid $decorative;
		.contact {
			height: 80px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 10px 0;
			flex-direction: column;
			@media (min-width: 600px) {
				height: 40px;
				flex-direction: row;
			}
			.contact-items {
				width: 250px;
				margin: 5px 0;
				@media (min-width: 600px) {
					text-align: right;
				}
				.contact__item {
					margin: 10px;
					@include hover {
						.item__icon {
							transform: scale(1.2);
							color: $decorative;
						}
					}
					.item__icon {
						transition: 0.2s ease;
						font-size: 25px;
					}
				}
			}
			.contact-separator {
				display: none;
				margin: 0 10px;
				height: 30px;
				border: none;
				border-right: 3px solid $decorative;
				@media (min-width: 600px) {
					display: block;
				}
			}
			.phone-number {
				width: 250px;
				margin: 5px 0;
				font-weight: bold;
				@media (min-width: 600px) {
					text-align: left;
				}
				.contact__item {
					margin: 10px;
					font-size: 20px;
					transition: 0.2s ease;
					@include hover {
						letter-spacing: 1px;
						.item__icon {
							color: $decorative;
							transform: scale(1.2) rotate(-5deg);
						}
					}
					.item__icon {
						transition: 0.2s ease;
						font-size: 25px;
						margin-right: 5px;
					}
				}
			}
			.info-wrapper {
				padding: 10px 0;
				font-size: 16px;
				animation: opacity 0.3s ease;
				.flaticon-link {
					color: $decorative;
					@include hover {
						transition: 0.2s ease;
						opacity: 0.7;
					}
				}
			}
		}
		.copyright {
			font-size: 16px;
			margin-top: 10px;
			font-weight: bold;
			.wrapper__letter {
				color: $decorative;
			}
			.info-icon {
				font-size: 16px;
				display: inline-block;
				padding: 0 5px;
				transition: 0.2s ease;
				@include hover {
					opacity: 0.7;
				}
			}
			.info-icon--active {
				transform: scale(1.2);
				color: $decorative;
			}
		}
	}
</style>