<template>
	<view class="rank-ad" >
		<image class="bg-pic" :src="bg" mode="aspectFill"></image>
		<view class="rank-title">{{title}}</view>
		<view class="rank-film">
			<template v-if="title.includes('新片')"> 
				<block v-for="(item,index) in moviesData" :key="index" v-if="index<3">
					<view><image :src="item.images.small" mode="aspectFill"></image></view>
				</block>
			</template>
			<template v-else>
				<block v-for="(item,index) in moviesData" :key="index" v-if="index<3">
					<view><image :src="item.subject.images.small" mode="aspectFill"></image></view>
				</block>
			</template>
			
			<text>+{{moviesData.length}}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:["title","moviesData","bg"],
		
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.rank-ad{
	width:100%;
	height:360upx;
	background-color:#000000;
	border-radius:10upx;
	margin:20upx 0;
	position:relative;
	overflow:hidden;
}
.bg-pic{
	width:100%;
	height:100%;
	position:absolute;
	left:0;
	top:0;
	opacity:0.5;
}
.rank-title{
	position:absolute;
	left:40upx;
	top:20upx;
	font-size:42upx;
	font-weight:bold;
	color:#ffffff;
}
.rank-film{
	position:absolute;
	left:40upx;
	top:100upx;
	display:flex;
	justify-content: flex-start;
	view{
		width:160upx;
		height:220upx;
		margin-left:-20upx;
		z-index:3;
		&:nth-of-type(1){
			margin-left:0;
		}
		&:nth-of-type(2){
			z-index:2;
		}
		&:nth-of-type(3){
			z-index:1;
		}
		image{
			width:100%;
			height:100%;
			border-radius: 8upx;
		}
	}
	text{
		font-size:60upx;
		color:#F1F1F1;
		align-self: center;
		margin-left:40upx;
	}
}
</style>
