<template>
	<view class="recommend">
		<view class="recommend-logo">
			<image :src="bg" mode="aspectFill"></image>
			<text>{{title.replace('豆瓣电影','')}}</text>
		</view>
		<view class="recommend-film">
			<template v-if="title.includes('Top')">
				<block v-for="(item,index) in moviesData" :key="index" v-if="index<3">
					<text>{{index+1}}.{{item.title}} {{item.rating.average}}</text>
				</block>
			</template>
			<template v-else>
				<block v-for="(item,index) in moviesData" :key="index" v-if="index<3">
					<text>{{index+1}}.{{item.subject.title}} {{item.subject.rating.average}}</text>
				</block>
			</template>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			title:{
				type:String
			},
			moviesData:{
				type:Array
			},
			bg:{
				type:String
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.recommend{
	margin:20upx 0;
	border:1upx solid #dedede;
	width:100%;
	box-sizing: border-box;
	height:200upx;
	display:flex;
	border-radius:10upx;
}
.recommend-logo{
	flex:2;
	height:200upx;
	background-color:#2C405A;
	border-radius:10upx;
	margin-right:30upx;
	position:relative;
	overflow:hidden;
	image{
		position:absolute;
		left:0;
		top:0;
		width:100%;
		height:100%;
		opacity:0.5;
	}
	text{
		font-size:34upx;
		color:#ffffff;
		text-align:center;
		position:absolute;
		left:50%;
		top:50%;
		transform:translate(-50%,-50%);
	}
}

.recommend-film{
	flex:5;
	display:flex;
	flex-direction:column;
	justify-content:space-around;
	
}

</style>
