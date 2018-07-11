import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from '../plugins/logger';

import usuarios from './modules/usuarios';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    usuarios
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});