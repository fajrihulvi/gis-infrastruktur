import Home from '../pages/Home';
import AdminDashboard from '../pages/Admin/Dashboard';
import AdminFormAddUserManagement from '../pages/Admin/UserManagement/Form/add';
import AuthLogin from '../pages/Admin/Auth/login';
import AdminFormEditUserManagement from '../pages/Admin/UserManagement/Form/edit';
import AdminInfrastructureCategory from '../pages/Admin/InfrastructureCategory';
import AdminFormAddInfrastructureCategory from '../pages/Admin/InfrastructureCategory/Form/add';
import AdminFormEditInfrastructureCategory from '../pages/Admin/InfrastructureCategory/Form/edit';
import AdminMasterSHP from '../pages/admin/MasterSHP/index';
import AdminFormMasterSHP from '../pages/admin/MasterSHP/FormAddSHP';
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
    component: AdminDashboard,
    isAdmin: true
  },
  {
    isProtected: true,
    name: 'Admin User Management',
    url: '/admin/user-management',
    component: AdminUserManagement,
    isAdmin: true
  },
  {
    isProtected: true,
    name: 'Admin Form Add User Management',
    url: '/admin/user-management/add',
    component: AdminFormAddUserManagement,
    isAdmin: true
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
    component: AdminInfrastructureCategory,
    isAdmin: true
  },
  {
    isProtected: true,
    name: 'Admin Inrastructure Category',
    url: '/admin/infrastructure-category/add',
    component: AdminFormAddInfrastructureCategory,
    isAdmin: true
  },
  {
    isProtected: true,
    name: 'Admin Inrastructure Category',
    url: '/admin/infrastructure-category/edit/:id',
    component: AdminFormEditInfrastructureCategory,
    isAdmin: true
  },
  {
    name: 'Admin Master SHP',
    url: '/admin/master-shp',
    component: AdminMasterSHP,
    isAdmin: true
  },
  {
    name: 'Admin Add Master SHP',
    url: '/admin/master-shp/add',
    component: AdminFormMasterSHP,
    isAdmin: true
  },
]