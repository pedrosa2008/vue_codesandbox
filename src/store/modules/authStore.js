import usuarioApi from "@/api/authApi";
import router from "@/router";
import { Toast, Snackbar } from "buefy";

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
  authenticate({ commit }, usuario) {
    commit("setLoading", true);

    usuarioApi
      .authenticate(usuario)
      .then(usuarioLogado => {
        commit("setUsuarioLogado", usuarioLogado);
        commit("setAuthenticated", true);
        commit("setLoading", false);
        router.push("/dashboard");
      })
      .catch(error => {
        commit("setUsuarioLogado", { erro: "Login e/ou Senha inválidos." });
        commit("setAuthenticated", false);
        commit("setLoading", false);
      });
  },
  logout({ commit }) {
    commit("setUsuarioLogado", {});
    commit("setAuthenticated", false);
    router.push("/");

    Toast.open({
      message: "Logout efetuado com sucesso!",
      type: "is-info"
    });

    //Snackbar.open('Logout efetuado com sucesso!');
  }
};

// mutations
const mutations = {
  setUsuarioLogado(state, usuario) {
    state.usuarioLogado = usuario;
  },
  setAuthenticated(state, authenticated) {
    state.authenticated = authenticated;
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
