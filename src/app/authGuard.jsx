import { Outlet, Navigate } from 'react-router-dom';
import { isAuthenticate } from './store/auth';

// eslint-disable-next-line react/prop-types
export function AuthGuard({ isPrivate }) {
  const signedIn = isAuthenticate();

  if (!signedIn && isPrivate) {
    return <Navigate to='/admin/login' replace />;
  }

  return <Outlet />;
}