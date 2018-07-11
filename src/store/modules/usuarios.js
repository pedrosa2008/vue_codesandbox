import apiUsuarios from '../../api/usuarios'

// initial state
const state = {
  lista: [],
  loading: false
};

// getters
const getters = {};

// actions
const actions = {
  getAllUsuarios({ commit }) {
    commit('setLoading', true);
    
    apiUsuarios.getAll()
      .then((lista) => {
        commit('setUsuarios', lista);
        commit('setLoading', false);
      })
      .catch((error) => {
        commit('setUsuarios', []);
        commit('setLoading', false);
      });
  }
};

// mutations
const mutations = {
  setUsuarios(state, lista) {
    state.lista = lista;
  },
  setLoading(state, loading) {
    state.loading = loading;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};