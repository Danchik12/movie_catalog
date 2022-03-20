import s from './Search.module.scss'



export const Search = () => {
	return (
		<div className={s.search}>
		<div>
		
		<input type='text' placeholder="Поиск " />
		<i className='bx bx-search-alt'></i>
		</div>
		
		</div>

		)
}