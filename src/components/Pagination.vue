<template>
	<div class="pagination">
		<button class="pagination__btn" @click="prevPage">
			<img src="../assets/pagination/arrow_left.svg" alt="arrow left">
		</button>
		<div class="pagination__number">{{ carsStore.page }}</div>
		<p class="pagination__of">of</p>
		<div class="pagination__number">{{ totalPage }}</div>
		<button class="pagination__btn" @click="nextPage">
			<img src="../assets/pagination/arrow_right.svg" alt="arrow right">
		</button>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCarsStore } from '../store/cars';

const carsStore = useCarsStore();
const totalPage = computed(()=>carsStore.getCountCars/carsStore.getPerPage);
const nextPage = ()=>{
	carsStore.nextPage();
}
const prevPage = ()=>{
	carsStore.prevPage();
}
</script>

<style scoped lang="scss">
@import '../variables.scss';
.pagination{
	display: flex;
	align-items: center;
	gap: 12px;
	&__btn{
		background-color: transparent;
	}
	&__number{
		color: $textDarkGrey;
		font-size: 15px;
		width: 32px;
		height: 32px;
		border: 1px solid $textLineGray;
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		&:last-child{
			color: $textLightGrey;
		}
	}
}
</style>