import axios from 'axios'
import { createError } from '@/utils/error'

const request = axios.create({
  timeout: 60 * 1000,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
})

request.interceptors.response.use((response) => {
  const { code, message } = response.data

  if (code === 0) {
    return response
  }
  else {
    const errorInfo = createError({
      name: 'FffError',
      code: code || 'ERR_NETWORK',
      message: message || 'Network Error',
      config: response.config,
      request: response.request,
    })

    return Promise.reject(errorInfo)
  }
})

export { request }
