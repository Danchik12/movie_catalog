import api from './api'



export function getTrendMovie(){
 return api.get('/trending/movie/week?')
}

export function getTrendSerial(){
	return api.get('/trending/tv/week?')
}

export function  getMovies(){

}

export function  getSerials(){

}

export function fetchInfo(type,id){

}


export function Search(){


}