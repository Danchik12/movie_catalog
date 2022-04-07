import React,{useEffect} from 'react'
import {Card} from './../elements/Card/Card'
import s from './Catalog.module.scss'
import Loader from './../UI/Loader/Loader'
import {useDispatch,useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'



export default function Catalog(){
	const dispatch =useDispatch()
const {movies,isLoading ,serials,search} = useSelector((state) => state.movie)
	const location =useLocation()
	
//	if (location.pathname == '/films'){
//		useEffect(() => {
//				dispatch()
//			},[])
//	}
	//	else if (location.pathname == '/serials'){
	//		useEffect(() => {
	//			dispatch()
	//		},[])
//		}
		//else {
			const items=search
			
		//}

 
return(
	<div className={s.Catalog}>
	{
		isLoading 
		? <Loader/>
		:items.results.map(item => <Card movie={item} key={item.id}/>)

		


	}




</div>
)
}