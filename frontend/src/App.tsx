import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { APP_ROUTES, AuthProvider } from 'features';

import { PublicRoutes, PrivateRoutes } from 'components';

const Login = lazy(() => import('pages/Auth/Login'));
const Registration = lazy(() => import('pages/Auth/Registration'));
const Recovery = lazy(() => import('pages/Auth/Recovery'));
const Dashboard = lazy(() => import('pages/Account/Dashboard'));
const Forwarders = lazy(() => import('pages/Account/Forwarders'));
const Drivers = lazy(() => import('pages/Account/Drivers'));
const Owners = lazy(() => import('pages/Account/Owners'));
const Profile = lazy(() => import('pages/Account/Profile'));
const Settings = lazy(() => import('pages/Account/Settings'));
const Applications = lazy(() => import('pages/Account/Applications'));

import './scss/App.scss';
import i18n from './locales/config';
i18n.init();

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path={APP_ROUTES.AUTH.LOGIN} element={<Login />} />
          <Route path={APP_ROUTES.AUTH.REGISTRATION} element={<Registration />} />
          <Route path={APP_ROUTES.AUTH.RECOVERY} element={<Recovery />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path={APP_ROUTES.DASHBOARD.INDEX} element={<Dashboard />} />
          <Route path={APP_ROUTES.DASHBOARD.FORWARDERS} element={<Forwarders />} />
          <Route path={APP_ROUTES.DASHBOARD.DRIVERS} element={<Drivers />} />
          <Route path={APP_ROUTES.DASHBOARD.OWNERS} element={<Owners />} />
          <Route path={APP_ROUTES.DASHBOARD.PROFILE} element={<Profile />} />
          <Route path={APP_ROUTES.DASHBOARD.SETTINGS} element={<Settings />} />
          <Route path={APP_ROUTES.DASHBOARD.APPLICATIONS} element={<Applications />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
