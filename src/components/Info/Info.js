import s from './Info.module.scss'
import {useParams} from 'react-router-dom'
import Loader from './../UI/Loader/Loader'
import {Carousel} from './../UI/Carousel/Carousel'
import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getInfo,addToFavorites,removeToFavorites} from './../../store/thunk/servis'
import YouTube from 'react-youtube';

export const Info = () =>{
	const {type,id} = useParams()
	const dispatch =useDispatch()
	const {isLoading ,info,favorites} = useSelector((state) => state.movie)
	useEffect(()=>{
		dispatch(getInfo(type,id))
	},[id])

	const opts={
		height:'400',
		width:'700',
	}
	const [isBookmark,setBookmark] = useState(false);

		
	
	const AddFavorites = (movie) => {
		let favorite_movie = Object.assign({}, movie, {media_type:type})
		dispatch(addToFavorites(favorite_movie))

		setBookmark(true)
		}
	const RemoveFavorites = (movie) =>{
		
		dispatch(removeToFavorites(movie))
		
		setBookmark(false)
	}
	

	const renderVideo = () => {
		const videos=info.videos.results;
		if (videos.length === 1){
			return videos[0].key
		}else {

			const rus_videos=videos.filter(video => video.iso_639_1 == 'ru')
		if(rus_videos.length === 0){
			const trailers=videos.filter(video => video.type=='Trailer' || video.type == 'Opening Credits')
			return trailers[0].key 
		}else{
		 return rus_videos[0].key
		}
		}
		

		
	}
	
	useEffect (() => {
  localStorage.setItem('bookmarks',JSON.stringify(favorites))
},[favorites])

	useEffect(()=>{
		const favorite = JSON.parse(localStorage.getItem('bookmarks'))
		console.log(favorite.find((movie) => movie.id === id) )
		 if (favorite.find((movie) => movie.id == id || typeof movie.id == 'undefinded') ){
		 	setBookmark(true)
		 }else{
		 	setBookmark(false)
		 }
		
	},[])
	return (
		
		<div className={s.page}>
		{ isLoading 
			? <Loader />
			:
			<>
		<div className={s.information}>
		<img src={'https://image.tmdb.org/t/p/original/'+info.poster_path} alt={info.title ? info.title : info.name} className={s.poster}/>
		<div className={s.about}> 
		<div className={s.title}>{info.title ? info.title : info.name}<div onClick={() => {{ isBookmark ? RemoveFavorites(info) :AddFavorites(info) }}} >
		<i  className={isBookmark ? 'bx bxs-bookmark' :'bx bx-bookmark'} style={{'cursor':'pointer','marginRight': '50px'}}></i></div> 
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
		{ info.videos.results.length === 0
			?  <span></span>
			: <YouTube videoId={renderVideo()}      opts={opts}/>
	   }
	   </div>
		<div className={s.similiar}>
		<Carousel title={'Рекомендуем посмотреть'} datas={info.recommendations}/>
		</div>
		</>
}
		</div>


	

		)
}