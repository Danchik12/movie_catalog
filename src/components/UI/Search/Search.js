import s from './Search.module.scss'



export const Search = () => {
	return (
		<div className={s.search}>
		<div>
		<i className='bx bx-search-alt'></i>
		<input type='text' placeholder="Введите название " />
		</div>
		
		</div>

		)
}