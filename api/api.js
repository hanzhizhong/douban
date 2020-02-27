import config from "../config/config.js" 
const baseUrl='https://douban.uieee.com'
export const getGeohash=({...data})=>{
	return uni.request({
		url:`https://elm.cangdu.org/v2/pois/${data.geohash}`,
		header: {
		    'Content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		}
	})
}
export const getInTheaters=()=>{
	return uni.request({
		url:`${baseUrl}/v2/movie/in_theaters`,
		header: {
		    'Content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		}
	})
}

