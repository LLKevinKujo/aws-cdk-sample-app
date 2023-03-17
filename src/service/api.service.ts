import axios from 'axios';

const apiConfig = {
  baseURL: 'http://localhost:3001/api/v1/',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
}

const axiosInstance = axios.create(apiConfig);
axiosInstance.interceptors.request.use((config) => {
  const authorization = localStorage.getItem("score_pit_manager_jwt")
  if(authorization && config.headers) {
    config.headers.Authorization = `Bearer ${authorization}`
  }
  return config
})

export default axiosInstance
