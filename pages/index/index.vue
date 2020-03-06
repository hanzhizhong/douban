<template>
	<view class="home">
		<uni-nav-bar title="首页" fixed status-bar color="#ffffff" background-color="#41B955"></uni-nav-bar>
		<view class="home-search">
			<view class="search" @tap="pages2Search">
				<text class="iconfont iconsearch">	
				</text>{{searchName}}
			</view>
		</view>
		<view class="home-content" >
			<block v-if="filesList.length>0" v-for="(item,index) in filesList" :key="index">
				<list-part :title="item.title" :subjects="item.subjects"></list-part>
			</block>  
		</view>
	</view>
</template>

<script>
	import listPart from "../../components/listPart.vue"
	import pic from "../../static/image/ad/default.webp"
	//import navBar from "../../components/navBar.vue" 
	import {uniNavBar} from "@dcloudio/uni-ui"
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				searchName: '搜索',
				title:"首页",
				color:"#fff",
				backgroundColor:"#41B955"
			}
		},
		computed:{
			...mapState(["localCity","inTheaters","oComingSoon","oTop250"]),
			getNameByCity(){
				if(this.localCity){
					this.getInTheaters(this.localCity)
					this.getComingSoon()
					this.getTop250()
				}
				return ''
			},
			filesList(){
				let arr=[]
				if(Object.keys(this.inTheaters).length>0&&Object.keys(this.oComingSoon).length>0&&Object.keys(this.oTop250).length>0){
					arr.push({title:this.inTheaters.title,subjects:this.inTheaters.subjects})
					arr.push({title:this.oComingSoon.title,subjects:this.oComingSoon.subjects})
					arr.push({title:this.oTop250.title,subjects:this.oTop250.subjects})
				}
				return arr;
			}
		},
		components:{
			listPart,
			uniNavBar
		},
		onLoad() {
			this.getCityName()
		},
		methods: {
			//先获取经纬度
			getCityName(){
				uni.getLocation({
				    type: 'wgs84',
				    success:(res)=> {
						let {latitude,longitude}=res
						let geohash=`${latitude},${longitude}`
						this.$store.dispatch('getCityNameByGeohash',{geohash})
				    }
				})
				
			},
			//获取正在上映的电影数据
			getInTheaters(city){
				this.$store.dispatch("getInTheatersData",{city})
			},
			//获取即将上映的电影
			getComingSoon(){
				this.$store.dispatch("getComingSoonFilesData")
			},
			//获取top250
			getTop250(){
				this.$store.dispatch("getTop250FilesData")
			},
			//页面跳转到search
			pages2Search(){
				uni.navigateTo({
					url:"../search/search"
				})
			}
		}
	}
</script>
 
<style lang="less" scoped>
	.home-search{
		display:flex;
		justify-content:center;
		align-items:center;
		height:90upx;
		background-color:#41B955;
		.search{
			height:68upx;
			background-color:#ffffff;
			width:90%;
			border-radius:8upx;
			display:flex;
			justify-content:center;
			align-items:center;
			color:#C0C0C0;
			font-size:24upx;
		}
	}
	
</style>
