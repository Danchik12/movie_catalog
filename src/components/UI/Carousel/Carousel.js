import {Card} from './../../elements/Card/Card'
import s from  './Carousel.module.scss'

export const Carousel = ({title,datas}) => {

return (

<div className={s.carousel}>{title}

<ul className={s.carousel__list}>
{datas.results.map((data,index) => 
<Card movie={data} key={index}  />

)}

</ul>

</div>
	)


} 

