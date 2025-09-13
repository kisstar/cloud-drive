import { fileApi } from '@cloud-drive/fff'
import { useQuery } from '@tanstack/vue-query'

export function requestFileList() {
  return useQuery({
    queryKey: ['fileList'],
    queryFn: ({ signal }) => fileApi.requestFileList({ signal }),
  })
}
