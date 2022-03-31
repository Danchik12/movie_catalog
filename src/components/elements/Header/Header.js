import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.scss'
import {Search} from './../../UI/Search/Search'


export default function Header(){

  

return(
<div className={s.Header}>

<NavLink  to="/" className={s.brand}>
SMART<span style={{'color':'#81ae65'}}>Movies</span>
</NavLink>

<Search/>




</div>
)
}