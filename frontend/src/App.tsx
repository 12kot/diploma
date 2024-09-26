import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { APP_ROUTES, AuthProvider } from 'features';

import { PublicRoutes, PrivateRoutes } from 'components';

const Login = lazy(() => import('pages/Auth/Login'));
const Registration = lazy(() => import('pages/Auth/Registration'));
const Recovery = lazy(() => import('pages/Auth/Recovery'));

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
        <Route element={<PrivateRoutes />}></Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
