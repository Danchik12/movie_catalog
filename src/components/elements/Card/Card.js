import s from './Card.module.scss'


export const Card = ({movie}) => {


return (
	<div className={s.card}>
	<span className={s.bookmark}><i className='bx bx-bookmark'></i></span>
	<img src={movie.poster}  alt={movie.title} className={s.poster}/>
	
	
	
<p>{movie.title} ({movie.year})</p>
	</div>

	)


}