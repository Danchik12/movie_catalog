import s from  './Main.module.scss'
import {Card} from './../Card/Card'

export const Main = () => {
var data=[
{poster:'https://upload.wikimedia.org/wikipedia/ru/1/13/Batman_poster.jpg',
title:'Бэтмен',
year:'2019',
id:'1'},
{poster:'https://m.media-amazon.com/images/M/MV5BNzRmZWJhNjUtY2ZkYy00N2MyLWJmNTktOTAwY2VkODVmOGY3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
title:'Сверхъестественное',
year:'2005',
id:'2'},
{poster:'https://www.kino-teatr.ru/movie/posters/big/3/35933.jpg',
title:'Мерлин',
year:'2004',
id:'3'},
{poster:'https://www.film.ru/sites/default/files/movies/posters/superman_returns_ver8_xlg.jpg',
title:'Супермэн',
year:'2010',
id:'4'},
{poster:'https://cdn.europosters.eu/image/1300/posters/doctor-who-day-of-the-doctor-i15143.jpg',
title:'Доктор Кто: День доктора',
year:'2002',
id:'5'},
{
poster:'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/731c4031-7389-44f4-8c15-f9f4e3b0ed90/300x450',
title:'Человек паук : Нет пути домой',
year:'2021',
id:'6'
},
{
poster:'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/5cadd28b-996e-4224-ab98-f7aed64aa56c/600x900',
title:'Человек паук : Вдали от дома',
year:'2019',
id:'7'
},
{
poster:'https://upload.wikimedia.org/wikipedia/ru/5/5a/Spider-Man_Homecoming_logo.jpg',
title:'Человек паук : Возвращение домой',
year:'2017',
id:'8'
}

]

return (
	<div className={s.container}>
<div className={s.new}>Новинки

<ul className={s.list}>
{data.map((date,index) => 
<Card movie={date} key={index}  />

)}

</ul>

</div>


<div className={s.serials}>
Сериалы
<ul className={s.list}>
{data.map((date,index) => 
<Card movie={date} key={index}  />

)}
</ul>
</div>
</div>
	)

}