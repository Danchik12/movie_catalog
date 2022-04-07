import React,{useEffect} from 'react'
import {Card} from './../elements/Card/Card'
import s from './Catalog.module.scss'
import Loader from './../UI/Loader/Loader'
import {useDispatch,useSelector} from 'react-redux'




export default function Catalog(){
const dispatch =useDispatch()
const {movies,isLoading ,serials,search} = useSelector((state) => state.movie)
  const items=[
  	{media_type:'film',
  		id:666,
  		title:'SpongeBob',
  		poster_path:333},
  		{media_type:'tv',
  		id:7777,
  		title:'Supernatural',
  		poster_path:666},
  		{media_type:'film',
  		id:328,
  		title:'Atack',
  		poster_path:999}

  ]

return(
	<div className={s.Catalog}>
	{
		isLoading
		? <Loader/>
		:items.map(item => <Card movie={item} key={item.id}/>)

		


	}




</div>
)
}