import s from './NavigateBar.module.scss'
import {Link} from 'react-router-dom'
export const NavigateBar = () => {
	return (
		<div className={s.navigateBar}>
		<span className={s.title}>НАВИГАЦИЯ</span>
		<ul className={s.navigation}>
		<li><Link  to="/bookmarks">Закладки</Link></li>
		


		</ul>
		</div>

		)
}