import {getTrendMovie,getTrendSerial,fetchInfo,Search,fetchMovies,fetchSerials} from './../../Server/Server'
import {movieSlice} from './../slices/MovieSlice'

export const getTrendsMovie = () => async  (dispatch) => {

	try {
		dispatch(movieSlice.actions.getLoading())
				const res = await  getTrendMovie()
				

		if (res.status === 200){
			dispatch (movieSlice.actions.getTrendMoviesSuccess(res))
		}
		
		
	}catch(e){
		console.log(e)
	}
}
export const getTrendsSerial = () => async  (dispatch) => {
	
	try{
		dispatch(movieSlice.actions.getLoading())
		const response = await getTrendSerial()

	

		if (response.status === 200){
			dispatch (movieSlice.actions.getTrendSerialsSuccess(response))
		}
		}catch(e){
			console.log(e)
		}
	}


	export const getInfo = (type,id) => async (dispatch) => {
		try {
			dispatch(movieSlice.actions.getLoading())
			const response = await fetchInfo(type,id)
			if (response.status === 200){
				
				dispatch(movieSlice.actions.getInfoSuccess(response))
			}
		}catch(e){
			console.log(e)

		}

	}


	export const getSearch =(query,page=1) => async ( dispatch) => {
		try{
			dispatch(movieSlice.actions.getLoading())
			const response = await Search (query,page) 
			if(response.status === 200){
				dispatch(movieSlice.actions.getSearch(response))
			}
		}catch(e){
			console.log(e)
		}
	}

	export const addToFavorites = (movie) => (dispatch) => {
		dispatch (movieSlice.actions.addFavorites(movie))
	}
	export const removeToFavorites = (movie) => (dispatch) => {
		dispatch (movieSlice.actions.removeFavorites(movie))
	}


export const getMovies = (page=1) => async (dispatch) =>{
	try{
		dispatch(movieSlice.actions.getLoading())
			const response = await fetchMovies(page)
			
			if(response.status === 200){
				dispatch(movieSlice.actions.getMovie(response))
			}
	}
	catch(e){
		console.log(e)
	}
}
export const getSerials = (page=1) => async (dispatch) =>{
	try{
		dispatch(movieSlice.actions.getLoading())
			const response = await fetchSerials(page)
			if(response.status === 200){
				dispatch(movieSlice.actions.getSerial(response))
			}
	}
	catch(e){
		console.log(e)
	}
}