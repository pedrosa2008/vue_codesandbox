import testApi from "@/api/testApi";

// initial state
const state = {
  lista: [],
  loading: false
};

// getters
const getters = {
  lista: state => {
    return state.lista;
  },
  loading: state => {
    return state.loading;
  }
};

// actions
const actions = {
  getAll({ commit }) {
    commit("setLoading", true);

    testApi
      .getAll()
      .then(lista => {
        commit("setLista", lista);
        commit("setLoading", false);
      })
      .catch(error => {
        commit("setLista", []);
        commit("setLoading", false);
      });
  }
};

// mutations
const mutations = {
  setLista(state, lista) {
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
