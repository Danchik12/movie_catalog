import s from './NavigateBar.module.scss'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getSerials,getMovies} from './../../../store/thunk/servis'
export const NavigateBar = () => {
	const dispatch =useDispatch()
	return (
		<div className={s.navigateBar}>
		<span className={s.title}>НАВИГАЦИЯ</span>
		<ul className={s.navigation}>
		<li><Link  to="/films" onClick={() => {dispatch(getMovies())}}>Фильмы</Link></li>
		<li><Link  to="/serials" onClick={() => {dispatch(getSerials())}}>Сериалы</Link></li>
		<li><Link  to="/bookmarks">Закладки</Link></li>
		


		</ul>
		</div>

		)
}