import s from  './Carousel.module.scss'
import {Card} from './../Card/Card'

export const Carousel = () => {
var data=[
{poster:'https://upload.wikimedia.org/wikipedia/ru/1/13/Batman_poster.jpg',
title:'Batman',
year:'2019'},
{poster:'https://m.media-amazon.com/images/M/MV5BNzRmZWJhNjUtY2ZkYy00N2MyLWJmNTktOTAwY2VkODVmOGY3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
title:'Supernatural',
year:'2005'},
{poster:'https://www.kino-teatr.ru/movie/posters/big/3/35933.jpg',
title:'Merlin',
year:'2004'},
{poster:'https://www.film.ru/sites/default/files/movies/posters/superman_returns_ver8_xlg.jpg',
title:'Superman',
year:'2010'},
{poster:'https://cdn.europosters.eu/image/1300/posters/doctor-who-day-of-the-doctor-i15143.jpg',
title:'Doctor Who',
year:'2002'}
]

return (
	<div className={s.container}>
<div className={s.new}>Новинки
<ul className={s.carousel}>
{data.map((date,index) => 
<Card movie={date} key={index}  />

)}

</ul>
</div>


<div className={s.serials}>
Сериалы
<ul className={s.carousel}>
{data.map((date,index) => 
<Card movie={date} key={index}  />

)}
</ul>
</div>
</div>
	)

}