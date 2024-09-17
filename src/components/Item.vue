<template>
	<div class="item">
		<img :src="imageUrl" alt="car image" class="item__img">
		<h3 class="item__title">{{ title }}</h3>
		<p class="item__desc">{{ vin }}</p>
		<div class="item__info">
			<div class="item__check" :class="{active: uploadsCheck}">
				<img src="../assets/main/check.svg" alt="check icon">
				<span>{{ uploads }}/30</span>
			</div>
			<div class="item__days">{{ time }}</div>
		</div>
		<button class="item__btn">
			<img src="../assets/main/more_horizontal.svg" alt="more dots">
		</button>
	</div>
</template>

<script setup lang="ts">
import { Car } from '../store/cars';
import { computed } from 'vue';

const props = defineProps<{ car: Car }>();
const title = computed(()=>{
	if(props.car?.vehicle_name && props.car?.vehicle_name!='undefined undefined'){
		return props.car?.vehicle_name
	}
	return 'No name'
});
const vin = computed(()=>props.car.vin);
const uploads = computed(()=>props.car?.uploads);
const uploadsCheck = computed(()=>props.car?.uploads==30);
const time = computed(()=>{
	const createdAt = props.car?.created_at;
	const createdDate = new Date(createdAt*1000);

	const now = new Date();
	const diffInMs = now.getTime() - createdDate.getTime();
  	const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
	if(diffInDays>365){
		return `${Math.floor(diffInDays/365)} years left`
	}else if(diffInDays>30){
		return `${Math.floor(diffInDays/30)} months left`
	}else{
		return `${diffInDays} days left`
	}
});
const imageUrl = computed(()=>props.car?.photo?.url ?? '/default_img.jpg');
</script>

<style scoped lang="scss">
@import '../variables.scss';
.item{
	border-radius: 10px;
	background: $primaryLightGrey;
	padding: 40px 24px 16px;
	width: 354px;
	position: relative;
	&__img{
		display: block;
		margin: 0 auto;
		margin-bottom: 24px;
		width: 260px;
		height: 135px;

	}
	&__title{
		color: $textBlack;
		font-size: 20px;
		font-weight: 700;
		margin-bottom: 12px;
	}
	&__desc{
		color: $textGrey;
		font-size: 15px;
		font-weight: 500;
		margin-bottom: 18px;
	}
	&__info{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 18px;
		border-top: 1px solid $textLineGray;
	}
	&__check{
		padding: 4px 14px;
		border-radius: 6px;
		background: $secondaryGrey;
		display: flex;
		align-items: center;
		gap: 8px;
		& img{
			display: none;
		}
		& span{
			color: $textDarkGrey;
			font-size: 15px;
			font-weight: 700;
			line-height: 22px;
		}
		&.active{
			padding: 4px 12px;
			background: rgb(228, 245, 221);
			& img{
				display: block;
			}
			& span{
				color: $secondaryGreen;
			}
		}
	}
	&__days{
		color: $textGrey;
		font-size: 15px;
		font-weight: 500;
	}
	&__btn{
		position: absolute;
		top: 20px;
		right: 20px;
		background-color: transparent;
	}
}
</style>