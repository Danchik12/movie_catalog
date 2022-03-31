import s from './Card.module.scss'
import {Link} from 'react-router-dom'

export const Card = ({movie}) => {


return (
	
	<div className={s.card}>
	<Link to={'/info/'+movie.id}>
	<img src= {'https://image.tmdb.org/t/p/original/'+movie.poster_path} alt={movie.title ? movie.title : movie.name} className={s.poster}/>
	
	
	
<p>{movie.title ? movie.title : movie.name}</p>
</Link>
	</div>
	

	)


}