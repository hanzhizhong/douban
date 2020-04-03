<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//先获取经纬度
			uni.getLocation({
			    type: 'wgs84',
			    success:(res)=> {
					let {latitude,longitude}=res
					let geohash=`${latitude},${longitude}`
					this.$store.dispatch('getCityNameByGeohash',geohash)
			    }
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
