import { request as httpClient } from '@/http/instance'
import { Request } from '@/http/request'

const request = new Request(httpClient)

export { request }
