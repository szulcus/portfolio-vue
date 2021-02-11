<template>
	<footer class="footer-wrapper">
		<div class="contact">
			<div class="contact-items">
				<a class="contact__item" href="https://m.me/szulcus" aria-label="Messenger" v-rel>
					<fa-icon class="item__icon" :icon="{ prefix: 'fab', iconName: 'facebook-messenger' }" />
				</a>
				<a class="contact__item" href="https://www.linkedin.com/in/szulcus/" aria-label="LinkedIn" v-rel>
					<fa-icon class="item__icon" :icon="{ prefix: 'fab', iconName: 'lindedin' }" />
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
		</div>
		<div class="copyright">
			<span class="wrapper__letter">S</span>zulcuś 2020 &copy;
		</div>
	</footer>
</template>

<script>
	export default {
		name: "Footer"
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
		font-weight: bold;
		text-align: center;
		font-size: 16px;
		border-top: 3px solid $decorative;
		.contact {
			display: flex;
			align-items: center;
			margin: 10px 0;
			flex-direction: column;
			@media (min-width: 600px) {
				flex-direction: row;
			}
			.contact-items {
				width: 250px;
				margin-bottom: 15px;
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
				margin-bottom: 15px;
				@media (min-width: 600px) {
					text-align: left;
				}
				.contact__item {
					margin: 10px;
					font-size: 20px;
					transition: 0.2s ease;
					@include hover {
						letter-spacing: 1px;
						/* transform: scale(1.1); */
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
		}
		.copyright {
			font-size: 16px;
			.wrapper__letter {
				color: $decorative;
			}
		}
	}
</style>