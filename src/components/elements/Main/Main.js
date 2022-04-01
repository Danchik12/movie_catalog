import s from  './Main.module.scss'
import {Carousel} from './../../UI/Carousel/Carousel'





export const Main = ({movies,serials}) => {


return (

	<div className={s.container}>
	<Carousel  title='Популярные фильмы' datas={movies} />
	<Carousel title='Популярные сериалы' datas={serials} />
	

</div>


	)

}