import api from './apiAction';

export const loginAction = async (username, password) => {
  try {
    const ret = await api.post('/login', {
      username,
      password
    });
    const res = ret.data;
    if (res.status === true) {
      console.log(res.data);
      localStorage.setItem('user_email', res.data.user.email);
      localStorage.setItem('user_username', res.data.user.username);
      localStorage.setItem('user_avatar', res.data.user.avatar);
      localStorage.setItem('user_id', res.data.id);
      localStorage.setItem('user_avatar', res.data.user.avatar);
      localStorage.setItem('user_avatar', res.data.user.avatar);
      return true;
    } else {
      console.log('Action: login failed: ', res.err);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log('Action: login error: ', errors);
    return false;
  }
};

export const registerAction = async (email, username, password) => {
  try {
    const now = new Date();
    let timezone = now.getTimezoneOffset();
    const ret = await api.post('/register', {
      username,
      email,
      password,
      timezone
    });
    const res = ret.data;
    if (res.status === true) {
      console.log('registration success');
      return 'true';
    } else {
      console.log('Action: Register failed: ', res.err);
      return 'false';
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' Auth function error', errors);
    return 'false';
  }
};

export const removeUserAction = async (id) => {
  try {
    const ret = await api.post('/removeUserbyID', { id });
    const res = ret.data;
    return res.status;
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' removeUserAction function error', errors);
    return false;
  }
};

export const getUserInfo = async (id) => {
  try {
    const ret = await api.post('/getUserById', { id });
    const res = ret.data;
    if (res.status) return res.data.user;
    else return false;
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' getUserInfo function error', errors);
    return false;
  }
};

export const logoutAction = () => {
  console.log('Action: logout action execute');
  localStorage.removeItem('user_id');
};
