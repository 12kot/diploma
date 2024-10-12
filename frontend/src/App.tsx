import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PublicRoutes, PrivateRoutes, Loader } from 'components';
import { APP_ROUTES, AuthProvider, ContactUsModalProvider, EditUserModalProvider } from 'features';

const Login = lazy(() => import('pages/Auth/Login'));
const Registration = lazy(() => import('pages/Auth/Registration'));
const Recovery = lazy(() => import('pages/Auth/Recovery'));
const Dashboard = lazy(() => import('pages/Account/Dashboard'));
const Users = lazy(() => import('pages/Account/Users'));
const Profile = lazy(() => import('pages/Account/Profile'));
const Settings = lazy(() => import('pages/Account/Settings'));
const Applications = lazy(() => import('pages/Account/Applications'));
const Orders = lazy(() => import('pages/Account/Orders'));
const CreateOrder = lazy(() => import('pages/Account/CreateOrder'));
import NotFound from 'pages/NotFound';

import './scss/App.scss';
import i18n from './locales/config';
import Test from 'pages/test';
i18n.init();

const App = () => {
  return (
    <AuthProvider>
      <EditUserModalProvider>
        <ContactUsModalProvider>
          <Suspense fallback={<Loader center />}>
            <Routes>
              {/* УДАЛИТЬ */ }
              <Route path="test" element={<Test />} />
              <Route path="*" element={<NotFound />} />
              <Route element={<PublicRoutes />}>
                <Route path={APP_ROUTES.AUTH.LOGIN} element={<Login />} />
                <Route path={APP_ROUTES.AUTH.REGISTRATION} element={<Registration />} />
                <Route path={APP_ROUTES.AUTH.RECOVERY} element={<Recovery />} />
              </Route>

              <Route element={<PrivateRoutes />}>
                <Route path={APP_ROUTES.DASHBOARD.INDEX} element={<Dashboard />} />
                <Route path={APP_ROUTES.DASHBOARD.USER_TYPE} element={<Users />} />
                <Route path={APP_ROUTES.DASHBOARD.ORDERS} element={<Orders />} />
                <Route path={APP_ROUTES.DASHBOARD.PROFILE} element={<Profile />} />
                <Route path={APP_ROUTES.DASHBOARD.SETTINGS} element={<Settings />} />
                <Route path={APP_ROUTES.DASHBOARD.APPLICATIONS} element={<Applications />} />
                <Route path={APP_ROUTES.DASHBOARD.CREATE_ORDER} element={<CreateOrder />} />
              </Route>
            </Routes>
          </Suspense>
        </ContactUsModalProvider>
      </EditUserModalProvider>
    </AuthProvider>
  );
};

export default App;
