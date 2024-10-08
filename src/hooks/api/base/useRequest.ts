import axios, { AxiosResponse } from 'axios'
import { useUserContext } from '../../contexts'

export const useRequest = (baseURL: string) => {
  const { getToken } = useUserContext()

  const instance = axios.create({
    baseURL: 'https://skateshopapi.onrender.com/api',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })

  const buildUrl = (url: string) => `${baseURL}/${url}`

  return {
    get: async <T = any>(url: string = ''): Promise<AxiosResponse<T>> =>
      await instance.get(buildUrl(url)),

    del: async <T = any>(url: string = ''): Promise<AxiosResponse<T>> =>
      await instance.delete(buildUrl(url)),

    put: async <T = any>(
      url: string = '',
      request?: any
    ): Promise<AxiosResponse<T>> => await instance.put(buildUrl(url), request),

    post: async <T = any>(
      url: string = '',
      request: any
    ): Promise<AxiosResponse<T>> => await instance.post(buildUrl(url), request)
  }
}
