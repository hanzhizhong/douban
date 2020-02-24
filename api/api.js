import config from "../config/config.js" 
export const getInTheaters=()=>{
	return uni.request({
		url:"https://douban.uieee.com/v2/movie/in_theaters",
		header: {
		        'Content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		}
	})
}