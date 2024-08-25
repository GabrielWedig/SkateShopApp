export interface Paged<T> {
  hasNextPage: boolean
  hasPreviousPage: boolean
  items: T[]
  page: number
  size: number
  total: number
}

export interface Option {
  id: string
  value: string
}
