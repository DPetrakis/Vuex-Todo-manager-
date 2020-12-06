import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(Vuex);

export default new Vuex.Store({
  
  state: {},
  mutations: {},
  actions: {},
  
  modules: {
    todos
  }
  

});
