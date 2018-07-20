import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";
import createLogger from "@/plugins/logger";

import usuarioStore from "./modules/usuarioStore";
import authStore from "./modules/authStore";
import testStore from "./modules/testStore";

const debug = process.env.NODE_ENV !== "production";
var in30Minutes = 1 / 48;

Vue.use(Vuex);

const persistedState = createPersistedState({
  storage: {
    getItem: key => Cookies.get(key),
    setItem: (key, value) =>
      Cookies.set(key, value, { expires: in30Minutes, secure: true }),
    removeItem: key => Cookies.remove(key)
  }
});

export default new Vuex.Store({
  modules: {
    authStore,
    usuarioStore,
    testStore
  },
  strict: debug,
  plugins: debug ? [createLogger(), persistedState] : [persistedState]
});
