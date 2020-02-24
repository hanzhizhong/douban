<template>
	<view class="search">
		<nav-bar :title="title" :color="color" :backgroundColor="backgroundColor">
			<view slot="left-action" class="left-action">
				<text class="iconfont icontubiao-" @click="goback"></text>
				<text class="iconfont iconhome" @click="goHome"></text>
			</view>
		</nav-bar>
		<view class="search-input">
			<text class="iconfont iconsearch"></text>
			<input class="uni-input" confirm-type="search" placeholder="搜索" />
		</view>
	</view>
</template>

<script>
	import navBar from "../../components/navBar/navBar.vue"
	export default {
		data() {
			return {
				title:"搜索",
				color:"#fff",
				backgroundColor:"#41B955"
			}
		},
		components:{
			navBar
		},
		methods: {
			goback(){
				console.log("back")
			},
			goHome(){
				console.log("home")
			}
			
		}
	}
</script>

<style lang="less" scoped>
.left-action{
	text{
		display:inline-block;
		font-size:32upx;
		margin-left:20upx;
	}
}
.search-input{
	background-color:#41B955;
	height:90upx;
	display:flex;
	justify-content:center;
	align-items:center;
	position:relative;
	text{
		position:absolute;
		color:#dedede;
		left:3%;
	}
	input{
		width:90%;
		padding-left:40upx;
		background-color:#fff;
		border-radius:8upx;
	}
}
</style>
