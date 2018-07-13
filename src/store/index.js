import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from '@/plugins/logger';

import usuarioStore from './modules/usuarioStore';
import authStore from './modules/authStore';
import testStore from './modules/testStore';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    authStore,
    usuarioStore,
    testStore
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});