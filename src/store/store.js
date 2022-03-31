import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './slices/MovieSlice'
export const store = configureStore({
  reducer: {movie:movieReducer,},
  middleware:((getDefault)=>getDefault({
    serializableCheck:false
  }))
})