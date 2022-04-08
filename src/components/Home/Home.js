import {Main} from './../elements/Main/Main'
import {useDispatch,useSelector} from 'react-redux'
import s from './Home.module.scss'
import React,{useEffect} from 'react'
import { getTrendsMovie,getTrendsSerial} from './../../store/thunk/servis'
import Loader from './../UI/Loader/Loader'

export const Home =() =>{
const dispatch =useDispatch()
const {trend_movies,isLoading ,trend_serials} = useSelector((state) => state.movie)

useEffect( ()=>{
  dispatch(getTrendsMovie())
  dispatch(getTrendsSerial())
 

},[])
  
	return (
		
		<div className={s.home}>
		{
			isLoading
			? <Loader />
			:
			<Main movies={trend_movies} serials={trend_serials}/>
		}
		
		</div>


	

		)
}