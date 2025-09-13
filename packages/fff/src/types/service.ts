export interface RequestResponse<T> {
  code: number
  message: string
  data: T
}
