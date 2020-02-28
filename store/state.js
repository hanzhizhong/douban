const {getData} =require('../utils/localData.js') 
export default{
	localCity:getData('city'),
	inTheaters:{},//正在上映
	oComingSoon:{},//即将上映
	oTop250:{},//top250
}