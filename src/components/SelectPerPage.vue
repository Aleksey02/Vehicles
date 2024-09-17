<template>
	<select name="page" id="page" class="select" v-model="select">
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">5</option>
		<option value="6">6</option>
		<option value="7">7</option>
		<option value="8">8</option>
		<option value="9">9</option>
	</select>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCarsStore } from '../store/cars';

const carsStore = useCarsStore();


const select = ref(carsStore.getPerPage);
watch(select, ()=>{
	carsStore.setPerPage(select.value);
})
</script>

<style scoped lang="scss">
@import '../variables.scss';
.select{
	padding: 9px 16px;
	border: 1px solid $textLineGray;
	border-radius: 8px;
	outline: none;
	cursor: pointer;
}
</style>