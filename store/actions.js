import {getInTheaters} from "../api/api.js"

export default{
	//正在上映
	async getInTheatersData({commit}){
		let ret=await getInTheaters()
		console.log(ret)
		
	}
}