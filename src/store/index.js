import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from '@/plugins/logger';

import testStore from './modules/testStore';
import usuarioStore from './modules/usuarioStore';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    testStore,
    usuarioStore
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});