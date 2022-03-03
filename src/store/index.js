import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchDataTMDBAPI: []
  },
  getters: {},
  mutations: {
    popularSearchDataTMDBAP: (state, data) => {
      state.searchDataTMDBAPI = data;
    }
  },
  actions: {},
  modules: {},
});
