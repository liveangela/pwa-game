import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  key: 'pwa-game-store',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    activeRole: null,
    isBottomNavShown: true
  },
  mutations: {
    setActiveRole(state, val) {
      state.activeRole = val
    },
    setBottomNavShown(state, val) {
      state.isBottomNavShown = val
    }
  },
  actions: {
    setActiveRole({commit}, val) {
      commit('setActiveRole', val)
    },
    setBottomNavShown({commit}, val) {
      commit('setBottomNavShown', val)
    }
  },
  plugins: [vuexLocal.plugin]
})
