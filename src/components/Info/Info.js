import s from './Info.module.scss'




export const Info = () =>{

	const data = 
	{poster:'https://upload.wikimedia.org/wikipedia/ru/1/13/Batman_poster.jpg',
title:'Бэтмен',
year:'2019',
id:'1'}
	return (
		
		<div className={s.info}>
		<div className={s.information}>
		<img src={data.poster} alt={data.title} className={s.poster}/>
		<div className={s.about}> 
		<div className={s.title}>Бэтмен <i className='bx bx-bookmark' style={{'cursor':'pointer'}}></i> </div>
		</div>
		</div>
		<div className={s.anotation}>
		
		</div>
		<div className={s.player}>
		</div>
		<div className={s.similiar}>
		</div>
		<div className={s.comments}>
		</div>
		</div>


	

		)
}