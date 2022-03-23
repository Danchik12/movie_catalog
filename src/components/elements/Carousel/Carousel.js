import s from  './Carousel.module.scss'
import {Card} from './../Card/Card'

export const Carousel = () => {


return (
	<div className={s.container}>
<div className={s.new}>Новинки
<div className={s.controls}>
<span className={s.control} ><i className='bx bxs-left-arrow' ></i></span>
<span className={s.control} ><i className='bx bxs-right-arrow'  ></i></span>
</div>


</div>


<div className={s.serials}>
Сериалы
<div className={s.controls} >
<span className={s.control} ><i className='bx bxs-left-arrow' ></i></span>

<span className={s.control} ><i className='bx bxs-right-arrow'  ></i></span>
</div>


</div>
	</div>
	)

}