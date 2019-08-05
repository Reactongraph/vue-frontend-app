import { userService } from '../../_services';
import router from '../../routes';

// ======================== USER ACTIONS =========================
export default {
  login({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username });
    userService.login(username, password)
      .then(
          user => {
              commit('loginSuccess', user);
              router.push('/');
          },
          error => {
              commit('loginFailure', error);
          }
      );
  },

  logout({ commit }) {
      userService.logout();
      commit('logout');
      router.push('/login');
  },

  register({ dispatch, commit }, user) {
    commit('registerRequest', user);
    userService.register(user)
      .then(
          user => {
              commit('registerSuccess', user);
              router.push('/login');
          },
          error => {
              commit('registerFailure', error);
          }
      );
  }
};