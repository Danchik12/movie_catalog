import React from 'react'
import {Card} from './../elements/Card/Card'
import s from './Catalog.module.scss'


export default function Catalog({items}){

  

return(
<div className={s.Catalog}>
{
	items.map(item => {
		<Card movie={item} />
	})
}




</div>
)
}