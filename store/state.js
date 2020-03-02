const {getData} =require('../utils/localData.js') 
export default{
	localCity:getData('city'),
	inTheaters:{},//正在上映
	oComingSoon:{},//即将上映
	oTop250:{},//top250
	oNewMovies:{},//新片榜
	oWeekly:{},//口碑
	oUsBox:{},//北美票房榜
}