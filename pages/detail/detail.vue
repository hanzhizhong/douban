<template>
	<view class="detail">
		<!-- 自定义导航 -->
		<uni-nav-bar fixed status-bar>
			<view slot="left" class="left-option">
				<text @click="goback" class="iconfont icontubiao-"></text>
				<text @click="gohome" class="iconfont iconhome"></text>
			</view>
			<view class="nav-title">{{title}}</view>
		</uni-nav-bar>
		<view class="detail-content" v-if="Object.keys(oSubject).length &&oSubject.title===title">
			<view class="title">
				<image :src="oSubject.images.large" mode="aspectFill"></image>
				<view class="title-part">
					<text class="title-head">{{oSubject.title}} ({{oSubject.year}})</text>
					<view class="title-film">
						<block v-for="(item,index) in oSubject.genres" :key="index">
							<text>{{item}}</text>
						</block>
						&nbsp;/&nbsp;
						<text>{{oSubject.countries[0]}}</text>&nbsp;/&nbsp;<text>片长{{oSubject.durations[0]}}</text>
					</view>
					<view class="title-action">
						<view >
							<text class="iconfont iconxiangkan"></text>想看
							</view>
						<view>
							<text class="iconfont iconstar"></text>看过
							</view>
					</view>
				</view>
			</view>
			<!-- 豆瓣评分 -->
			<view class="rating">
				<view class="rating-title">
					<text>豆瓣评分&trade;</text>
					<text class="iconfont iconarrow-right"></text>
				</view>
				<view class="rating-body">
					<view class="rating-body-left">
						<text class="rating-body-score">{{oSubject.rating.average}}</text>
						<view class="rating-uni-rate">
							<uni-rate size="12" max="5" :value="starValue" disabled="true"></uni-rate>
						</view>
					</view>
					<view class="rating-body-right">
						<block v-for="(value,key) in oSubject.rating.details" :key="key">
							<view class="rating-star-progress">
								<view class="rating-uni-rate">
									<uni-rate size="10" :max="key" value="0" disabled="true"></uni-rate>
								</view>
								<progress :percent="Math.ceil((value/oSubject.ratings_count)*100)" activeColor="gold" stroke-width="6" />
							</view>
						</block>
					</view>
				</view>
			</view>
			<!-- 简介 -->
			<summary :oSubject="oSubject"></summary>
			<!-- 影人信息 -->
			<actors :oSubject="oSubject"></actors>
			<!-- 短评 -->
			<review :oShortReviews="oShortReviews"></review>
			<!-- 预告片 -->
			<trailer :oSubject="oSubject"></trailer>
			<!-- 影评 -->
			<comments :oComments="oComments"></comments>
		</view>
	</view>
</template>

<script> 
	import navBar from '../../components/navBar.vue'
	import actors from '../../components/actors.vue'
	import comments from '../../components/comments.vue'
	import review from '../../components/review.vue'
	import summary from '../../components/summary.vue'
	import trailer from '../../components/trailer.vue'
	import {uniNavBar,uniRate} from "@dcloudio/uni-ui"
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				title:'',
				backgroundColor:'#ffffff',
				color:'#323232',
				id:'',
			}
		},
		components:{
			uniNavBar,
			actors,
			comments,
			review,
			summary,
			trailer,
			uniRate
		},
		computed:{
			...mapState(['oSubject','oShortReviews','oComments']),
			starValue(){
				if(Object.keys(this.oSubject).length>0){
					return (this.oSubject.rating.average/(this.oSubject.rating.max/5)).toFixed(1)
				}
			}
		},
		onLoad(option){
			this.id=option.id;
			this.title=option.title;
			this.getSubject()
			this.getComments()
			this.getShortReviews()
		},
		watch:{
			/* paramOption(val){
				if(Object.keys(val).length>0){
					this.id=val.id;
					this.title=val.title;
					this.getSubject()
					this.getComments()
					this.getShortReviews()
				}
			} */
		},
		methods: {
			//获取电影条目信息
			getSubject(){
				this.$store.dispatch("getSubjectMoviesById",this.id)
			},
			//短评
			getShortReviews(){
				this.$store.dispatch("getShortReviewsById",this.id)
			},
			//影评
			getComments(){
				this.$store.dispatch("getCommentsById",this.id)
			},
			//返回上一级
			goback(){
				uni.navigateBack({
					delta:1
				})
			},
			//返回home页
			gohome(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@color:gold;
	@primary:#323232;
	@default:#666666;
	@bgcolor:#ffffff;
	.detail{
		background-color:rgb(244,242,251);
	}
	.detail-content{
		padding:20upx;
	}
	.title{
		display:flex;
		height:300upx;
		image{
			width:32%;
			height:100%;
			border-radius:8upx;
			box-shadow: 0 0 4upx rgba(0,0,0,0.8);
		}
		
	}
	.nav-title{
		font-size:36upx;
		color:@primary;
		font-weight:bold;
		text-align:center;
		width:100%;
	}
	.left-option{
		display:flex;
		align-items:center;
		text{
			font-size:44upx;
			color:@primary;
			margin-right:40upx;
		}
	}
	.title-part{
		width:68%;
		padding:0 20upx;
		display:flex;
		flex-direction: column;
		
		.title-head{
			font-size:36upx;
			font-weight:bold;
			color:@primary;
		}
	}
	.title-film{
		color:@default;
		line-height:68upx;
	}
	.title-action{
		display:flex;
		margin-top:20upx;
		justify-content: space-between;
		view{
			width:48%;
			height:80upx;
			font-size:28upx;
			font-weight:bold;
			color:@primary;
			border:none;
			background-color:@bgcolor;
			border-radius:8upx;
			display:flex;
			justify-content: center;
			align-items: center;
			box-shadow: 0 2upx 0 rgba(0,0,0,0.5);
			text{
				color:@color;
			}
		}
	}
	
	.rating{
			background-color:@bgcolor;
			border-radius:8upx;
			margin:40upx 0;
			padding:20upx;
			.rating-title{
				display:flex;
				justify-content:space-between;
				height:44upx;
				align-items: center;
				text{
					color:@default;
				}
			}
		}
		.rating-uni-rate{
			display:flex;
			align-items:center;
		}
		.rating-body{
			display:flex;
			align-items:center;
			.rating-body-left{
				flex:1;
				align-self: flex-end;
				display:flex;
				flex-direction: column; 
				align-items: flex-end;
				margin-right:40upx;
				.rating-body-score{
					font-size:56upx;
					font-weight:bold;
					color:@primary;
					text-align:center;
				}
				view{
					height:44upx;
				}
			}
			.rating-body-right{
				flex:2;
				width:100%;
				.rating-star-progress{
					display:flex;
					height:16upx;
					view{
						width:25%;
					}
					progress{
						width:60%;
					}
				}
			}
			
		}
	
	
	
	
</style>
