import usuarioApi from '@/api/authApi';
import router from '@/router';

// initial state
const state = {
  usuarioLogado: {},
  authenticated: false,
  loading: false
};

// getters
const getters = {};

// actions
const actions = {
  authenticate({ commit }, login, senha) {
    commit('setLoading', true);

    usuarioApi.authenticate(login, senha)
      .then((usuario) => {
        commit('setUsuarioLogado', usuario);
        commit('setAuthenticated', true);
        commit('setLoading', false);
        router.push("/dashboard");
      })
      .catch((error) => {
        commit('setUsuarioLogado', {});
        commit('setAuthenticated', false);
        commit('setLoading', false);
      });
  },
  logout({ commit }) {
    commit('setUsuarioLogado', {});
    commit('setAuthenticated', false);
    router.push("/");
  }
};

// mutations
const mutations = {
  setUsuarioLogado(state, usuario) {
    state.usuarioLogado = usuario;
  },
  setAuthenticated(state, authenticated) {
    state.authenticated = authenticated;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};