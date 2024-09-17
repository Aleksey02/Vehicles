<template>
	<div class="app">
		<Aside />
		<Content />
	</div>
</template>

<script setup lang="ts">
import Aside from './components/Aside.vue';
import Content from './components/Content.vue';
</script>


<style scoped lang="scss">
.app {
	display: flex;
	width: 1440px;
	margin: 0 auto;
	border-radius: 20px;
	overflow: hidden;
}
</style>
