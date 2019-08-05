// ======================== USER MUTATIONS =========================
export default {
  loginRequest(state, user) {
      state.status = {};
      state.user = user;
  },
  loginSuccess(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
  },
  loginFailure(state) {
      state.status = {};
      state.user = null;
  },
  logout(state) {
      state.status = {};
      state.user = null;
  },
  registerRequest(state, user) {
    state.status = {};
    state.user = user;
  },
  registerSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
  },
  registerFailure(state, error) {
    state.status = {};
    state.user = null;
  }
};