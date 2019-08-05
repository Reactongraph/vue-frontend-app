// ======================== USER STATE INITIALIZATION =========================
const user = JSON.parse(localStorage.getItem('user'));
export default  user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };
