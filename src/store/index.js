import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /*searchText: '', */
    beers: []
  },
  mutations: {
    PUSH(state, beer) {
      state.beers.push( beer )
    },
    DELETE(state, beerToRemove) {
      state.beers = state.beers.filter(
        beer => beer.id !== beerToRemove.id
      )
    }
  },
  actions: {
    add({ commit }, beer) {
      console.log("Item to push:" + beer.id)
      commit('PUSH', beer)
    },
    remove({ commit }, beerToRemove) {
      commit('DELETE', beerToRemove)
    }
  },
  modules: {}
});
