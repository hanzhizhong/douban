<template>
	<view class="personal">
		<view class="login">
			<image :src="picUrl" mode="aspectFill"></image>
			<button type="default" class="login-btn">登录</button>
		</view>
		<view class="history">
			<view>我的影音</view>
			<view>登录查看</view>
			<text class="icon-arrow iconfont iconarrow-right"></text>
		</view>
		<view class="analysis">
			<view class="analysis-icon">
				<text class="iconfont iconguanyingxiaoxi"></text>
			</view>
			<view class="analysis-record">
				<view class="analysis-view">
					<view>观影分析</view>
					<view>0 <text>看过</text></view>
				</view>
				<view class="analysis-text">
					<text>标记10部影片</text>
					<text>开启观影分析</text>
				</view>
				<view class="analysis-open">
					立即开启
				</view>
				<text class="icon-arrow iconfont iconarrow-right"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import pic from "../../static/image/ad/bg.jpg"
	export default {
		data() {
			return {
				picUrl:pic,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	.login{
		width:100%;
		height:400upx;
		position:relative;
		overflow:hidden;
		image{
			width:100%;
			position:absolute;
			left:50%;
			top:50%;
			transform:translate(-50%,-50%);
		}
	}
	.login-btn{
		width:40%;
		height:88upx;
		position:absolute;
		left:50%;
		top:50%;
		transform:translate(-50%,-50%);
		border-radius:50upx;
		box-shadow: 0 10upx 10upx rgba(133,195,36,1);
	}
	.history{
		height:88upx;
		padding:0 20upx;
		display:flex;
		justify-content:space-between;
		align-items:center;
		view{
			&:nth-of-type(1){
				font-size:32upx;
				font-weight:bold;
				flex:5;
			}
		}
	}
	.analysis{
		padding:20upx 20upx;
		display:flex;
		height:120upx;
	}
	.analysis-icon{
		width:15%;
		display:flex;
		align-items:center;
		justify-content: center;
		text{
			color:#A5CEFE;
		}
	}
	.analysis-record{
		width:85%;
		display:flex;
		justify-content:space-between;
		align-items:center;
	}
	.analysis-view{
		height:100%;
		display:flex;
		flex-direction:column;
		justify-content: space-around;
		view{
			&:nth-of-type(2){
				font-size:44upx;
				text{
					font-size:24upx;
					color:#C0C0C0;
					margin-left:20upx;
					vertical-align:middle;
				}
			}
		}
	}
	.analysis-text{
		display:flex;
		flex-direction: column;
		justify-content:center;
		align-items:flex-end;
		text{
			margin:5upx 0;
			color:#C0C0C0;
		}
	}
	.analysis-open{
		padding:10upx 10upx;
		border-radius:2upx;
		background-color:#C0C0C0;
	}
	.icon-arrow{
		font-size:44upx;
	}
</style>
