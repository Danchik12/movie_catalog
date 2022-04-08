import React from 'react'
import s from './Header.module.scss'
import {Search} from './../../UI/Search/Search'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { getTrendsMovie,getTrendsSerial} from './../../../store/thunk/servis'

export default function Header(){
const dispatch =useDispatch()
function home(){
dispatch(getTrendsMovie())
dispatch(getTrendsSerial())
}

  

return(
<div className={s.Header}>

<Link  to="/" className={s.brand} onClick={() => {home()}}>
SMART<span style={{'color':'#81ae65'}}>Movies</span>
</Link >

<Search />




</div>
)
}