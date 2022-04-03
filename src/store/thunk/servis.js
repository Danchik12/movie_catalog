import {getTrendMovie,getTrendSerial,fetchInfo,Search} from './../../Server/Server'
import {movieSlice} from './../slices/MovieSlice'

export const getTrendsMovie = () => async (dispatch) => {

	try {
		dispatch(movieSlice.actions.getLoading())
		const res = await getTrendMovie()
		if (res.status === 200){
			dispatch (movieSlice.actions.getTrendMoviesSuccess(res))
		}
		
		
	}catch(e){
		console.log(e)
	}
}
export const getTrendsSerial = () => async (dispatch) => {
	
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


	export const getSearch =(query) => async( dispatch) => {
		try{
			dispatch(movieSlice.actions.getLoading())
			const response =await Search (query) 
			if(response.status === 200){
				dispatch(movieSlice.actions.getSearch(response))
			}
		}catch(e){
			console.log(e)
		}
	}

