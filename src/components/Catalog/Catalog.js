
import {Card} from './../elements/Card/Card'
import s from './Catalog.module.scss'
import Loader from './../UI/Loader/Loader'
import {useSelector} from 'react-redux'



export default function Catalog(){
	
const {isLoading ,search} = useSelector((state) => state.movie)
const items=search
			
	

 
return(
	<div className={s.Catalog}>
	{
		isLoading 
		? <Loader/>
		:items.results.map(item => <Card movie={item} key={item.id}/>)

		


	}




</div>
)
}