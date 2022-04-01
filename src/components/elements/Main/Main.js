import s from  './Main.module.scss'
import {Carousel} from './../../UI/Carousel/Carousel'
import React,{useEffect} from 'react'
import Loader from './../../UI/Loader/Loader'
import { getTrendsMovie,getTrendsSerial} from './../../../store/thunk/servis'
import {useDispatch,useSelector} from 'react-redux'
export const Main = () => {
const dispatch =useDispatch()
	const {movies,isLoading ,serials} = useSelector((state) => state.movie)
	
//useEffect(()=>{
//dispatch(getTrendsMovie())
//dispatch(getTrendsSerial())
//},[])

return (

	<div className={s.container}>
{ isLoading  ?
<Loader/>
	:
	<>
	<Carousel  title='Популярные фильмы' datas={movies} />
	<Carousel title='Популярные сериалы' datas={serials} />
	</>
}
</div>


	)

}