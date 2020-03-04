<template>
	<view class="part">
		<view class="part-title">
			{{title}} 
		</view>
		<view v-if="subjects.length>0" class="part-film">
			<block v-for="(item,index) in subjects" :key="index">
				<view class="film" @tap="getMovieIntroduce(item)">
					<image :src="item.images.small" mode="aspectFill"></image>
					<view class="film-title">{{item.title}}</view>
					<view class="film-rate">
						<uni-rate class="film-star" max="5" size="10" :value="item.rating.average" disabled="true"></uni-rate>
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
			getMovieIntroduce(item){
				let [id,title]=[item.id,item.title]
				uni.navigateTo({
					url:`/pages/detail/detail?id=${id}&title=${title}`
				})
			}
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
		flex-wrap:wrap;
		.film{
			width:25%;
			margin:10upx 0;
			display:flex;
			flex-direction: column;
			align-items: center;
			image{
				width:160upx;
				height:220upx;
				border-radius:5upx;
			}
		}
	}
	.film-title{
		font-weight:bold;
		line-height:44upx;
		width:160upx;
		text-overflow:ellipsis;
		overflow:hidden;
		white-space: nowrap;
	}
	.film-rate{
		display:flex;
		justify-content: flex-start;
		align-items:center;
		width:160upx;
		height:30upx;
		font-size:20upx;
		text{
			margin-left:20upx;
			padding-bottom:8upx;
		}
	}
</style>
