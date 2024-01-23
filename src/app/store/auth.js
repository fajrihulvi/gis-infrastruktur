const USER_LOCAL_STORAGE_KEY = 'USER';
const TOKEN_LOCAL_STORAGE_KEY = 'TOKEN';

export function saveAuth(user) {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user.data));
  localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(user.token));
}

export function getUser() {
  const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return user ? JSON.parse(user) : undefined;
}

export function isAuthenticate(){
  // Check if the JWT token is present in local storage
  const token = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);
  return !!token;
}

export function getToken() {
  const token = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);
  return token ? JSON.parse(token) : undefined;
}

export function removeAuth() {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
}