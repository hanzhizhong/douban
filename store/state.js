const {getData} =require('../utils/localData.js') 
export default{
	localCity:getData('city'),
	inTheaters:[],//正在上映
}