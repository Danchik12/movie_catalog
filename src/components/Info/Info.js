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
		<div className={s.title}>Бэтмен <i className='bx bx-bookmark' style={{'cursor':'pointer','marginRight': '50px'}}></i> </div>
		<div className={s.parametr}>
		<div className={s.parametr_name}>Год :</div>  
		<div className={s.parametr_value}>2019</div></div>
		<div className={s.parametr}><div className={s.parametr_name}>Страна :</div>  
		<div className={s.parametr_value}>США</div></div>
		<div className={s.parametr}><div className={s.parametr_name}>Жанр :</div>  
		<div className={s.parametr_value}>Драма</div></div>
		<div className={s.parametr}><div className={s.parametr_name}>Время :</div>  
		<div className={s.parametr_value}>02:38:12</div></div>
		<div className={s.parametr}><div className={s.parametr_name}>Режисёр :</div>  
		<div className={s.parametr_value}>Гай Ричи</div></div>
		<div className={s.parametr}><div className={s.parametr_name}>Актёры :</div>  
		<div className={s.parametr_value}>Майкл Килтон , Джек Николсон , Ким Бесинджер</div></div>
		<div className={s.parametr}><div className={s.parametr_name}>IMDb :</div>  
		<div className={s.parametr_value}>6,8</div></div>
		</div>
		</div>
		<div className={s.anotation}>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis elementum mi at elementum. Cras elementum massa enim, at vehicula ex sodales quis. Integer mi nisi, sodales ut fringilla et, ullamcorper vel lacus. Morbi vel ante vitae mi sagittis euismod feugiat quis mauris. Nullam lobortis accumsan porttitor. Donec quis eros consequat, sagittis sapien non, viverra libero. Praesent arcu purus, facilisis nec mollis sed, vehicula in magna. Praesent tincidunt purus porta neque tincidunt, ac sollicitudin risus rutrum. Nam maximus, enim et volutpat convallis, nisl velit tempor diam, non sagittis orci diam vel est. Vivamus vel tortor vitae eros luctus fringilla. Etiam urna tellus, condimentum a venenatis quis, ultrices id odio. Proin tempus felis justo, nec semper ex hendrerit in. Sed elementum neque sit amet urna aliquam accumsan non eu ligula. Vestibulum sed vestibulum purus.</p>
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