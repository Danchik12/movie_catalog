import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies:{},
  serials:{},
  favorites:localStorage.getItem('bookmarks') 
  ? JSON.parse(localStorage.getItem('bookmarks')) 
  : [],
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
      
    },
    getInfoSuccess:(state,action) => {

    state.info = action.payload.data;
    state.isLoading=false;

  },
  getSearch:(state,action)=>{
    state.search=action.payload.data;
    state.isLoading=false;
  },
  addFavorites:(state,action) => {
  
   state.favorites=[action.payload,...state.favorites]
  },
  removeFavorites:(state,action) => {
     state.favorites=state.favorites.filter((movie=> movie.id !== action.payload.id))
  },

  
  },
  
})


export const { getTrendMoviesSuccess,getTrendSerialsSuccess,getLoading,getInfoSuccess,addFavorites,removeFavorites} = movieSlice.actions

export default movieSlice.reducer