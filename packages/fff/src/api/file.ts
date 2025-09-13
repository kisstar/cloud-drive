import type { FileInfo } from '@/types/file'
import type { RequestResponse } from '@/types/service'
import { request } from '@/http'

export const fileApi = {
  requestFileList(requestConfig?: { signal?: AbortSignal }) {
    return request.get<RequestResponse<FileInfo[]>>('/api/file/list', requestConfig)
  },
}
