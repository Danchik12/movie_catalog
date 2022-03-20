import {Main} from './../elements/Main/Main'
import s from './Home.module.scss'
import {NavigateBar} from './../UI/Navigation/NavigateBar'
export const Home =() =>{
	return (
		<div className='d-flex'>
		<NavigateBar / >
		<Main/>


		</div>

		)
}