module.exports= {
	saveData(name,data){
		data=JSON.stringify(data)
		uni.setStorageSync(name,data);
	},
	getData(name){
		let ret= uni.getStorageSync(name)
		return ret!=''?JSON.parse(ret):""
		
	}
}