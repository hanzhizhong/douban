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
				<view class="avatars-title">影人</view>
				<scroll-view scroll-x="true" show-scrollbar="true" class="avatars-scroll">
					<block v-for="(item,index) in oSubject.casts" :key="index">
						<view class="avatars-album">
							<image :src="item.avatars.small" mode="aspectFill"></image>
							<view class="avatars-name">{{item.name}}</view>
							<view class="avatars-name">{{item.name_en}}</view>
						</view>
					</block>
				</scroll-view>
			</view>
			<!-- 短评 -->
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
			<!-- 预告片 -->
			<view class="trailer">
				<view class="trailer-title">预告片</view>
				<scroll-view scroll-x="true" class="trailer-scroll">
					<block v-for="(item,index) in oSubject.trailers" :key="index">
						<view class="trailer-video">
							<video :src="item.resource_url" controls :poster="item.small" :title="item.title"></video>
							<view>{{item.title}}</view>
						</view>
					</block>
				</scroll-view>
			</view>
			<view class="comments">
				<view class="comments-title">
					影评{{oComments.total}}条
				</view>
				<block v-for="(item,index) in oComments.reviews" :key="index" v-if="index<10">
					<view class="comments-author">
						<view class="comments-name">
							<image :src="item.author.avatar"></image>
							<text>{{item.author.name}}</text>
							<view class="comments-rate">
								<text>看过</text>
								<uni-rate size="10" :value="item.rating.value" :max="item.rating.max"></uni-rate>
							</view>
						</view>
						<view class="comments-content">
							<view>{{item.title}}</view>
							<text>
								{{item.summary}}
							</text>
						</view>
						<view class="comments-count">
							<text>{{item.comments_count}}回复.{{item.useful_count}}有用.{{item.useless_count}}转发</text>
						</view>
					</view>
					
				</block>
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
	// 影人信息
	.avatars{
		.avatars-title{
			font-size:36upx;
			font-weight: bold;
		}
		.avatars-scroll{
			white-space: nowrap;
		}
		.avatars-album{
			width:30%;
			margin:40upx 0;
			display: inline-block;
			image{
				width:200upx;
				height:280upx;
				border-radius:8upx;
			}
		}
		.avatars-name{
			font-size:24upx;
			font-size:@default;
			line-height:32upx;
		}
		
	}
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
	// 预告片
	.trailer{
		margin:40upx 0;
		.trailer-title{
			font-size:36upx;
			font-weight: bold;
		}
		.trailer-scroll{
			white-space: nowrap;
			margin-top:40upx;
		}
		.trailer-video{
			width:60%;
			display:inline-block;
			video{
				width:410upx;
				height:250upx;
			}
			view{
				line-height:44upx;
				color:@default;
			}
		}
		
	}
	// 影评
	.comments{
		margin:40upx 0;
		background-color:@bgcolor;
		padding:20upx;
		border-radius:10upx;
		.comments-title{
			font-size:36upx;
			font-weight: bold;
		}
	}
</style>
