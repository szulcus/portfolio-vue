<template>
	<main class="main-wrapper">
		<div class="main__lines">
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
		</div>
		<div class="main__section">
			<h2 class="section__title">Dośw. zawodowe / Wolontariat</h2>
			<div class="section__content">
				<p class="content__paragraph">
					Stworzyłem strony internetowe dla firm:<br />
					<ul class="content__list">
						<li class="list__item">
							<a href="https://na-j.pl" v-rel>
								<span class="item__name">Na-J:</span>
								<span class="item__link">https://na-j.pl</span>
							</a>
						</li>
						<li class="list__item">
							<a href="https://cichy-dworek.pl" v-rel>
								<span class="item__name">GitHub:</span>
								<span class="item__link">https://cichy-dworek.pl</span>
							</a>
						</li>
					</ul>
				</p>
				<p class="content__paragraph">Od października 2020 do stycznia 2021 roku pracowałem w prywatnym domu opieki, gdzie pogłębiłem swoje umiejętności interpersonalne.</p>
				<p class="content__paragraph">Od grudnia 2019 roku regularnie udzielam korepetycji z matematyki oraz programowania. </p>
			</div>
		</div>
		<div class="main__section">
			<h2 class="section__title">Wykształcenie</h2>
			<div class="section__content">
				<p class="content__paragraph">Jestem absolwentem V Liceum Ogólnokształcącego im. Jakuba Wejhera w Wejherowie, gdzie rozwijałem się jako uczeń o profilu ekonomicznio-informatycznym.</p>
				<p class="content__paragraph">Obecnie studiuję na kierunku Informatyka (Front-end Developer) na WSB w Gdyni.</p>
			</div>
		</div>
		<div class="main__section">
			<h2 class="section__title">O mnie</h2>
			<div class="section__content">
				<p class="content__paragraph">
					<ul class="content__list">
						<li class="list__item">
							<a href="https://szulcus.pl" v-rel>
								<span class="item__name">Portfolio:</span>
								<span class="item__link">https://szulcus.pl</span>
							</a>
						</li>
						<li class="list__item">
							<a href="https://github.com/jakub104" v-rel>
								<span class="item__name">GitHub:</span>
								<span class="item__link">https://github.com/jakub104</span>
							</a>
						</li>
						<li class="list__item">
							<a href="https://www.linkedin.com/in/szulcus" v-rel>
								<span class="item__name">LinkedIn:</span>
								<span class="item__link">https://www.linkedin.com/in/szulcus</span>
							</a>
						</li>
						<li class="list__item">
							<a href="https://www.linkedin.com/in/szulcus" v-rel>
								<span class="item__name">Email:</span>
								<span class="item__link" href="mailto:jakubs929@gmail.com" v-rel>jakubs929@gmail.com</span>
							</a>
						</li>
					</ul>
				</p>
				<p class="content__paragraph">Odkąd wszedłem w świat programowania (3-4 lata temu), stało się ono moją główną pasją w życiu.</p>
				<p class="content__paragraph">Lubię zwierzęta i staram się żyć w miarę możliwości proekologiczie, stąd też moja druga pasja - gotowanie. Jestem bardzo ciekawy świata. Staram się czytać książki i ćwiczyć, choć nie zawsze mi to wychodzi.</p>
				<p class="content__paragraph">Lubię pomagać innym. Obecnie znajduję się w bazie potencjalnych dawców szpiku oraz regularnie oddaję krew. Chętnie rozmawiam z ludźmi i wymieniam się poglądami.</p>
			</div>
		</div>
		<div class="main__lines">
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
		</div>
	</main>
</template>

<script>
	export default {
		name: "Main",
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		flex: 1;
		background-color: white;
		color: $bg;
		padding: 0 30px;
		.main__lines {
			display: flex;
			margin: 20px 0;
			.line {
				height: 10px;
				width: 20px;
				background-color: $bg;
				margin: 0 5px;
				&:nth-child(2) {
					background-color: $secondary;
				}
				&:nth-child(3) {
					background-color: $decorative;
				}
			}
		}
		.main__section {
			.section__title {
				display: flex;
				align-items: center;
				text-transform: uppercase;
				font-size: 22px;
				margin: 10px 0;
				&::before,
				&::after {
					content: '';
					display: inline-block;
					width: 6px;
					height: 4px;
				}
				&::before {
					background-color: $decorative;
					box-shadow: 8px 0 0 $secondary, 16px 0 0 $bg;
					margin-right: 20px;
				}
				&::after {
					background-color: $bg;
					box-shadow: 8px 0 0 $secondary, 16px 0 0 $decorative;
					margin-left: 6px;
				}
			}
			.section__content {
				.content__list {
					list-style-type: none;
					.list__item a {
						transform-origin: right;
						@include hover {
							.item__name {
								transform: scale(1.1);
							}
							.item__link {
								color: $bg;
							}
						}
						.item__name {
							display: inline-block;
							color: $bg;
							width: 100px;
							transition: 0.2s ease;
							/* font-weight: bold; */
						}
						.item__link {
							color: $secondary;
							transition: 0.2s ease;
						}
					}
				}
				.content__paragraph {
					margin: 20px 0;
					transition: 0.1s ease;
				}
			}
		}
	}
</style>