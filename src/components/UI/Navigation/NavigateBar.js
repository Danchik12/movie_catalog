import s from './NavigateBar.module.scss'
import {NavLink} from 'react-router-dom'
export const NavigateBar = () => {
	return (
		<div className={s.navigateBar}>
		<span className={s.title}>НАВИГАЦИЯ</span>
		<ul className={s.navigation}>
		<li><a href="/films">Фильмы</a></li>
		<li><a href="/serials">Сериалы</a></li>
		
		
		<br/>
		<li><NavLink to="bookmarks">Закладки</NavLink></li>
		


		</ul>
		</div>

		)
}