import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";
//import createLogger from "@/plugins/logger";

import usuarioStore from "./modules/usuarioStore";
import authStore from "./modules/authStore";
import testStore from "./modules/testStore";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    authStore,
    usuarioStore,
    testStore
  },
  strict: debug,
  plugins: /*debug
    ? [createLogger(), createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })]
    : */ [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
});
