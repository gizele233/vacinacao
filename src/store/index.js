import Vue from 'vue'
import Vuex from 'vuex'
// import QuestionarioService from "@/services/questionarioService.js";
import Api from "@/services/config.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questionarios: [],
    questionario: null,
  },

  mutations: {
    SET_QUESTIONARIOS(state, questionarios ){
      state.questionarios = questionarios;
    },
    SET_QUESTIONARIO(state, questionario){
      state.questionario = questionario;
    }
  },

  actions: {
    async loadQuestionarios({commit}){
      let response = await Api().get('formulario/find-all');
      commit('SET_QUESTIONARIOS', response.data);
    },

    async loadQuestionario({commit}, questionarioId){
      let response = await Api().get(`formulario/find-by-id/{formularioId}/${questionarioId}`)
      commit('SET_QUESTIONARIO', response.data);
    } 
  },
  
  modules: {
  }
})
