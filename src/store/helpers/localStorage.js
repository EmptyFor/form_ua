export const setToken = (token) => {
    localStorage.setItem('firm-token', token);
  }
  
  export const getToken = () => {
    return localStorage.getItem('firm-token');
  }
  
  export const removeToken = () => {
    localStorage.removeItem('firm-token');
  }