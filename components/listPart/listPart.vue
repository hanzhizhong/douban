<template>
	<view class="part">
		<view class="part-title">
			{{title}} 
		</view>
		<view v-if="subjects.length>0" class="part-film">
			<block v-for="(item,index) in subjects" :key="index">
				<view class="film">
					<image :src="item.images.small" mode="aspectFill"></image>
					<view class="film-title">{{item.title}}</view>
					<view class="film-rate">
						<uni-rate max="5" size="10" :value="item.rating.average"></uni-rate>
						<text>{{item.rating.average}}</text>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import {uniRate} from "@dcloudio/uni-ui"
	export default {
		
		data() {
			return {
				
			} 
		},
		props:["title","subjects"],
		components:{
			uniRate
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	.part{
		padding:0 20upx;
	}
	.part-title{
		font-size:28upx;
		font-weight:bold;
		color:#323232;
		line-height:80upx;
	}
	.part-film{
		display:flex;
		justify-content:flex-start;
		flex-wrap:wrap;
		
		.film{
			width:25%;
			padding:10upx;
			height:240upx;
			image{
				width:100%;
				height:100%;
				border-radius:8upx;
			}
		}
	}
	.film-title{
		font-weight:bold;
		line-height:32upx;
		width:100%;
		text-overflow:ellipsis;
		overflow:hidden;
		white-space: nowrap;
	}
	.film-rate{
		display:flex;
		justify-content: flex-start;
		align-items:center;
		height:30upx;
		font-size:20upx;
		text{
			margin-left:20upx;
			padding-bottom:8upx;
		}
	}
</style>
