<template>
	<view class="rank-ad">
		<view class="rank-title">{{title}}</view>
		<view class="rank-film">
			<view>1</view>
			<view>2</view>
			<view>3</view>
			<text>+281</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:["title"],
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.rank-ad{
	width:100%;
	height:320upx;
	background-color:#3F536E;
	border-radius:10upx;
	margin:20upx 0;
}
.rank-title{
	font-size:42upx;
	font-weight:bold;
	color:#ffffff;
}
.rank-film{
	display:flex;
	justify-content: flex-start;
	view{
		width:100upx;
		height:120upx;
		margin-left:-20upx;
		z-index:3;
		&:nth-of-type(1){
			margin-left:0;
			background-color:#DD524D;
		}
		&:nth-of-type(2){
			background-color:#007AFF;
			z-index:2;
		}
		&:nth-of-type(3){
			background-color:#F0AD4E;
			z-index:1;
		}
	}
	text{
		font-size:36upx;
	}
}
</style>
