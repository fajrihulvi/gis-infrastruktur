import Home from '../pages/Home';
import AuthLogin from '../pages/Admin/Auth/Login';
import AdminUserManagement from '../pages/Admin/UserManagement';
import AdminDashboard from '../pages/admin/dashboard';


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
  },
  {
    name: 'Admin Dashboard',
    url: '/admin/dashboard',
    component: AdminDashboard
  },
  {
    name: 'Admin User Management',
    url: '/admin/user-management',
    component: AdminUserManagement
  }
]