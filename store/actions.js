import {getInTheaters,getGeohash,getComingSoon,getTop250,getNewMovies,getWeekly,getUsBox,getSearchMovies,getSubjectData,getActors,getShortReviews,getComments} from "../api/api.js"


export default{
	//获取城市名
	async getCityNameByGeohash({commit},geohash){
		try{
			let ret=await getGeohash(geohash)
			let city=ret[1].data.city
			if(city.includes('市')){
				city=city.replace(/[市]$/gi,"")
			}
			commit('GET_CITY_NAME_BY_GEOHASH',{city})
		}catch(err){
			console.error(`获取城市名失败${err}`)
		}
	},
	//正在上映
	async getInTheatersData({commit},city){
		try{
			let [err,data]=await getInTheaters(city)
			let ret=data.data
			commit('GET_IN_THEATERS_DATA',{ret})
		}catch(err){
			console.error(`获取正在上映的数据失败${err}`)
		}
	},
	//即将上映
	async getComingSoonFilesData({commit}){
		try{
			let [err,data]=await getComingSoon()
			let ret=data.data 
			commit("GET_COMING_SOON_FILES_DATA",{ret})
		}catch(err){
			console.error(`获取即将上映的电影数据失败了${err}`)
		}
	},
	//top250
	async getTop250FilesData({commit}){
		try{
			let [err,data]=await getTop250()
			let ret=data.data 
			commit('GET_TOP250_FILES_DATA',{ret})
		}catch(err){
			console.error(`获取top250的电影数据失败了${err}`)
		}
	},
	//新片
	async getNewMoviesData({commit}){
		try{
			let [err,data]=await getNewMovies()
			let ret=data.data 
			commit("GET_NEW_MOVIES_DATA",{data:ret})
		}catch(err){
			console.error(`获取新片榜数据失败了${err}`)
		}
	},
	//口碑
	async getWeeklyData({commit}){
		try{
			let [err,data]=await getWeekly()
			let ret=data.data 
			commit("GET_WEEKLY_DATA",{data:ret})
		}catch(err){
			console.error(`获取口碑榜数据失败了${err}`)
		}
	},
	//北美票房
	async getUsBoxMoviesData({commit}){
		try{
			let [err,data]=await getUsBox()
			let ret=data.data 
			commit('GET_US_BOX_MOVIES_DATA',{data:ret})
		}catch(err){
			console.error(`获取北美票房榜数据失败了${err}`)
		}
	},
	//搜索
	async getSearchMoviesData({commit},args){
		try{
			let ret=await getSearchMovies(args)
		}catch(err){
			console.error(`获取搜索信息失败,${err}`)
		}
	},
	//电影条目
	async getSubjectMoviesById({commit},args){
		try{
			let ret=await getSubjectData(args)
			commit("GET_SUBJECT_MOVIES_BY_ID",{data:ret[1].data})
		}catch(err){
			console.error(`获取电影条目信息错误${err}`)
		}
	},
	//影人的信息
	async getActorsById({commit},args){
		try{
			let ret=await getActors(args)
			commit("GET_ACTORS_BY_ID",{data:ret[1].data})
		}catch(err){
			console.error(`获取影人信息错误${err}`)
		}
	},
	//获取短评信息
	async getShortReviewsById({commit},args){
		try{
			let ret=await getShortReviews(args)
			commit("GET_SHORT_REVIEWS_BY_ID",{data:ret[1].data})
		}catch(err){
			console.error(`获取影片短评信息错误,${err}`)
		}
		
	},
	//获取影评
	async getCommentsById({commit},args){
		try{
			let ret=await getComments(args)
			commit("GET_COMMENTS_BY_ID",{data:ret[1].data})
		}catch(err){
			console.error(`获取影评信息错误,${err}`)
		} 
	} 
}