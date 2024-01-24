import Home from '../pages/Home';
import AdminDashboard from '../pages/Admin/Dashboard';
import AdminFormAddUserManagement from '../pages/Admin/UserManagement/Form/add';
import AuthLogin from '../pages/Admin/Auth/login';
import AdminFormEditUserManagement from '../pages/Admin/UserManagement/Form/edit';
import AdminInfrastructureCategory from '../pages/Admin/InfrastructureCategory';
import AdminFormAddInfrastructureCategory from '../pages/Admin/InfrastructureCategory/Form/add';
import AdminFormEditInfrastructureCategory from '../pages/Admin/InfrastructureCategory/Form/edit';
import UserAuthLogin from '../pages/User/Auth/login';
import UserAuthRegister from '../pages/User/Auth/register';
import AdminUserManagement from '../pages/Admin/UserManagement';


export const routes = [
  {
    isProtected: false,
    name: 'User Login',
    url: '/user/login',
    component: UserAuthLogin
  },
  {
    isProtected: false,
    name: 'User Register',
    url: '/user/register',
    component: UserAuthRegister
  },
  {
    isProtected: false,
    name: 'Home',
    url: '/',
    component: Home
  },
  {
    isProtected: false,
    name: 'Admin Login',
    url: '/admin/login',
    component: AuthLogin
  },
  {
    isProtected: true,
    name: 'Admin Dashboard',
    url: '/admin/dashboard',
    component: AdminDashboard
  },
  {
    isProtected: true,
    name: 'Admin User Management',
    url: '/admin/user-management',
    component: AdminUserManagement
  },
  {
    isProtected: true,
    name: 'Admin Form Add User Management',
    url: '/admin/user-management/add',
    component: AdminFormAddUserManagement
  },
  {
    isProtected: true,
    name: 'Admin Form Edit User Management',
    url: '/admin/user-management/edit/:id',
    component: AdminFormEditUserManagement
  },
  {
    isProtected: true,
    name: 'Admin Inrastructure Category',
    url: '/admin/infrastructure-category',
    component: AdminInfrastructureCategory
  },
  {
    isProtected: true,
    name: 'Admin Inrastructure Category',
    url: '/admin/infrastructure-category/add',
    component: AdminFormAddInfrastructureCategory
  },
  {
    isProtected: true,
    name: 'Admin Inrastructure Category',
    url: '/admin/infrastructure-category/edit',
    component: AdminFormEditInfrastructureCategory
  },
]