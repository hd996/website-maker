export interface ListRequest {
  page?: number
  pageSize?: number
  keywords?: string
}

export interface ListResponse {
  id: number
  createdTime: string
  updatedTime: string
  deletedTime: string
  createdBy: string
  updatedBy: string
  deletedBy: string
}
