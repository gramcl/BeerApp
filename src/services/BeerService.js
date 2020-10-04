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
      let url = '/beers?per_page=' + perPage + '&page=' + page
      if(searchUrl !== "") { url += '&' + searchUrl }
      console.log(url)
      return apiClient.get(url)
    },

    getBeer(id){
      return apiClient.get('/beers/' + id)
    },

    randomiseBeer(){
      return apiClient.get('/beers/random')
    }
    
}