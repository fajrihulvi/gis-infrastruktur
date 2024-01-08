import React from "react";
import { FiFileText, FiHome, FiMail, FiUsers } from "react-icons/fi";
import { HiOutlineBuildingOffice2, HiOutlineFolderOpen } from "react-icons/hi2";

const adminMenu = [
  {
    url: '/admin/dashboard',
    label: 'Dashboard',
    icon: React.createElement(FiHome, {size: '24px'})
  },
  {
    url: '/admin/user-management',
    label: 'User Management',
    icon: React.createElement(FiUsers, {size: '24px'})
  },
  {
    url: '/admin/infrastructure-category',
    label: 'Kategori Infrastruktur',
    icon: React.createElement(HiOutlineBuildingOffice2, {size: '24px'})
  },
  {
    url: '/admin/log-activity',
    label: 'Log Activity',
    icon: React.createElement(FiFileText, {size: '24px'})
  },
  {
    url: '/admin/public-suggestion',
    label: 'Usulan Masyarakat',
    icon: React.createElement(FiMail, {size: '24px'}),
    group: 'master'
  },
  {
    url: '/admin/master-shp',
    label: 'Master Shape (SHP)',
    icon: React.createElement(HiOutlineFolderOpen, {size: '24px'}),
    group: 'master'
  },
]


export default adminMenu