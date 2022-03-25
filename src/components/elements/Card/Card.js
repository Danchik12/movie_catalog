import s from './Card.module.scss'
import {Link} from 'react-router-dom'

export const Card = ({movie}) => {


return (
	<div className={s.card}>

	<img src={movie.poster}  alt={movie.title} className={s.poster}/>
	
	
	
<p>{movie.title} ({movie.year})</p>
	</div>

	)


}