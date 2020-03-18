<template>
	<view class="avatars">
		<view class="avatars-title">影人</view>
		<scroll-view scroll-x="true" show-scrollbar="true" class="avatars-scroll">
			<block v-for="(item,index) in oSubject.casts" :key="index">
				<view class="avatars-album">
					<image :src="item.avatars.small" mode="aspectFill"></image>
					<view class="avatars-name">{{item.name||'-'}}</view>
					<view class="avatars-name">{{item.name_en||'-'}}</view>
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
// 影人信息
@color:gold;
	@primary:#323232;
	@default:#666666;
	@bgcolor:#ffffff;
	.avatars{
		.avatars-title{
			font-size:36upx;
			font-weight: bold;
		}
		.avatars-scroll{
			white-space: nowrap;
		}
		.avatars-album{
			width:30%;
			margin:40upx 0;
			display: inline-block;
			image{
				width:200upx;
				height:280upx;
				border-radius:8upx;
			}
		}
		.avatars-name{
			font-size:24upx;
			font-size:@default;
			line-height:32upx;
		}
		
	}
</style>
