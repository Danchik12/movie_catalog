import s from './Card.module.scss'


export const Card = ({movie}) => {


return (
	
	<div className={s.card}>
	
	<a href={'/info/'+movie.media_type+'/'+movie.id}   >
	<img src= {'https://image.tmdb.org/t/p/original/'+movie.poster_path} alt={movie.title ? movie.title : movie.name} className={s.poster}/>
	
	
	
<p>{movie.title ? movie.title : movie.name}</p>
</a>

	</div>
	

	)


}