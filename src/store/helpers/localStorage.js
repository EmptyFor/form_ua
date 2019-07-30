export const setToken = (token) => {
  return localStorage.setItem('firm-token', token);
}

export const getToken = () => {
  return localStorage.getItem('firm-token');
}

export const removeToken = () => {
  return localStorage.removeItem('firm-token');
}

// user info 

export const setInfo = (id) => {
  return localStorage.setItem('firm-id', id);
}

export const getInfo = () => {
  return localStorage.getItem('firm-id');
}

export const removeInfo = () => {
  return localStorage.removeItem('firm-id');
}