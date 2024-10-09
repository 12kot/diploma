import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { APP_ROUTES, AuthProvider } from 'features';

import { PublicRoutes, PrivateRoutes } from 'components';

const Login = lazy(() => import('pages/Auth/Login'));
const Registration = lazy(() => import('pages/Auth/Registration'));
const Recovery = lazy(() => import('pages/Auth/Recovery'));
const Dashboard = lazy(() => import('pages/Account/Dashboard'));
const Users = lazy(() => import('pages/Account/Users'));
const Profile = lazy(() => import('pages/Account/Profile'));
const Settings = lazy(() => import('pages/Account/Settings'));
const Applications = lazy(() => import('pages/Account/Applications'));

import './scss/App.scss';
import i18n from './locales/config';
i18n.init();

const App = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<>Loader</>}>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path={APP_ROUTES.AUTH.LOGIN} element={<Login />} />
            <Route path={APP_ROUTES.AUTH.REGISTRATION} element={<Registration />} />
            <Route path={APP_ROUTES.AUTH.RECOVERY} element={<Recovery />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route path={APP_ROUTES.DASHBOARD.INDEX} element={<Dashboard />} />
            <Route path={APP_ROUTES.DASHBOARD.USER_TYPE} element={<Users />} />
            <Route path={APP_ROUTES.DASHBOARD.PROFILE} element={<Profile />} />
            <Route path={APP_ROUTES.DASHBOARD.SETTINGS} element={<Settings />} />
            <Route path={APP_ROUTES.DASHBOARD.APPLICATIONS} element={<Applications />} />
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
};

export default App;
