<template>
	<header class="header">
		<div class="header__left">
			<h2 class="header__title">Vechicles</h2>
			<div class="header__count">256</div>
		</div>
		<div class="header__right">
			<button class="header__btn">+</button>
			<div class="header__profile">
				<img src="../assets/header/profile.png" alt="profile image">
				<span>John Doe</span>
			</div>
			<div class="header__select">
				<img src="../assets/header/lang_uk.svg" alt="flag UK">
				<select name="lang" id="lang">
					<option value="en">En</option>
					<option value="fr">Fr</option>
					<option value="Gr">Gr</option>
				</select>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '../variables.scss';
.header {
	padding: 30px 30px 25px;
	background: rgb(255, 255, 255);
	border-bottom: 1px solid $textWhite;
	display: flex;
	align-items: center;
	justify-content: space-between;

	&__left {
		display: flex;
		align-items: center;
		gap: 18px;
	}

	&__title {
		color: $textBlack;
		font-size: 32px;
		font-weight: 700;
	}

	&__count {
		padding: 4px 14px;
		color: $textDarkGrey;
		font-size: 15px;
		font-weight: 700;
		line-height: 22px;
		border-radius: 6px;
		background: $primaryLightGrey;
	}

	&__right {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 32px;
	}

	&__btn {
		width: 42px;
		height: 42px;
		font-size: 24px;
		border: 1px solid $secondaryLightRed;
		border-radius: 6px;
		color: $secondaryLightRed;
		background-color: transparent;
		transition: border 0.3s ease-in-out;
		&:hover {
			border: 1px solid $primaryRed;
		}
	}

	&__profile {
		padding-left: 8px;
		display: flex;
		align-items: center;
		gap: 14px;

		& img {
			display: block;
			border-radius: 50%;
		}

		& span {
			color: $textBlack;
			font-size: 15px;
			font-weight: 500;
		}
	}

	&__select {
		display: flex;
		align-items: center;
		gap: 15px;
		cursor: pointer;
		& select {
			cursor: pointer;
			border: none;
			outline: none;
			padding-right: 8px;
		}
	}
}
</style>