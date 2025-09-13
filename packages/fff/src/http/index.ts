import axios from 'axios'

const request = axios.create({
  timeout: 60 * 1000,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
})

export { request }
