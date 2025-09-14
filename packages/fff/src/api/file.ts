import type { FileInfo } from '@/types/file'
import { request } from '@/http'

export const fileApi = {
  requestFileList(requestConfig?: { signal?: AbortSignal }): Promise<FileInfo[]> {
    return request.get<FileInfo[]>('/api/file/list', requestConfig)
  },
}
