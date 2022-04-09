import api from './api'



export function getTrendMovie(){
 return api.get('/trending/movie/week?')
}

export function getTrendSerial(){
	return api.get('/trending/tv/week?')
}



export function fetchInfo(type,id){
 return api.get(`/${type}/${id}?append_to_response=recommendations,videos&include_video_language=en,ru&`)
}


export function Search(query,page){
   return api.get(`/search/multi?&query=${query}&page=${page}&`)


}

export function fetchMovies(page){
   return api.get(`/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&`)
}

export function fetchSerials(page){
   return api.get(`/discover/tv?sort_by=popularity.desc&page=${page}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&`)
}