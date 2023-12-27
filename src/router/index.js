import Home from '../pages/Home';
import AuthLogin from '../pages/admin/auth/login';


export const routes = [
  {
    name: 'Home',
    url: '/',
    component: Home
  },
  {
    name: 'Admin Login',
    url: '/admin/login',
    component: AuthLogin
  }
]