import {Main} from './../elements/Main/Main'
import s from './Home.module.scss'
import {NavigateBar} from './../UI/Navigation/NavigateBar'



export const Home =() =>{
	
	return (
		<div className={s.home}>
		<NavigateBar / >
		<Main/>


		</div>

		)
}