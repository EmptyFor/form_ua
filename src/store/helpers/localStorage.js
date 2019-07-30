export const setToken = (token) => {
  return localStorage.setItem('firm-token', token);
}

export const getToken = () => {
  return localStorage.getItem('firm-token');
}

export const removeToken = () => {
  return localStorage.removeItem('firm-token');
}