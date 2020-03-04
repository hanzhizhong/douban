<template>
	<view class="rank">
		<rank-ad :title="oNewMovies.title" :moviesData="oNewMovies.subjects" :bg="oNewMovies.subjects[3].images.large"></rank-ad>
		<rank-ad :title="oWeekly.title" :moviesData="oWeekly.subjects" :bg="oWeekly.subjects[3].subject.images.large"></rank-ad>
		<recommend-list :title="oTop250.title" :moviesData="oTop250.subjects" :bg="oTop250.subjects[0].images.small"></recommend-list>
		<recommend-list :title="oUsBox.title" :moviesData="oUsBox.subjects" :bg="oUsBox.subjects[0].subject.images.small"></recommend-list>
	</view>
</template>

<script>
	import rankAd from "../../components/rankAd.vue"
	import recommendList from "../../components/recommendList.vue"
	import {mapState} from "vuex"
	export default {
		data() {
			return {
				title:"2019年度电影榜单"
			}
		},
		components:{
			rankAd,
			recommendList
		},
		computed:{
			...mapState(['oNewMovies','oWeekly','oTop250','oUsBox'])
		},
		onLoad(){
			this.getNewMovies(),
			this.getWeekly(),
			this.getTop250(),
			this.getUsBox()
		},
		methods: {
			//获取新片榜
			getNewMovies(){
				this.$store.dispatch('getNewMoviesData')
			},
			//获取口碑榜
			getWeekly(){
				this.$store.dispatch("getWeeklyData")
			},
			//获取top250
			getTop250(){
				this.$store.dispatch("getTop250FilesData")
			},
			//北美票房榜
			getUsBox(){
				this.$store.dispatch("getUsBoxMoviesData")
			}
		}
	}
</script>

<style lang="less" scoped>
.rank{
	padding:0 20upx;
}
</style>
