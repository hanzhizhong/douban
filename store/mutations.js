const {saveData} =require('../utils/localData.js') 
module.exports={
	GET_IN_THEATERS_DATA(state,{...data}){
		console.log('tttt',data)
	},
	GET_CITY_NAME_BY_GEOHASH(state,city){
		saveData('city')
		state.localCity=city
	}
}