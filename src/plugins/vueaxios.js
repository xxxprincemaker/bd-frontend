import Vue from "vue";
import axios from "axios"
import VueAxios from "vue-axios";


const instance = axios.create({
  baseURL: process.env.Vue_Api
});

Vue.use(VueAxios, instance)
