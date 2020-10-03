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
    getBeers(perPage, page, searchUrl='') {
      return apiClient.get('/beers?per_page=' + perPage + '&page=' + page + '&' + searchUrl)
    },

    getBeer(id){
      return apiClient.get('/beers/' + id)
    },

    randomiseBeer(){
      return apiClient.get('/beers/random')
    }
    
}