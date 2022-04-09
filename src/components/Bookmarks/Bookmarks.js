
import s from './Bookmarks.module.scss'
import {Card } from './../elements/Card/Card'



export const Bookmarks =() =>{
	
	return (
	< div className={s.bookmark}>
	<div className={s.container}>

	


	{ localStorage.getItem('bookmarks') && localStorage.getItem('bookmarks').length !== 0
	?
		
		 JSON.parse(localStorage.getItem('bookmarks')).map((data,index) => 
			<Card movie={data} key={index} />
			)
		 

		 :<span>Вы не добавили ничего в закладки</span>
		
	}

</div>
	</div>

		)
}