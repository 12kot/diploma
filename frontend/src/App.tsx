import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from 'components';
import { APP_ROUTES, PrivateRoutes, PublicRoutes, RequireRole } from 'routes';
import { AuthProvider, ContactUsModalProvider, EditUserModalProvider } from 'features';

const Login = lazy(() => import('pages/Auth/Login'));
const Registration = lazy(() => import('pages/Auth/Registration'));
const Recovery = lazy(() => import('pages/Auth/Recovery'));

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
              {/* УДАЛИТЬ */}
              <Route path="test" element={<Test />} />
              <Route path="*" element={<NotFound />} />
              <Route element={<PublicRoutes />}>
                <Route path={APP_ROUTES.AUTH.LOGIN.path} element={<Login />} />
                <Route path={APP_ROUTES.AUTH.REGISTRATION.path} element={<Registration />} />
                <Route path={APP_ROUTES.AUTH.RECOVERY.path} element={<Recovery />} />
              </Route>

              <Route element={<PrivateRoutes />}>
                {Object.values(APP_ROUTES.DASHBOARD).map(route => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <RequireRole allowedRoles={route.roles}>
                        {<route.element />}
                      </RequireRole>
                    }
                  />
                ))}
              </Route>
            </Routes>
          </Suspense>
        </ContactUsModalProvider>
      </EditUserModalProvider>
    </AuthProvider>
  );
};

export default App;
