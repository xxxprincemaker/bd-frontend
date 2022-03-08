import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchDataTMDBAPI: [],
    upcomingMovies: []
  },
  getters: {},
  mutations: {
    popularSearchDataTMDBAP: (state, data) => {
      state.searchDataTMDBAPI = data;
    },
    pupularUpcomingMovies: (state, data) => {
      state.upcomingMovies = data;
    }
  },
  actions: {},
  modules: {},
});
