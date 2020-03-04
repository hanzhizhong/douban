<template>
	<view class="detail">
		<nav-bar :title="title" :color="color" :backgroundColor="backgroundColor"></nav-bar>
		<view class="detail-content">
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
			<view class="rating">
				<view class="rating-title">
					<text>豆瓣评分&trade;</text>
					<text class="iconfont iconarrow-right"></text>
				</view>
				<view class="rating-body">
					<view class="rating-body-left">
						<text class="rating-body-score">{{oSubject.rating.average}}</text>
						<view class="rating-uni-rate">
							<uni-rate size="12" max="5" :value="oSubject.rating.average" disabled="true"></uni-rate>
						</view>
					</view>
					<view class="rating-body-right">
						<block v-for="(value,key) in oSubject.rating.details" :key="key">
							<view class="rating-star-progress">
								<view class="rating-uni-rate"><uni-rate size="9" :max="key" disabled="true"></uni-rate></view>
								<progress :percent="Math.ceil((value/oSubject.ratings_count)*100)" activeColor="gold" stroke-width="6" />
							</view>
						</block>
					</view>
				</view>
			</view>
			<view class="summary">
				<view class="summary-title">简介</view>
				<view class="summary-content summary-content-short">
					{{oSubject.summary}}
				</view>
			</view>
			<view class="avatars">
				<!-- 影人信息 -->
				<view>影人</view>
				<scroll-view scroll-x="true" >
					<view>
						<image></image>
						<text></text>
						<text></text>
					</view>
				</scroll-view>
			</view>
			<view class="trailer"></view>
			<!-- 短评 -->
			<view class="reviews">
				<view class="reviews-title">短评</view>
				<view>
					<view>
						<image></image>
						<view>
							<view>石之海</view>
							<view>
								<view>
									<uni-rate size="10" max="5" value="3"></uni-rate>
								</view>
								<text>2019年11月15日</text>
							</view>
						</view>
					</view>
					<view>
						一星给陈文淇 在近两个小时尬到抽搐的剧情里她就是救苦救难的菩萨
					</view>
					<view><text class="iconfont icondianzan"></text>1149</view>
				</view>
			</view>
			<view class="comments">
				<view class="comments-title">
					影评6843条
				</view>
				<view>
					<view>
						<image></image>
						<text>二十二岛主</text>
						<view>
							<text>看过</text>
							<uni-rate size="10" value="2" max="5"></uni-rate>
						</view>
					</view>
					<view>
						<view>《大约在冬季》：现在连爱情故事都降级了吗？</view>
						<text>
							"本文首发于公众号：电影岛赏（j_movie），欢迎关注。 作者：君宁 听人说过一条烂片定律—— 凡是拿歌名做片名的，十有八九都是烂片。 印象中逃过这条定律的，好像只有《甜蜜蜜》。 我本来是不太信的，直到我去看..."
						</text>
					</view>
					<view>
						<text>114回复.269有用.38转发</text>
					</view>
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	import navBar from '../../components/navBar.vue'
	import {uniRate} from "@dcloudio/uni-ui"
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				title:'大约在冬季',
				backgroundColor:'#ffffff',
				color:'#323232',
				id:'30362186'
			}
		},
		components:{
			navBar,
			uniRate
		},
		computed:{
			...mapState(['oSubject','oShortReviews','oComments'])
		},
		onLoad(option){
			this.getSubject(),
			this.getComments(),
			this.getShortReviews()
		},
		methods: {
			//获取电影条目信息
			getSubject(){
				this.$store.dispatch("getSubjectMoviesById",{id:this.id})
			},
			//短评
			getShortReviews(){
				this.$store.dispatch("getShortReviewsById",{id:this.id})
			},
			//影评
			getComments(){
				this.$store.dispatch("getCommentsById",{id:this.id})
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
	.summary{
		.summary-title{
			font-size:32upx;
			font-weight:bold;
		}
		.summary-content{
			margin:40upx 0;
			width:100%;
			color:@default;
			font-size:28upx;
			text-align:justify;
			
		}
		.summary-content-short{
			text-overflow: ellipsis;
			overflow:hidden;
			line-height:40upx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
		}
	}
</style>
