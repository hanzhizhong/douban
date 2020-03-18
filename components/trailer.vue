<template>
	<view class="trailer">
		<view class="trailer-title">预告片</view>
		<scroll-view scroll-x="true" class="trailer-scroll">
			<block v-for="(item,index) in oSubject.trailers" :key="index">
				<view class="trailer-video">
					<video :src="item.resource_url" controls :poster="item.small" :title="item.title"></video>
					<view>{{item.title}}</view>
				</view>
			</block>
		</scroll-view>
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
// 预告片
@color:gold;
	@primary:#323232;
	@default:#666666;
	@bgcolor:#ffffff;
	.trailer{
		margin:40upx 0;
		.trailer-title{
			font-size:36upx;
			font-weight: bold;
		}
		.trailer-scroll{
			white-space: nowrap;
			margin-top:40upx;
		}
		.trailer-video{
			width:60%;
			display:inline-block;
			video{
				width:410upx;
				height:250upx;
			}
			view{
				line-height:44upx;
				color:@default;
			}
		}
		
	}
</style>
