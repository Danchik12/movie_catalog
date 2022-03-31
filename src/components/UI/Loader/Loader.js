import React from 'react'
import s from './Loader.module.scss'


export default function Loader() {
	return (
	<div className={s.container}>
		<div className={s.lds_ring}><div></div><div></div><div></div><div></div></div>
		</div>
		)
}