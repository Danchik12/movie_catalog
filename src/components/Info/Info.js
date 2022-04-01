import s from './Info.module.scss'
import {useParams} from 'react-router-dom'
import Loader from './../UI/Loader/Loader'
import {Carousel} from './../UI/Carousel/Carousel'
import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getInfo} from './../../store/thunk/servis'
import YouTube from 'react-youtube';

export const Info = () =>{
	const {type,id} = useParams()
	const dispatch =useDispatch()
	const {isLoading ,info} = useSelector((state) => state.movie)
	useEffect(()=>{
		dispatch(getInfo(type,id))
	},[id])

	return (
		
		<div className={s.page}>
		{ isLoading ?
			<Loader />
			:
			<>
		<div className={s.information}>
		<img src={'https://image.tmdb.org/t/p/original/'+info.poster_path} alt={info.title ? info.title : info.name} className={s.poster}/>
		<div className={s.about}> 
		<div className={s.title}>{info.title ? info.title : info.name}<i className='bx bx-bookmark' style={{'cursor':'pointer','marginRight': '50px'}}></i> 
		</div>
		
		
		<div className={s.parametr}><div className={s.parametr_name}>Страны : </div>  
		<div className={s.parametr_value}>{info.production_countries.map(country => `${country.name} `)}</div></div>
		<div className={s.parametr}><div className={s.parametr_name}>Время :</div>  
		<div className={s.parametr_value}>{info.runtime ? info.runtime : info.episode_run_time[0]} мин.</div></div>
		<div className={s.parametr}><div className={s.parametr_name}>Жанры :</div>  
		<div className={s.parametr_value}>{info.genres.map(genre =>`${genre.name} `) }</div></div>
		<div className={s.parametr}><div className={s.parametr_name}>IMDb :</div>  
		<div className={s.parametr_value}>{info.vote_average}</div></div>
		</div>
		</div>
		<div className={s.anotation}>
		<p>
		{info.overview}
		</p>
		</div>
		<div className={s.player}>
		<YouTube videoId="2g811Eo7K8U" />
		</div>
		<div className={s.similiar}>
		<Carousel title={'Рекомендуем посмотреть'} datas={info.recommendations}/>
		</div>
		</>
}
		</div>


	

		)
}