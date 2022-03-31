import {getTrendMovie,getTrendSerial} from './../../Server/Server'
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

	