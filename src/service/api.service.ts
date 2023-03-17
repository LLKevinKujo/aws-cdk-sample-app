import axios from 'axios';

const apiConfig = {
  baseURL: 'https://dummy.restapiexample.com/api/v1/employees',
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
