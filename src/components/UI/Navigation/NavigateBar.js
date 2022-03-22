import s from './NavigateBar.module.scss'
import {NavLink} from 'react-router-dom'
export const NavigateBar = () => {
	return (
		<div className={s.navigateBar}>
		<span className={s.title}>НАВИГАЦИЯ</span>
		<ul className={s.navigation}>
		<li><NavLink to="films">Фильмы</NavLink></li>
		<li><NavLink to="serials">Сериалы</NavLink></li>
		
		<li><NavLink to="genres">Жанры</NavLink></li>
		<br/>
		<li><NavLink to="bookmarks">Закладки</NavLink></li>
		


		</ul>
		</div>

		)
}