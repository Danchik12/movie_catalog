import s from  './Main.module.scss'
import {Card} from './../Card/Card'
import React,{useEffect} from 'react'
import Loader from './../../UI/Loader/Loader'
import { getTrendsMovie,getTrendsSerial} from './../../../store/thunk/servis'
import {useDispatch,useSelector} from 'react-redux'
export const Main = () => {
const dispatch =useDispatch()
	const {movies,isLoading ,serials} = useSelector((state) => state.movie)
	
//useEffect(()=>{
//dispatch(getTrendsMovie())
//dispatch(getTrendsSerial())

//},[])

return (

	<div className={s.container}>
{ isLoading  ?
<Loader/>
	:
	<>
<div className={s.new}>Популярные фильмы

<ul className={s.list}>
{movies.results.map((data,index) => 
<Card movie={data} key={index}  />

)}

</ul>

</div>


<div className={s.serials}>
Популярные сериалы
<ul className={s.list}>
{serials.results.map((data,index) => 
<Card movie={data} key={index}  />

)}
</ul>
</div>
</>
}
</div>


	)

}