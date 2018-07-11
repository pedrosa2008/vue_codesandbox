import apiUsuarios from '../../api/usuarios'

// initial state
const state = {
  lista: [],
  itemSelecionado: {},
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
  },
  setUsuarioSelecionado({ commit }, usuario) {
    commit('setItemSelecionado', usuario);
  }
};

// mutations
const mutations = {
  setUsuarios(state, lista) {
    state.lista = lista;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setItemSelecionado(state, itemSelecionado) {
    state.itemSelecionado = itemSelecionado;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};