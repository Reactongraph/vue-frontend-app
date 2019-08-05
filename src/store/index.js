import Vue from 'vue';
import Vuex from 'vuex';

import { account } from './account';
import { loader } from './loader';

Vue.use(Vuex);

// ======================== MODULES BINDING =========================
export const store = new Vuex.Store({
    modules: {
        account,
        loader
    }
  });