<template>
	<view class="summary">
		<view class="summary-title">简介</view>
		<view class="summary-content summary-content-short">
			{{oSubject.summary}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			oSubject:{
				type:Object
			}
		}
	}
</script>

<style lang="less">
	@color:gold;
	@primary:#323232;
	@default:#666666;
	@bgcolor:#ffffff;
.summary{
		.summary-title{
			font-size:32upx;
			font-weight:bold;
		}
		.summary-content{
			margin:40upx 0;
			width:100%;
			color:@default;
			font-size:28upx;
			text-align:justify;
			
		}
		.summary-content-short{
			text-overflow: ellipsis;
			overflow:hidden;
			line-height:40upx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
		}
	}
</style>
