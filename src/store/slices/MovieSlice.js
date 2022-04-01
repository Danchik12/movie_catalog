import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies:{},
  serials:{},
  info:{},
  search:{},
  isLoading:true,
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
  getTrendMoviesSuccess:(state,action) =>{
      state.movies = action.payload.data;
     
    }
  ,
  getLoading:(state) =>{
    state.isLoading=true;
  },

    getTrendSerialsSuccess:(state,action) =>{
      state.serials = action.payload.data;
      state.isLoading=false;
      
    }

  
  },
})


export const { getTrendMoviesSuccess,getTrendSerialsSuccess,getLoading} = movieSlice.actions

export default movieSlice.reducer