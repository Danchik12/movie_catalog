import React from 'react'

import s from './Header.module.scss'
import {Search} from './../../UI/Search/Search'


export default function Header(){

  

return(
<div className={s.Header}>

<a  href="/" className={s.brand}>
SMART<span style={{'color':'#81ae65'}}>Movies</span>
</a>

<Search/>




</div>
)
}