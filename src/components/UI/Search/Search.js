import s from './Search.module.scss'
import {useDispatch,useSelector} from 'react-redux'
import {getSearch} from './../../../store/thunk/servis'

export const Search = () => {
	const dispatch =useDispatch()
		const {isLoading ,search} = useSelector((state) => state.movie)
	return (
		<div className={s.search}>
		
		
		<input type='text' placeholder="Введите название " onKeyPress={e => e.key === 'Enter'  && dispatch(getSearch(e.target.value)) } />
		<i className='bx bx-search-alt'></i>
		
		
		</div>

		)
}