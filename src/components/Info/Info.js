import s from './Info.module.scss'
import {useLocation} from 'react-router-dom'
import {Loader} from './../UI/Loader/Loader'
import {Carousel} from './../UI/Carousel/Carousel'

export const Info = () =>{
	let location=useLocation()
	
	const id = location.state.id
	const type=location.state.type
	
	return (
		
		<div className={s.info}>
		<div className={s.information}>
		<img src={s.poster} alt={s.poster} className={s.poster}/>
		<div className={s.about}> 
		<div className={s.title}><i className='bx bx-bookmark' style={{'cursor':'pointer','marginRight': '50px'}}></i> 
		</div>
		
		
		<div className={s.parametr}><div className={s.parametr_name}>Страна :</div>  
		<div className={s.parametr_value}></div></div>
		<div className={s.parametr}><div className={s.parametr_name}>Время :</div>  
		<div className={s.parametr_value}></div></div>

		<div className={s.parametr}><div className={s.parametr_name}>IMDb :</div>  
		<div className={s.parametr_value}></div></div>
		</div>
		</div>
		<div className={s.anotation}>
		<p>


		</p>
		</div>
		<div className={s.player}>

		</div>
		<div className={s.similiar}>
		
		</div>

		</div>


	

		)
}