<template>
	<div class="content">
		<Header />
		<Main />
	</div>
</template>


<script setup lang="ts">
import Header from './Header.vue';
import Main from './Main.vue';
</script>


<style scoped lang="scss">
.content {
	flex-grow: 1;
}
</style>
