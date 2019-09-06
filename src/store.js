import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    riskFilter: "",
    currencyFilter: "",
    next: {},
    previous: {},
    currentAssets: [],
    current: null
  },
  mutations: {
    addCurrentList(state, data) {
      state.currentAssets = data.currentAssets;
      state.riskFilter = data.riskFilter;
      state.currencyFilter = data.currencyFilter;
    },
    addCurrent(state, data) {
      state.next = data.next;
      state.previous = data.previous;
      state.current = data.current
    }
  },
  actions: {
    saveAssets({ commit, state }, current) {
      let assets = {
        next: {},
        previous: {},
        current: null
      };

      let actual = 0;

      state.currentAssets.forEach((asset, index) => {
        if (asset.id === parseInt(current)) {
          actual = index;
          assets.current = parseInt(current)
        }
      });

      if (actual === 0 && actual === state.currentAssets.length - 1) {
        assets.previous = state.currentAssets[actual];
        assets.next = state.currentAssets[actual];
      } else if (actual === state.currentAssets.length - 1) {
        assets.previous = state.currentAssets[actual - 1];
        assets.next = state.currentAssets[0];
      } else if (actual === 0) {
        assets.previous = state.currentAssets[state.currentAssets.length - 1];
        assets.next = state.currentAssets[actual + 1];
      } else {
        assets.previous = state.currentAssets[actual - 1];
        assets.next = state.currentAssets[actual + 1];
      }

      commit("addCurrent", assets);
    }
  }
});
