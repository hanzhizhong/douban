import {getInTheaters,getGeohash,getComingSoon,getTop250} from "../api/api.js"

export default{
	//获取城市名
	async getCityNameByGeohash({commit},{...data}){
		try{
			let ret=await getGeohash({...data})
			commit('GET_CITY_NAME_BY_GEOHASH',ret[1].data.city)
		}catch(err){
			console.error(`获取城市名失败${err}`)
		}
	},
	//正在上映
	async getInTheatersData({commit},{...city}){
		try{
			let [err,data]=await getInTheaters({...city})
			let ret=data.data
			commit('GET_IN_THEATERS_DATA',{...ret})
		}catch(err){
			console.error(`获取正在上映的数据失败${err}`)
		}
	},
	//即将上映
	async getComingSoonFilesData({commit}){
		try{
			let [err,data]=await getComingSoon()
			let ret=data.data 
			commit("GET_COMING_SOON_FILES_DATA",{...ret})
		}catch(err){
			console.error(`获取即将上映的电影数据失败了${err}`)
		}
	},
	//top250
	async getTop250FilesData({commit}){
		try{
			let [err,data]=await getTop250()
			let ret=data.data 
			commit('GET_TOP250_FILES_DATA',{...ret})
		}catch(err){
			console.error(`获取top250的电影数据失败了${err}`)
		}
	}
}