import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://api.punkapi.com/v2/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
    getBeers(perPage, page) {
      return apiClient.get('/beers?per_page=' + perPage + '&page=' + page)
    }
}