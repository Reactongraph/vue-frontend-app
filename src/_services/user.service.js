import Request from './apiCaller';

export const userService = {
    login,
    logout,
    register,
};

async function login(username, password) {
    // login for existing user
    let res = await Request(`/login`,'post', ({ email:username, password }))
    if(res.token)
      localStorage.setItem('user', JSON.stringify(res));
    return res;
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

async function register(user) {
  let res = await Request(`/register`,'post', ({ email:user.username, password:user.password }))
  if(res.token)
    localStorage.setItem('user', JSON.stringify(res));
  return res;
}