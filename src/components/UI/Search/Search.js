import s from './Search.module.scss'
import {useDispatch} from 'react-redux'
import {getSearch} from './../../../store/thunk/servis'

export const Search = () => {
	const dispatch =useDispatch()
		
	return (
		<div className={s.search}>
		
		
		<input type='text' placeholder="Введите название " onKeyPress={e => e.key === 'Enter'  && dispatch(getSearch(e.target.value)) } />
		<i className='bx bx-search-alt'></i>
		
		
		</div>

		)
}