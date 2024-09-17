<template>
	<div class="input">
		<input type="text" placeholder="Search VIN">
		<img src="../assets/main/search.svg" alt="search icon">
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '../variables.scss';
.input{
	display: flex;
	align-items: center;
	gap: 12px;
	width: 354px;
	padding: 9px 18px 9px 16px;
	border: 1px solid $textLineGray;
	border-radius: 8px;
	& input{
		color: $textDarkGrey;
		font-size: 16px;
		line-height: 22px;
		width: 100%;
		border: none;
		outline: none;
		background-color: transparent;
		&::placeholder{
			color: $textDarkGrey;
			font-size: 16px;
			line-height: 22px;
		}
	}
	& img{
		display: block;
		cursor: pointer;
	}
}
</style>