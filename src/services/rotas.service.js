import Vue from "vue";

export default {
  recuperarRota(rotaId){
    return Vue.axios.get("http://localhost:80/rotten_tomatoes/API.php?route=" + rotaId);
  }
}