export interface GetMapsReq {
  page: number
  size: number
}
export interface Maps {
  id: number
  name: string
  houses: number
}

export interface GetMapsRes {
  currentPage: number
  totalPages: number
  pageSize: number
  totalItems: number
  data: Maps[]
}
