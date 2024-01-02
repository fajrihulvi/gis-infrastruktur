import Home from '../pages/Home';
import AdminUserManagement from '../pages/Admin/UserManagement';
import AdminDashboard from '../pages/Admin/Dashboard';
import AdminFormAddUserManagement from '../pages/Admin/UserManagement/Form/add';
import AuthLogin from '../pages/Admin/Auth/Login';
import AdminFormEditUserManagement from '../pages/Admin/UserManagement/Form/edit';
import AdminInfrastructureCategory from '../pages/Admin/InfrastructureCategory';
import AdminFormAddInfrastructureCategory from '../pages/Admin/InfrastructureCategory/Form/add';
import AdminFormEditInfrastructureCategory from '../pages/Admin/InfrastructureCategory/Form/edit';


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