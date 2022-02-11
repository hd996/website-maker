import axios from 'axios'

export const Axios = axios.create({
  baseURL: '/api',
  withCredentials: true,
  timeout: 30000,
})
