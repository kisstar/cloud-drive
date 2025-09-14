import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { RequestResponse } from '@/types/service'

class Request {
  httpClient: AxiosInstance

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.httpClient.get<RequestResponse<T>>(url, config)

    return response.data.data
  }
}

export { Request }
