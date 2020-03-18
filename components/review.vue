<template>
	<view class="reviews">
		<view class="reviews-title">短评</view>
		<block v-for="(item,index) in oShortReviews.comments" :key="index" v-if="index<4">
			<view class="reviews-list">
				<view class="reviews-author">
					<image :src="item.author.avatar"></image>
					<view class="reviews-name-rate">
						<view class="reviews-name">{{item.author.name}}</view>
						<view class="reviews-rate">
							<view>
								<uni-rate size="10" :max="item.rating.max" :value="item.rating.value"></uni-rate>
							</view>
							<text>{{item.created_at}}</text>
						</view>
					</view>
				</view>
				<view class="reviews-content">
					{{item.content}}
				</view>
				<view class="reviews-useful">
					<text class="iconfont icondianzan"></text>{{item.useful_count}}
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
			oShortReviews:{
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
//短评
	.reviews{
		background-color:@bgcolor;
		border-radius:10upx;
		padding:20upx;
		.reviews-title{
			font-size:36upx;
			font-weight: bold;
		}
		.reviews-list{
			border-bottom:1px solid #dedede;
			padding:40upx 0;
			&:last-of-type{
				border:none;
			}
		}
		.reviews-author{
			display:flex;
			align-items: center;
			image{
				width:68upx;
				height:68upx;
				border-radius:50%;
			}
		}
		.reviews-name-rate{
			display:flex;
			flex-direction: column;
			justify-content:space-between;
			margin-left:20upx;
		}
		.reviews-name{
			font-size:30upx;
			font-weight:bold;
			height:44upx;
		}
		.reviews-rate{
			display:flex;
			align-items: center;
			text{
				margin-left:20upx;
				color:#cccccc;
			}
		}
		.reviews-content{
			font-size:28upx;
			color:@default;
			text-align:justify;
			line-height:36upx;
			margin:20upx 0;
		}
		.reviews-useful{
			text{
				color:#cccccc;
			}
		}
	}
</style>
