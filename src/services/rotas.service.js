import Vue from "vue";

export default {
  recuperarRota(rotaId){
    return Vue.axios.get(rotaId);
  }
}