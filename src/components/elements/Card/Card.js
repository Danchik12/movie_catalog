import s from './Card.module.scss'


export const Card = ({movie}) => {

return (
	<a href={'/info/'+movie.media_type+'/'+movie.id}   >
	<div className={s.card}>
	
	
	<img src= {'https://image.tmdb.org/t/p/original/'+movie.poster_path} alt={movie.title ? movie.title : movie.name} className={s.poster}/>
	
	
	
<p>{movie.title ? movie.title : movie.name}</p>


	</div>
	</a>
	

	)


}