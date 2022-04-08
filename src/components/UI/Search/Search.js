import s from './Search.module.scss'
import {useDispatch} from 'react-redux'
import React,{useEffect} from 'react'
import {useNavigate,createSearchParams} from 'react-router-dom'
import {getSearch} from './../../../store/thunk/servis'

export const Search = () => {

	
	const dispatch =useDispatch()
	let navigate=useNavigate()	
	

	function Press(e){
		dispatch(getSearch(e.target.value))
		
		navigate({
      pathname: '/search',
      search: `?${createSearchParams({query:e.target.value})}`,

    })
		  
		 

		}
	return (
		<div className={s.search}>
		
		
		<input type='text' placeholder="Введите название " onKeyPress={e => e.key === 'Enter'  && Press(e) } />
		<i className='bx bx-search-alt'></i>
		
		
		</div>

		)
}