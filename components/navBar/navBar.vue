<template>
	<view class="nav-bar">
		<view class="navigation-status" v-bind:style="{backgroundColor:backgroundColor,color:color}">
			<view class="bar-status"></view>
			<view class="nav-status">
				<slot name="left-action" ></slot>
				<view class="nav-title">{{title}}</view>
				<slot name="right-action"></slot>
			</view>
		</view>
		<view class="navigation-state"></view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:["title","color","backgroundColor"]
	}
</script>

<style lang="less" scoped>
	.navigation-status{
		height:128upx;
		background-color:#41B955;
		position:fixed;
		width:100%;
	}
	.navigation-state{
		height:128upx;
	}
	.bar-status{
		height:40upx;
	}
	.nav-status{
		height:88upx;
		width:100%;
		position:relative;
		display:flex;
		justify-content: space-between;
		align-items:center;
	}
	.nav-title{
		position:absolute;
		left:50%;
		top:50%;
		transform:translate(-50%,-50%);
		font-size:32upx;
	}
</style>
