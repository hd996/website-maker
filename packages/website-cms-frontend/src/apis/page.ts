import { Axios } from './axios'
import { ListRequest, ListResponse } from '../model'

export interface Page extends ListResponse {
  title: string
  description: string
  keywords: string
  route: string
  metadata: string
}

export const GetPageListAPI = ({
  page,
  pageSize,
  keywords,
}: ListRequest): Promise<{ data: { total: number; list: Page[] } }> => {
  return Axios.get('/page/list', {
    params: {
      page,
      pageSize,
      keywords,
    },
  })
}

export const GetPageAPI = (id: string): Promise<{ data: Page }> => {
  return Axios.get(`/page/${id}`)
}

export const DelPageAPI = (id: string): Promise<{ data: void }> => {
  return Axios.delete(`/page/${id}`)
}
