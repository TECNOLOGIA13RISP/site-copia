import axios from 'axios'
import { parseCookies } from 'nookies'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getAPIClient(ctx?: any) {
  const { 'nextauth.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: process.env.API_URL || 'https://wwww.13registro.com.br/api'
  })

  api.interceptors.request.use((config) => {
    return config
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }
  api.defaults.withCredentials = true

  return api
}
