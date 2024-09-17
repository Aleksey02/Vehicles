<template>
	<button class="btn">
		<img src="../assets/main/plus.svg" alt="plus icon">
		<span>Add Vechicle</span>
	</button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '../variables.scss';
.btn {
	padding: 9px 18px;
	box-shadow: 0px 8px 24px 0px rgba(217, 14, 50, 0.12);
	background: $primaryRed;
	border-radius: 10px;
	margin-left: auto;
	display: flex;
	align-items: center;
	gap: 16px;
	transition: background 0.3s ease;
	&:hover{
		background: rgba(217, 14, 50, 0.85);
	}
	& span {
		color: $textWhite;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
}
</style>