
import {Card} from './../elements/Card/Card'
import s from './Catalog.module.scss'
import Loader from './../UI/Loader/Loader'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import React,{useState} from 'react'

export default function Catalog({items}){
	
const location =useLocation()
console.log(location)

const Pages =items.total_pages
console.log(Pages)
//Todo Pagination
const {isLoading} = useSelector((state) => state.movie)



 
return(
	<div className={s.Catalog}>
	{
		isLoading 
		? <Loader/>

		: 


items.results.map(item => <Card movie={Object.assign({media_type:location.pathname == '/films' ? 'movie' : 'tv'},item)} key={item.id}/>)

		


	}




</div>
)
}