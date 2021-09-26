<template>
	<aside class="aside-wrapper">
		<div class="aside__preview">
			<h1 class="preview__title">
				<span class="title__letter">J</span>akub <span class="title__letter">S</span>chulz
			</h1>
			<div class="preview__avatar">
				<img class="avatar__img" :src="avatar_jpg" alt="">
			</div>
			<div class="preview__website">
				szulcus<span class="website__extension">.pl</span>
			</div>
		</div>
		<a class="aside__phone-number" href="tel:+48575744285" vrel>
			<fa-icon class="phone-number__icon" icon="phone" />
			57 57 44 285
		</a>
		<div class="aside__skills">
			<h2 class="skills__title">Umiejętności</h2>
			<div class="skills__content">
				<div class="content__icon">
					<fa-icon icon="globe" />
				</div>
				<h3 class="content__title">Tworzenie stron WWW</h3>
				<ul class="content__list">
					<li class="list__item">portfolio</li>
					<li class="list__item">wizytówka</li>
					<li class="list__item">blog</li>
					<li class="list__item">aplikacja</li>
				</ul>
			</div>
			<div class="skills__content">
				<div class="content__icon">
					<fa-icon icon="laptop-code" />
				</div>
				<h3 class="content__title">Obsługa komputera</h3>
				<ul class="content__list">
					<li class="list__item">szybka nauka</li>
					<li class="list__item">kreatywne rozwiązania</li>
					<li class="list__item">czystość kodu</li>
					<li class="list__item">obsługa Office 365</li>
				</ul>
			</div>
			<div class="skills__content">
				<div class="content__icon">
					<fa-icon icon="users" />
				</div>
				<h3 class="content__title">Praca z ludźmi</h3>
				<ul class="content__list">
					<li class="list__item">cieprpliwość</li>
					<li class="list__item">życzliwość</li>
					<li class="list__item">komunikacja</li>
					<li class="list__item">empatia</li>
				</ul>
			</div>
		</div>
	</aside>
</template>

<script>
	import avatar_jpg from '@/Assets/avatar/avatar.jpg'
	import avatar_webp from '@/Assets/avatar/avatar.webp'
	export default {
		name: "Aside",
		data() {
			return {
				avatar_jpg,
				avatar_webp
			}
		}
	}
</script>

<style lang="scss" scoped>
	.aside-wrapper {
		width: 250px;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		background-color: #87CEEB;
		text-align: center;
		.aside__preview {
			width: 100%;
			height: 335px;
			background-color: $bg;
			padding: 5px 0;
			clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
			.preview__title {
				font-size: 32px;
				margin: 0;
				padding: 20px 0;
				.title__letter {
					color: $decorative;
				}
			}
			.preview__avatar {
				.avatar__img {
					width: 165px;
					height: 165px;
					border-radius: 50%;
					object-fit: cover;
					box-shadow: 0 0 20px $secondary;
				}
			}
			.preview__website {
				margin: 20px 0;
				font-weight: bold;
				font-size: 20px;
				letter-spacing: 0.5px;
				.website__extension {
					color: $decorative;
				}
			}
		}
		.aside__phone-number {
			margin: 10px 0;
			color: $bg;
			font-weight: bold;
			transition: 0.2s ease;
			@include hover {
				letter-spacing: 1px;
				.phone-number__icon {
					transform: scale(1.2) rotate(-5deg);
					/* color: $decorative; */
				}
			}
			.phone-number__icon {
				margin-right: 5px;
				transition: 0.2s ease;
				font-size: 25px;
			}
		}
		.aside__skills {
			display: flex;
			flex-direction: column;
			.skills__title {
				margin: 30px 0 10px 0;
				font-size: 22px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: $bg;
			}
			.skills__content {
				display: flex;
				align-items: center;
				flex-direction: column;
				color: $bg;
				margin: 20px 0;
				.content__icon {
					width: 45px;
					height: 45px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: $bg;
					border-radius: 50%;
					color: $primary;
					font-size: 20px;
					box-shadow: 0 0 15px rgb($bg, 0.5);
				}
				.content__title {
					font-size: 18px;
					margin: 15px 0;
				}
				.content__list {
					font-size: 16px;
					list-style-type: none;
					.list__item {
						line-height: 20px;
						&::before {
							content: '- ';
						}
					}
				}
			}
		}
	}
</style>