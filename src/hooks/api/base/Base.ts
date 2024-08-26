export interface Paged<T> {
  items: T[]
  page: number
  size: number
  total: number
}

export interface Option {
  id: string
  value: string
}
