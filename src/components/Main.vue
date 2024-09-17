<template>
	<main class="main">
		<div class="main__options">
			<SearchInput />
			<div class="main__select">
				<p>Select vehicles per page:</p>
				<SelectPerPage />
			</div>
			<BtnAdd />
		</div>
		<div class="main__box">
			<p class="main__loading" v-if="carsStore.getLoading">Loading...</p>
			<p class="main__empty" v-else-if="carsStore.getCars.length==0">Список пуст</p>
			<Item v-for="car in carsStore.getCars" :key="car.id" :car="car" v-else/>
		</div>
		<div class="main__page">
			<p>Showing {{ showing }} out of {{ carsStore.getCountCars }} </p>
			<Pagination />
		</div>
	</main>
</template>

<script setup lang="ts">
import BtnAdd from './BtnAdd.vue';
import SearchInput from './SearchInput.vue';
import SelectPerPage from './SelectPerPage.vue';
import Item from './Item.vue';
import Pagination from './Pagination.vue';
import { useCarsStore } from '../store/cars';
import { computed } from 'vue';

const carsStore = useCarsStore();
carsStore.fetchCars();
const showing = computed(()=>carsStore.getPerPage*carsStore.getPage)
</script>

<style scoped lang="scss">
@import '../variables.scss';
.main{
	padding: 36px 32px 50px 30px;
	background-color: $textWhite;
	&__options{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 32px;
		margin-bottom: 40px;
	}
	&__select{
		display: flex;
		align-items: center;
		gap: 16px;
		& p{
			color: $textBlack;
			font-size: 16px;
		}
	}
	&__box{
		display: flex;
		gap: 30px;
		flex-wrap: wrap;
		margin-bottom: 32px;
	}
	&__page{
		display: flex;
		align-items: center;
		justify-content: space-between;
		& p{
			color: $textDarkGrey;
			font-size: 16px;
		}
	}
	&__loading,
	&__empty{
		margin: 0 auto;
		font-size: 36px;
	}
}
</style>