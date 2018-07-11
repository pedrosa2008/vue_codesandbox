import usuarios from '../../api/usuarios'

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllUsuarios({ commit }) {
    usuarios.getUsuarios(usuarios => {
      commit('setUsuarios', usuarios)
    })
  }
}

// mutations
const mutations = {
  setUsuarios(state, usuarios) {
    state.all = usuarios
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}