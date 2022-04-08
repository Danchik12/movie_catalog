import s from './Card.module.scss'
import {Link} from 'react-router-dom'
import {getInfo} from './../../../store/thunk/servis'
import {useDispatch} from 'react-redux'
export const Card = ({movie}) => {
	const dispatch =useDispatch()
	function info(type,id){
		dispatch(getInfo(type,id))
	}

return (
	<Link to={'/info/'+movie.id} onClick={() => {info(movie.media_type,movie.id)}} >
	<div className={s.card}>
	
	
	<img src= {'https://image.tmdb.org/t/p/original/'+movie.poster_path} alt={movie.title ? movie.title : movie.name} className={s.poster}/>
	
	
	
<p>{movie.title ? movie.title : movie.name}</p>


	</div>
	</Link>
	

	)


}