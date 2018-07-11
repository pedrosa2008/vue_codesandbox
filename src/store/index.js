import Vue from 'vue';
import Vuex from 'vuex';

import usuarios from './modules/usuarios';

import createLogger from '../plugins/logger';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    usuarios
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});