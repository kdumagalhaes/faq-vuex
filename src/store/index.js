import { createStore } from 'vuex';
import { faqCategories } from '../utils/db.json';

export default createStore({
  state: {
    faqCategories: [],
    singleCategory: {},
    singleQuestion: {},
    currentComponent: 'FaqCategories',
  },
  mutations: {
    SET_FAQ_CATEGORIES(state, payload) {
      state.faqCategories = payload;
    },
    SET_CURRENT_COMPONENT(state, payload) {
      state.currentComponent = payload;
    },
    SET_SINGLE_CATEGORY(state, payload) {
      state.singleCategory = payload;
    },
    SET_SINGLE_QUESTION(state, payload) {
      state.singleQuestion = payload;
    },
  },
  actions: {
    fetchFaqCategories({ commit }) {
      const apiData = faqCategories;
      commit('SET_FAQ_CATEGORIES', apiData);
    },
    changeCurrentComponent({ commit }, payload) {
      commit('SET_CURRENT_COMPONENT', payload);
    },
    getSingleCategory({ commit }, payload) {
      commit('SET_SINGLE_CATEGORY', payload);
    },
    getSingleQuestion({ commit }, payload) {
      commit('SET_SINGLE_QUESTION', payload);
    },
  },
  getters: {
    $allFaqCategories(state) {
      return state.faqCategories;
    },
    $currentComponent(state) {
      return state.currentComponent;
    },
    $singleCategory(state) {
      return state.singleCategory;
    },
    $singleQuestion(state) {
      return state.singleQuestion;
    },
  },
});
