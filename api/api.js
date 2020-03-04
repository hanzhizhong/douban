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
//正在上映
export const getInTheaters=({...city})=>{
	return uni.request({
		url:`${baseUrl}/v2/movie/in_theaters?city=${city.city}`,
		header: {
		    'Content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		}
	})
}
//即将上映
export const getComingSoon=()=>{
	return uni.request({
		url:`${baseUrl}/v2/movie/coming_soon`,
		header: {
		    'Content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		}
	})
}
//top250
export const getTop250=()=>{
	return uni.request({
		url:`${baseUrl}/v2/movie/top250`,
		header: {
		    'Content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		}
	})
}
//新片
export const getNewMovies=()=>{
	return uni.request({
		url:`${baseUrl}/v2/movie/new_movies`,
		header: {
		    'Content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		}
	})
}
export const getWeekly=()=>{
	return uni.request({
		url:`${baseUrl}/v2/movie/weekly`,
		header: {
		    'Content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		}
	})
}
export const getUsBox=()=>{
	return uni.request({
		url:`${baseUrl}/v2/movie/us_box`,
		header: {
		    'Content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		}
	})
}

export const getSearchMovies=(data)=>{
	/* console.log('data',data)
	let [q='',tag='',start=0,count=20]=[data]
	console.log('ttt',q,tag,start,count) */
	
	return uni.request({
		url:`${baseUrl}/v2/movie/search`,
		data:{
			q:data,
			tag:'',
			start:0,
			count:20
		},
		header: {
		    'Content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		}
	})
}
export const getSubjectData=(args)=>{
	console.log('ttt',args)
	return uni.request({
		url:`${baseUrl}/v2/movie/subject/${args.id}`,
		header:{
			"Content-type":"application/x-www-form-urlencoded"
		}
	})
}
export const getActors=(args)=>{
	return uni.request({
		url:`${baseUrl}/v2/movie/celebrity/${args.id}`,
		header:{
			"Content-type":"application/x-www-form-urlencoded"
		}
	})
}
//短评
export const getShortReviews=(args)=>{
	return uni.request({
		url:`${baseUrl}/v2/movie/subject/${args.id}/comments`,
		header:{
			"Content-type":"application/x-www-form-urlencoded"
		}
	}) 
}
//影评
export const getComments=(args)=>{
	return uni.request({ 
		url:`${baseUrl}/v2/movie/subject/${args.id}/reviews`,
		header:{
			"Content-type":"application/x-www-form-urlencoded"
		}
	})  
}