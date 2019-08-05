import state from './state';
import actions from './actions';
import mutations from './mutations';

// ======================== USER ( BINDING ) =========================
export const account = {
  namespaced: true,
  state,
  actions,
  mutations
};
