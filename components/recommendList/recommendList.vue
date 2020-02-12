<template>
	<view class="recommend">
		<view class="recommend-logo">
			top250
		</view>
		<view class="recommend-film">
			<text>1.肖申克的救赎 9.7</text>
			<text>1.肖申克的救赎 9.7</text>
			<text>1.肖申克的救赎 9.7</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.recommend{
	margin:20upx 0;
	border:1upx solid #dedede;
	width:100%;
	box-sizing: border-box;
	height:200upx;
	display:flex;
	border-radius:10upx;
}
.recommend-logo{
	flex:2;
	height:200upx;
	background-color:#2C405A;
	border-radius:10upx;
	margin-right:30upx;
}
.recommend-film{
	flex:5;
	display:flex;
	flex-direction:column;
	justify-content:space-around;
	
}

</style>
