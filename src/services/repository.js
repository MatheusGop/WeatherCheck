import axios from 'axios'
import API_URL from './constant'

const baseURL = API_URL

let axiosApi = axios.create({
  baseURL
}, 20000)

export default axiosApi;