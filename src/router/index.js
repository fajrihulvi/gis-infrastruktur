import Home from '../pages/Home';
import AdminUserManagement from '../pages/Admin/UserManagement';
import AdminDashboard from '../pages/Admin/Dashboard';
import AdminFormAddUserManagement from '../pages/Admin/UserManagement/Form/add';
import AuthLogin from '../pages/Admin/Auth/Login';
import AdminFormEditUserManagement from '../pages/Admin/UserManagement/Form/edit';
import AdminInfrastructureCategory from '../pages/Admin/InfrastructureCategory';
import AdminFormAddInfrastructureCategory from '../pages/Admin/InfrastructureCategory/Form/add';
import AdminFormEditInfrastructureCategory from '../pages/Admin/InfrastructureCategory/Form/edit';
import AdminMasterSHP from '../pages/admin/MasterSHP/index';


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
    component: AdminDashboard,
    isAdmin: true
  },
  {
    name: 'Admin User Management',
    url: '/admin/user-management',
    component: AdminUserManagement,
    isAdmin: true
  },
  {
    name: 'Admin Form Add User Management',
    url: '/admin/user-management/add',
    component: AdminFormAddUserManagement,
    isAdmin: true
  },
  {
    name: 'Admin Form Edit User Management',
    url: '/admin/user-management/edit',
    component: AdminFormEditUserManagement,
    isAdmin: true
  },
  {
    name: 'Admin Inrastructure Category',
    url: '/admin/infrastructure-category',
    component: AdminInfrastructureCategory,
    isAdmin: true
  },
  {
    name: 'Admin Inrastructure Category',
    url: '/admin/infrastructure-category/add',
    component: AdminFormAddInfrastructureCategory,
    isAdmin: true
  },
  {
    name: 'Admin Inrastructure Category',
    url: '/admin/infrastructure-category/edit',
    component: AdminFormEditInfrastructureCategory,
    isAdmin: true
  },
  {
    name: 'Admin Master SHP',
    url: '/admin/master-shp',
    component: AdminMasterSHP,
    isAdmin: true
  },
]