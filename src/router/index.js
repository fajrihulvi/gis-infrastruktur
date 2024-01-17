import Home from '../pages/Home';
import AdminDashboard from '../pages/admin/Dashboard';
import AdminFormAddUserManagement from '../pages/admin/UserManagement/Form/add';
import AuthLogin from '../pages/admin/auth/login';
import AdminFormEditUserManagement from '../pages/admin/UserManagement/Form/edit';
import AdminInfrastructureCategory from '../pages/admin/InfrastructureCategory';
import AdminFormAddInfrastructureCategory from '../pages/admin/InfrastructureCategory/Form/add';
import AdminFormEditInfrastructureCategory from '../pages/admin/InfrastructureCategory/Form/edit';
import UserAuthLogin from '../pages/User/Auth/login';
import UserAuthRegister from '../pages/User/Auth/register';
import AdminUserManagement from '../pages/admin/UserManagement';


export const routes = [
  {
    name: 'User Login',
    url: '/user/login',
    component: UserAuthLogin
  },
  {
    name: 'User Register',
    url: '/user/register',
    component: UserAuthRegister
  },
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
  },
  {
    name: 'Admin Form Add User Management',
    url: '/admin/user-management/add',
    component: AdminFormAddUserManagement
  },
  {
    name: 'Admin Form Edit User Management',
    url: '/admin/user-management/edit',
    component: AdminFormEditUserManagement
  },
  {
    name: 'Admin Inrastructure Category',
    url: '/admin/infrastructure-category',
    component: AdminInfrastructureCategory
  },
  {
    name: 'Admin Inrastructure Category',
    url: '/admin/infrastructure-category/add',
    component: AdminFormAddInfrastructureCategory
  },
  {
    name: 'Admin Inrastructure Category',
    url: '/admin/infrastructure-category/edit',
    component: AdminFormEditInfrastructureCategory
  },
]