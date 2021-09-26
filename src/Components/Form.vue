<template>
	<div class="form-wrapper">
		<form class="form" action="https://formsubmit.co/jakubs929@gmail.com" method="POST" @submit="sendMail">
			<div class="field">
				<input
					class="field__input"
					v-model="name"
					type="text"
					name="name"
					placeholder=" "
					pattern="^.{3,}$"
					required
				/>
				<label class="field__label">Imię</label>
			</div>
			<div class="field">
				<input
					class="field__input"
					v-model="email"
					type="email"
					name="email"
					placeholder=" "
					pattern="^\S+@\S+\.\S+$"
					required
				/>
				<label class="field__label">Email</label>
			</div>
			<div class="field">
				<textarea
					class="field__textarea"
					v-model="message"
					type="text"
					name="message"
					placeholder=" "
					required
				/>
				<label class="field__label">Wiadomość</label>
			</div>
			<input type="hidden" name="_next" value="https://szulcus.pl/#/thank-you">
			<input type="text" name="_honey" style="display:none">
			<input type="hidden" name="_subject" value="Nowa wiadomość! (portfolio)">
			<input type="hidden" name="_captcha" value="false">
			<div class="field">
				<button class="field__button" type="submit">Wyślij <fa-icon icon="envelope" /></button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: "Form",
		data() {
			return {
				name: '',
				email: '',
				message: ''
			}
		},
		methods: {
			sendMail() {
				console.log(`Wysyłam... name: ${this.name}, email: ${this.email}, message: ${this.message}`);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.form-wrapper {
		position: relative;
		width: 90%;
		max-width: 700px;
		.form {
			width: 100%;
			height: 100%;
			display: grid;
			grid-gap: 10px;
			grid-template-columns: repeat(2, 1fr);
			clip-path: polygon(0 3%, 100% 0, 100% 97%, 0 100%);
			padding: 20px;
			border: 3px solid $decorative;
			@media (min-width: 600px) {
				grid-gap: 20px;
				padding: 30px;
			}
			.field {
				position: relative;
				&:nth-child(3),
				&:last-child {
					grid-column: 1 / 3;
				}
				.field__input {
					width: 100%;
					background-color: transparent;
					padding: 10px;
					border-radius: 10px;
					outline: none;
					border: 3px solid $decorative;
					transition: 0.2s ease;
					font-size: 16px;
				}
				.field__textarea {
					width: 100%;
					height: 200px;
					padding: 10px;
					resize: none;
					background-color: transparent;
					border-radius: 10px;
					outline: none;
					border: 3px solid $decorative;
					transition: 0.2s ease;
					font-size: 16px;
				}
				.field__input,
				.field__textarea {
					&:-webkit-autofill,
					&:-webkit-autofill:hover,
					&:-webkit-autofill:focus {
						-webkit-text-fill-color: $primary;
						-webkit-box-shadow: 0 0 0px 1000px $bg inset;
					}
					&:focus,
					&:not(:placeholder-shown) {
						border: 3px solid $decorative;
						~ .field__label {
							top: -10px;
							left: 10px;
							font-size: 14px;
							color: $primary;
							z-index: 1;
						}
					}
					&:valid {
						~ .field__label {
							color: $valid;
						}
					}
				}
				.field__label {
					position: absolute;
					top: 13px;
					left: 10px;
					background-color: $bg;
					font-size: 16px;
					padding: 0 5px;
					color: $secondary;
					transition: 0.2s ease;
					z-index: -1;
				}
				.field__button {
					width: 100%;
					font-size: 16px;
					padding: 10px;
					border: 3px solid $decorative;
					border-radius: 10px;
					background-color: transparent;
					text-transform: uppercase;
					font-weight: bold;
					letter-spacing: 1px;
					transition: 0.2s ease;
					@include hover {
						background-color: $decorative;
						color: $bg;
					}
				}
			}
		}
	}
</style>