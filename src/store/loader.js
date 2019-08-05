// ======================== APP LOADER INITIALIZATION =========================
const state = {
  loading:false
}

// ======================== APP LOADING MUTATIONS =========================
const mutations = {
    LOADER(state, status) {
        state.loading = status;
    },
};

// ======================== APP LOADING ( BINDING ) =========================
export const loader = {
    namespaced: true,
    state,
    mutations
};
