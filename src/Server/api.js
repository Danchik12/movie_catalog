import axios from 'axios'

const api =axios.create({
baseURL:process.env.REACT_APP_API_URL,



}
)

api.interceptors.request.use(config =>{
	config.url =config.url +  '?api_key='+process.env.REACT_APP_API_KEY+'&language=ru-RU'
	return config
})


export default api