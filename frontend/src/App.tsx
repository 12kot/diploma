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
                {Object.values(APP_ROUTES.DASHBOARD).map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<RequireRole allowedRoles={route.roles}>{<route.element />}</RequireRole>}
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

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCsK9B-HDe3zUEUnbBv9mf8oD9_2qLPsTs',
  authDomain: 'hh-cargo.firebaseapp.com',
  projectId: 'hh-cargo',
  storageBucket: 'hh-cargo.appspot.com',
  messagingSenderId: '750349409089',
  appId: '1:750349409089:web:b6c51b2714d72871e55fc0',
  measurementId: 'G-2VJW8MJ4EY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
