import s from  './Main.module.scss'
import {Card} from './../Card/Card'

export const Main = () => {


return (
	<div className={s.container}>
<div className={s.new}>Новинки
<i className='bx bxs-left-arrow'></i>
<i className='bx bxs-right-arrow'></i>


</div>


<div className={s.serials}>
Сериалы
<i className='bx bxs-left-arrow'></i>
<i className='bx bxs-right-arrow'></i>


</div>
	</div>
	)

}