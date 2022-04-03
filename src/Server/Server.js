import api from './api'



export function getTrendMovie(){
 return api.get('/trending/movie/week?')
}

export function getTrendSerial(){
	return api.get('trending/tv/week?')
}

export function  getMovies(){

}

export function  getSerials(){

}

export function fetchInfo(type,id){
 return api.get(`${type}/${id}?append_to_response=recommendations,videos&include_video_language=en,ru&`)
}


export function Search(query){
   return api.get(`search/multi?&query=${query}&page=1&`)


}