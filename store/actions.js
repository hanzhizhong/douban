import {getInTheaters,getGeohash} from "../api/api.js"

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
	async getInTheatersData({commit}){
		try{
			let [err,data]=await getInTheaters()
			let ret=data.data
			commit('GET_IN_THEATERS_DATA',{...ret})
		}catch(err){
			console.error(`获取正在上映的数据失败${err}`)
		}
	}
}