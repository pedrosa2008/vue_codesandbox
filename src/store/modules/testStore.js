import testApi from '@/api/testApi'

// initial state
const state = {
  lista: [],
  item: {},
  loading: false
};

// getters
const getters = {};

// actions
const actions = {
  getAll({ commit }) {
    commit('setLoading', true);
    
    testApi.getAll()
      .then((lista) => {
        commit('setLista', lista);
        commit('setLoading', false);
      })
      .catch((error) => {
        commit('setLista', []);
        commit('setLoading', false);
      });
  },
  setItem({ commit }, item) {
    commit('setItem', item);
  }
};

// mutations
const mutations = {
  setLista(state, lista) {
    state.lista = lista;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setItem(state, item) {
    state.item = item;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};