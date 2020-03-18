<template>
	<view class="comments">
		<view class="comments-title">
			影评{{oComments.total}}条
		</view>
		<block v-for="(item,index) in oComments.reviews" :key="index" v-if="index<10">
			<view class="comments-part">
				<view class="comments-author">
					<image :src="item.author.avatar"></image>
					<text>{{item.author.name}}</text>
					<view class="comments-rate">
						<text>看过</text>
						<uni-rate size="10" :value="item.rating.value" :max="item.rating.max"></uni-rate>
					</view>
				</view>
				<view class="comments-content">
					<view>{{item.title}}</view>
					<text>
						{{item.summary}}
					</text>
				</view>
				<view class="comments-count">
					<text>{{item.comments_count}}回复.{{item.useful_count}}有用.{{item.useless_count}}转发</text>
				</view>
			</view>
			
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			oComments:{
				type:Object
			}
		}
	}
</script>

<style lang="less">
// 影评
@color:gold;
	@primary:#323232;
	@default:#666666;
	@bgcolor:#ffffff;
	.comments{
		background-color:@bgcolor;
		padding:20upx;
		border-radius:10upx;
		.comments-title{
			font-size:36upx;
			font-weight: bold;
		}
		.comments-part{
			margin:40upx 0;
		}
		.comments-author{
			display:flex;
			align-items:center;
			image{
				width:44upx;
				height:44upx;
				border-radius:50%;
				margin-right:10upx;
			}
			color:#cccccc;
		}
		.comments-rate{
			display:flex;
			align-items:center;
			margin-left:10upx;
		}
		.comments-content{
			display:flex;
			flex-direction:column;
			view{
				font-size:32upx;
				font-weight:bold;
				margin:10upx 0;
				line-height:44upx;
			}
			text{
				text-align:justify;
				font-size:28upx;
				line-height:36upx;
				color:@default;
				margin:20upx 0;
			}
		}
		.comments-count{
			color:#cccccc;
		}
	}
</style>
