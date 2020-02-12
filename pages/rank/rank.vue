<template>
	<view class="rank">
		<rank-ad :title="title"></rank-ad>
		<rank-ad :title="title"></rank-ad>
		<recommend-list></recommend-list>
	</view>
</template>

<script>
	import rankAd from "../../components/rankAd/rankAd.vue"
	import recommendList from "../../components/recommendList/recommendList.vue"
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
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.rank{
	padding:0 20upx;
}
</style>
